import { GetQuote } from "@/components/emails/get-quote";
import { rateLimiter } from "@/lib/clients/rate-limiter";
import { resend } from "@/lib/clients/resend";
import { MAX_FILE_SIZE } from "@/lib/constants/form";
import { checkValidFileType } from "@/lib/helpers/files";
import { getFileFromR2, uploadFileToR2 } from "@/lib/helpers/s3";
import { NextRequest, NextResponse } from "next/server";
import { RateLimiterRes } from "rate-limiter-flexible";

export async function POST(request: NextRequest) {
  const formData = (await request.formData()) as FormData;

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const contactNumber = formData.get("contactNumber") as string;
  //   const title = formData.get("title") as string | null;
  const description = formData.get("description") as string;
  //   const duration = formData.get("duration") as string | null;
  //   const durationUnit = formData.get("durationUnit") as string | null;
  //   const budget = formData.get("budget") as string | null;
  const currency = formData.get("currency") as string | null;
  const file = formData.get("file") as File | null;

  if (!firstName || !lastName || !email || !contactNumber || !description) {
    return NextResponse.json("Missing required fields", { status: 400 });
  }

  // This is a public endpoint, everything is safe except for File
  // Need to validate File specifically.
  if (file) {
    if (!(file instanceof File)) {
      return NextResponse.json("Invalid file upload", { status: 400 });
    }

    // Check that one of the supported file types
    if (!checkValidFileType(file.name))
      return NextResponse.json("Unsupported file type", { status: 400 });

    if (file.size > MAX_FILE_SIZE)
      return NextResponse.json("File too large", { status: 400 });
  }

  // Check that the IP address is under the rate limit
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwarded?.split(/, /)[0] ?? realIp ?? undefined;

  // if the IP address doesn't exist, perform the rate limiting under the email
  const key = ip ?? email;
  try {
    await rateLimiter.consume(key, 1);
  } catch (rateLimiterRes) {
    // Too many emails sent
    const sBeforeNext = Math.ceil(
      (rateLimiterRes as RateLimiterRes).msBeforeNext / 1000
    );

    return NextResponse.json(
      {
        error: `Limit of 3 emails per 5 minutes exceeded. Please try again in ${sBeforeNext} seconds.`,
      },
      { status: 429 }
    );
  }

  let fileName;
  if (file) {
    fileName = `${Date.now()}-${file.name}`;

    // Upload file to remote storage and then get URL
    // generate unique file name
    const result = await uploadFileToR2("k-tool", fileName, file);

    // sure to return a result and not throw an error, so no need catch.
    // but stop here if the upload failed
    if (!result.success) {
      return NextResponse.json(
        { error: "A server error occurred while uploading the file." },
        { status: 500 }
      );
    }
  }

  // Now send the email using Resend
  // Need to obtain the file from the bucket too
  try {
    // file should have uploaded properly by this point.

    const fileContent = fileName
      ? await getFileFromR2("k-tool", fileName)
      : undefined;

    const attachments = fileName
      ? [
          {
            content: fileContent?.toString("base64") ?? undefined, // defaults to undefined for type safety
            filename: fileName,
          },
        ]
      : undefined;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM ?? "",
      to: "inquiry@ktoolengineering.com",
      subject: `New quote request from ${email}`,
      react: GetQuote({
        firstName,
        lastName,
        email,
        contactNumber,
        description,
        // duration: duration ?? undefined,
        // durationUnit: durationUnit ?? undefined,
        // budget: budget ?? undefined,
        currency: currency ?? undefined,
      }),
      attachments,
    });

    // email error
    if (error) {
      return NextResponse.json(error, { status: 500 });
    }

    // otherwise succeeded
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
