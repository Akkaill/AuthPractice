"use server";
import { SignupFormSchema, FormState, LoginFormSchema } from "./definitions";

export async function signup(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validation = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });
  if (!validation.success) {
    return { errors: validation.error.flatten().fieldErrors };
  }
  console.log(validation);
}
