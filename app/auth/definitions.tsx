import z from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email" }).trim(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[a-zA-z]/, { message: "Contain at least one letter" })
    .regex(/[0-9]/, { message: "Contain at least 1 number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Contain at least 1 special character" })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email" }),
  password: z.string().min(1, { message: "Please enter password" }),
});

export type FormState =
  | {
      errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type SessionPayload = {
  userId: string | number;
  expiresAt: Date;
};
