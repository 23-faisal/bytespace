import type { Metadata } from "next";

import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = { title: "Sign In | ByteSpace" };

export default function LoginPage() {
  return (
    <AuthShell
      intro={{
        title: "Sign in with ease",
        description:
          "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
      }}
      eyebrow="Sign In"
      heading="Welcome Back"
    >
      <LoginForm />
    </AuthShell>
  );
}
