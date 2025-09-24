import { GeneralEnquiry } from "@/components/emails/general-inquiry";
import { rateLimiter } from "@/lib/clients/rate-limiter";
import { resend } from "@/lib/clients/resend";
import { NextRequest, NextResponse } from "next/server";
import { RateLimiterRes } from "rate-limiter-flexible";

interface PostPayload {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: NextRequest) {
  let payload: PostPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json("Invalid JSON in request body", { status: 400 });
  }

  const { firstName, lastName, email, subject, message } = payload;

  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json("Missing required fields", { status: 400 });
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

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM ?? "",
      to: process.env.RESEND_EMAIL_TO ?? "",
      subject: `General enquiry: ${subject}`,
      react: GeneralEnquiry({
        firstName,
        lastName,
        email,
        message,
      }),
    });

    if (error) {
      // console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
    return NextResponse.json(data);
  } catch (error) {
    // console.error(error);
    return NextResponse.json(error, { status: 500 });
  }
}
