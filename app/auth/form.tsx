"use client";

import { Formschema, SignupFormSchema } from "./definitions";
import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, SubmitErrorHandler, useForm } from "react-hook-form";

export function SignUpForm() {
  const Checkform = useForm<Formschema>({
    resolver: zodResolver(SignupFormSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = Checkform;
  const onSubmitForm: SubmitHandler<Formschema> = async (d) => {
    await onSubmitForm(d);
  };
  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <label htmlFor="name">Name</label>
        <input {...register("name")} type="text" />
        <p>{errors.name && errors.name.message}</p>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="text" />
        <p>{errors.email && errors.email.message}</p>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register("password")} type="text" />
        <p>{errors.password && errors.password.message}</p>
      </div>
      <button disabled={isSubmitting}>{isSubmitting?"Loading":"Submit"}</button>
    </form>
  );
}
