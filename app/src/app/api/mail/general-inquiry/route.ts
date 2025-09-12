import { GeneralEnquiry } from "@/components/emails/general-inquiry";
import { resend } from "@/lib/clients/resend";
import { NextRequest, NextResponse } from "next/server";

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
