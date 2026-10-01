"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { AuthField } from "./auth-field";
import { SocialLogin } from "./social-login";

export function LoginForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Static form — no authentication/backend action yet.
    console.log("Login form submitted");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col items-end gap-6"
        noValidate
      >
        <div className="flex w-full flex-col gap-6">
          <AuthField
            label="Email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="designer@example.com"
            required
          />

          <AuthField
            label="Password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="********"
            required
          />
        </div>

        <Button
          type="submit"
          variant="lime"
          size="pill"
          className="font-medium"
        >
          Sign In
        </Button>
      </form>

      <SocialLogin />

      <p className="mt-auto text-base text-[#888]">
        New user?{" "}
        <Link href="/register" className="text-brand hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
}
