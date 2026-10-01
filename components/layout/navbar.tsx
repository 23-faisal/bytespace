import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/data/seed/landing";

export type NavLabel = (typeof navLinks)[number]["label"];

export function Navbar({ current }: { current?: NavLabel }) {
  return (
    <header className="relative z-20">
      <nav className="container-page flex h-30 items-center justify-between text-gray-50">
        <Logo />

        {/* Desktop navigation */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={
                  link.label === current
                    ? "font-medium"
                    : "transition-opacity hover:opacity-80"
                }
                aria-current={link.label === current ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/login" className="transition-opacity hover:opacity-80">
            Sign In
          </Link>

          <Link
            href="/register"
            className="transition-opacity hover:opacity-80"
          >
            Join Us
          </Link>

          <Link
            href="/courses"
            aria-label="Cart"
            className="transition-opacity hover:opacity-80"
          >
            <ShoppingBag className="size-6" />
          </Link>
        </div>

        {/* Mobile navigation */}
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  className="text-gray-50 hover:bg-white/10 hover:text-gray-50"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-6" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="border-none bg-brand p-6 text-gray-50"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>

              <Logo />

              {/* Mobile nav links */}
              <ul className="mt-8 flex flex-col gap-5 text-lg">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <SheetClose
                      nativeButton={false}
                      render={<Link href={link.href} />}
                    >
                      {link.label}
                    </SheetClose>
                  </li>
                ))}
              </ul>

              {/* Mobile actions */}
              <div className="mt-8 flex flex-col gap-3">
                <Button
                  variant="lime"
                  size="pill"
                  render={<Link href="/register" />}
                  nativeButton={false}
                >
                  Join Us
                </Button>

                <Button
                  variant="outline"
                  size="pill"
                  render={<Link href="/login" />}
                  nativeButton={false}
                  className="border-white/40 bg-transparent text-gray-50 hover:bg-white/10 hover:text-gray-50"
                >
                  Sign In
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
