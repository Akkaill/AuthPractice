"use client";

import { signup } from "./actions";
import {useFormStatus} from "react-dom";
import { useActionState } from "react";

export function SignUpForm() {
  const [state, action] = useActionState(signup,undefined);
  return (
    <form action={action}>
      <input type="name" />
      {state?.errors?.name && (<p>{state.errors.name}</p>)}
      <input type="email" />
      {state?.errors?.email && (<p>{state.errors.email}</p>)}
      <input type="password" />
      {state?.errors?.password && (<p>{state.errors.password}</p>)}
      <SignupButton/>
    </form>
  );
};
export function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit" className="mt-2 w-full">
      {pending ? 'Submitting...' : 'Login'}
    </button>
  );
}

