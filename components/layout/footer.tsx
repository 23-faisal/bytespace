import Link from "next/link";

import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footerLinks, legalLinks } from "@/data/seed/landing";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white text-ink">
      <div className="container-page flex flex-col gap-16 pt-[71px] pb-10 lg:gap-[130px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-[92px]">
          <div className="flex max-w-[528px] flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Logo className="text-ink" />
              <p className="text-sm leading-[1.6]">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <form
                className="flex flex-col gap-4 sm:flex-row sm:gap-6"
                action="#"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-[52px] rounded-full border-gray-200 px-6 text-base placeholder:text-ink sm:w-[376px]"
                />
                <Button
                  type="submit"
                  variant="lime"
                  size="pill"
                  className="font-medium"
                >
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-950 leading-[1.6]">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:w-[580px] lg:pt-12">
            {footerLinks.map((column, i) => (
              <ul key={i} className="flex flex-col gap-4 text-sm leading-[1.6]">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-200 pt-4 text-xs leading-[1.6] sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link}>
                <Link href="#" className="transition-colors hover:text-brand">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
