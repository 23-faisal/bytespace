import type { Metadata } from "next";

import { AuthShell } from "@/components/auth/auth-shell";
import { RegisterForm } from "@/components/auth/register-from";

export const metadata: Metadata = { title: "Create an Account | ByteSpace" };

export default function RegisterPage() {
  return (
    <AuthShell
      intro={{
        title: "Sign up and come in",
        description:
          "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
      }}
      eyebrow="Create an Account"
      heading="Welcome to ByteSpace"
    >
      <RegisterForm />
    </AuthShell>
  );
}
