"use client";

import {
  BODY_MAX_LENGTH,
  CURRENCIES,
  DURATION_UNITS,
  EMAIL_ADDRESS_MAX_LENGTH,
  EMAIL_REGEX,
  INVALID_EMAIL_MESSAGE,
  INVALID_NUMBER_MESSAGE,
  MAX_FILE_SIZE,
  NAME_MAX_LENGTH,
  REQUIRED_MESSAGE,
  SUBJECT_MAX_LENGTH,
  SUPPORTED_FILE_EXTENSIONS,
  TOO_LONG_MESSAGE,
} from "@/lib/constants/form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/form/input";
import TextArea from "@/components/ui/form/text-area";
import Button from "@/components/ui/button";
import Select from "@/components/ui/form/select";
import toast from "react-hot-toast";
import { checkValidFileType } from "@/lib/helpers/files";

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
  title: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .max(SUBJECT_MAX_LENGTH, TOO_LONG_MESSAGE(SUBJECT_MAX_LENGTH)),
  duration: yup
    .number()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue;
    })
    .nullable()
    .typeError(INVALID_NUMBER_MESSAGE), // optional alongside unit
  durationUnit: yup
    .mixed()
    .test((val) => DURATION_UNITS.includes(val as string)),
  budget: yup
    .number()
    .transform((currentValue, originalValue) => {
      return originalValue === "" ? null : currentValue;
    })
    .nullable()
    .typeError(INVALID_NUMBER_MESSAGE), // optional alongside unit
  currency: yup.mixed().test((val) => CURRENCIES.includes(val as string)),
  description: yup
    .string()
    .required(REQUIRED_MESSAGE)
    .max(BODY_MAX_LENGTH, TOO_LONG_MESSAGE(BODY_MAX_LENGTH)),
  file: yup
    .mixed()
    .test("fileSize", "The file is too large (250MB limit)", (value) => {
      // no file uploaded
      if (!(value instanceof FileList) || value.length === 0) return true;

      const file = value[0];
      return file.size <= MAX_FILE_SIZE;
    })
    .test("fileType", "Unsupported file type", (value) => {
      if (!(value instanceof FileList) || value.length === 0) return true;

      const file = value[0];

      return checkValidFileType(file.name);
    }), // optional
});

export default function GetQuoteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: yup.InferType<typeof schema>) => {
    // console.log(data);
    const toastId = toast.loading("Sending your message...");

    const {
      firstName,
      lastName,
      email,
      title,
      duration,
      durationUnit,
      budget,
      currency,
      description,
      file,
    } = data;

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("title", title);
    formData.append("description", description);

    if (duration) {
      formData.append("duration", duration.toString());
      formData.append("durationUnit", durationUnit!.toString());
    }

    if (budget) {
      formData.append("budget", budget.toString());
      formData.append("currency", currency!.toString());
    }

    if (file && file instanceof FileList && file.length > 0) {
      formData.append("file", file[0]);
    }

    const res = await fetch("/api/mail/quote", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      toast.success(
        "Quote request sent successfully! Please wait for our response."
      );
      reset();
    } else {
      let errorMessage =
        "Something went wrong. Please contact us directly via email.";

      if (res.status === 429) errorMessage = (await res.json()).error;

      toast.error(errorMessage);
    }

    toast.dismiss(toastId);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="flex gap-3">
        <Input
          label="First name *"
          placeholder="John"
          {...register("firstName")}
          error={errors.firstName?.message}
        />
        <Input
          label="Last name *"
          placeholder="Doe"
          {...register("lastName")}
          error={errors.lastName?.message}
        />
      </div>
      <Input
        label="Email address *"
        placeholder="john.doe@gmail.com"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Title *"
        placeholder="My project title ..."
        {...register("title")}
        error={errors.title?.message}
      />
      {/* Duration, budget */}
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex gap-3 w-full">
          <Input
            label="Duration"
            placeholder="How long?"
            min={1}
            {...register("duration")}
            error={errors.duration?.message}
            number
          />
          <Select
            label="Duration unit"
            {...register("durationUnit")}
            options={DURATION_UNITS.map((unit) => ({
              label: unit,
              value: unit,
            }))}
            error={errors.durationUnit?.message}
          />
        </div>
        <div className="flex gap-3 w-full">
          <Input
            label="Budget"
            placeholder="How much?"
            min={1}
            {...register("budget")}
            error={errors.budget?.message}
            number
          />
          <Select
            label="Currency"
            {...register("currency")}
            options={CURRENCIES.map((currency) => ({
              label: currency,
              value: currency,
            }))}
            error={errors.currency?.message}
          />
        </div>
      </div>

      <TextArea
        label="Description *"
        placeholder="I need ..."
        {...register("description")}
        error={errors.description?.message}
      />

      <Input
        label="File attachment"
        {...register("file")}
        type="file"
        error={errors.file?.message}
        accept={SUPPORTED_FILE_EXTENSIONS.join(",")}
      />

      <div className="mt-6">
        <Button variant="primary" size="sm">
          Submit
        </Button>
      </div>
    </form>
  );
}
