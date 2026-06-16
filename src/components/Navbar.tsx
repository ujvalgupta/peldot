"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, ChevronDownIcon, WhaleMarkIcon } from "@/components/icons";

type SubLink = { label: string; href: string };
type NavLink = { label: string; href: string; dropdown?: SubLink[] };

const RESOURCES: SubLink[] = [
  { label: "Customer Stories", href: "/customer-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Our Story", href: "/story" },
  { label: "Careers", href: "/careers" },
];

const INTEGRATIONS: SubLink[] = [
  { label: "HubSpot", href: "/integrations/hubspot" },
  { label: "Salesforce", href: "/integrations/salesforce" },
  { label: "Slack", href: "/integrations/slack" },
  { label: "Clay", href: "/integrations/clay" },
  { label: "MCP / Claude", href: "/integrations/mcp" },
];

const NAV_LINKS: NavLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "API", href: "/api" },
  { label: "Partners", href: "/partner" },
  { label: "Resources", href: "/customer-stories", dropdown: RESOURCES },
  { label: "Integrations", href: "/integrations/hubspot", dropdown: INTEGRATIONS },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-5 sm:px-8">
        {/* Left: logo + links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <WhaleMarkIcon className="h-7 w-7" />
            <span className="text-[22px] font-bold tracking-tight text-[#0a0a0a]">
              WhiteWhale
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="group relative">
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 text-[15px] font-medium text-[#4b4b4b] transition-colors hover:text-[#0a0a0a]"
                  >
                    {link.label}
                    <ChevronDownIcon className="h-4 w-4" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                    <div className="min-w-[200px] rounded-xl border border-hairline bg-white p-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.25)]">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          className="block rounded-lg px-3 py-2 text-[14px] font-medium text-[#4b4b4b] transition-colors hover:bg-[#f5f5f5] hover:text-[#0a0a0a]"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 text-[15px] font-medium text-[#4b4b4b] transition-colors hover:text-[#0a0a0a]"
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* Right: login + CTA */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="https://app.getwhitewhale.com"
            className="text-[15px] font-medium text-[#4b4b4b] transition-colors hover:text-[#0a0a0a]"
          >
            Login
          </a>
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-md bg-[#1c1c1c] px-5 py-2.5 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          >
            See signals
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <div className="space-y-1.5">
            <span className={cn("block h-0.5 w-6 bg-[#0a0a0a] transition", open && "translate-y-2 rotate-45")} />
            <span className={cn("block h-0.5 w-6 bg-[#0a0a0a] transition", open && "opacity-0")} />
            <span className={cn("block h-0.5 w-6 bg-[#0a0a0a] transition", open && "-translate-y-2 -rotate-45")} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-hairline bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[15px] font-semibold text-[#1c1c1c]"
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="mb-1 ml-3 flex flex-col gap-1 border-l border-hairline pl-3">
                    {link.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-[14px] text-[#6b6b6b]"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="https://app.getwhitewhale.com" className="py-2 text-[15px] font-semibold text-[#1c1c1c]">
              Login
            </a>
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-[#1c1c1c] px-5 py-2.5 text-[14px] font-semibold text-white"
            >
              See signals
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
