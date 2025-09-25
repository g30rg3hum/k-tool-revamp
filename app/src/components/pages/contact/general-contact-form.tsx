"use client";

import {
  BODY_MAX_LENGTH,
  EMAIL_ADDRESS_MAX_LENGTH,
  EMAIL_REGEX,
  INVALID_EMAIL_MESSAGE,
  NAME_MAX_LENGTH,
  REQUIRED_MESSAGE,
  SUBJECT_MAX_LENGTH,
  TOO_LONG_MESSAGE,
} from "@/lib/constants/form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Input from "@/components/ui/form/input";
import TextArea from "@/components/ui/form/text-area";
import Button from "@/components/ui/button";

const schema = yup.object({
  firstName: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .max(NAME_MAX_LENGTH, TOO_LONG_MESSAGE(NAME_MAX_LENGTH)),
  lastName: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .max(NAME_MAX_LENGTH, TOO_LONG_MESSAGE(NAME_MAX_LENGTH)),
  email: yup
    .string()
    .matches(EMAIL_REGEX, { message: INVALID_EMAIL_MESSAGE })
    .required(REQUIRED_MESSAGE)
    .max(EMAIL_ADDRESS_MAX_LENGTH, TOO_LONG_MESSAGE(EMAIL_ADDRESS_MAX_LENGTH)),
  subject: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .max(SUBJECT_MAX_LENGTH, TOO_LONG_MESSAGE(SUBJECT_MAX_LENGTH)),
  message: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .max(BODY_MAX_LENGTH, TOO_LONG_MESSAGE(BODY_MAX_LENGTH)),
});

export default function GeneralContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    const toastId = toast.loading("Sending your message...");

    const { firstName, lastName, email, subject, message } = data;

    const res = await fetch("/api/mail/general-inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        subject,
        message,
      }),
    });

    if (res.ok) {
      toast.success("Enquiry sent successfully! Please wait for our response.");
      reset();
    } else {
      let errorMessage =
        "Something went wrong. Please contact us directly via email.";
      // Status code 429, rate limit exceeded
      if (res.status === 429) errorMessage = (await res.json()).error;

      toast.error(errorMessage);
    }

    toast.dismiss(toastId);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex gap-3">
        <Input
          label="First name"
          placeholder="John"
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          label="Last name"
          placeholder="Doe"
          {...register("lastName")}
          error={errors.lastName?.message}
        />
      </div>
      <Input
        label="Email address"
        placeholder="john.doe@gmail.com"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Subject"
        placeholder="Enquiry about ..."
        {...register("subject")}
        error={errors.subject?.message}
      />
      <TextArea
        label="Message"
        placeholder="I'd like to enquire about ..."
        {...register("message")}
        error={errors.message?.message}
      />

      <div className="mt-6">
        <Button variant="primary" size="sm">
          Submit
        </Button>
      </div>
    </form>
  );
}
