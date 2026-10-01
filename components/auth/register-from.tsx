"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { AuthField } from "./auth-field";

export function RegisterForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Static form — no backend registration yet.
    console.log("Registration form submitted");
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
            label="Full Name"
            name="name"
            autoComplete="name"
            placeholder="Jamie Davis"
            required
          />

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
            autoComplete="new-password"
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
          Continue
        </Button>
      </form>

      <p className="mt-auto text-base text-[#888]">
        Already have an account?{" "}
        <Link href="/login" className="text-brand hover:underline">
          Login
        </Link>
      </p>
    </>
  );
}
