import Link from "next/link";
import { WhaleMarkIcon } from "@/components/icons";
import type { FooterColumn } from "@/types/content";

const COLUMNS: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "API & Webhook", href: "/api" },
      { label: "Documentation", href: "/api" },
      { label: "Demo Video", href: "/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Customer Stories", href: "/customer-stories" },
      { label: "Partners", href: "/partner" },
      { label: "Blog", href: "/blog" },
      { label: "About Us", href: "/story" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Integrations",
    links: [
      { label: "Hubly", href: "/integrations/hubly" },
      { label: "Forcely", href: "/integrations/forcely" },
      { label: "Pingr", href: "/integrations/pingr" },
      { label: "Tablr", href: "/integrations/tablr" },
      { label: "MCP/Atlas", href: "/integrations/atlas" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Contact", href: "/partner" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of service", href: "/terms" },
      { label: "Data Policy", href: "/data-policy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-[280px]">
            <div className="flex items-center gap-2">
              <WhaleMarkIcon className="h-7 w-7" />
              <span className="text-[22px] font-bold tracking-tight text-[#0a0a0a]">
                Peldot
              </span>
            </div>
            <p className="mt-4 text-[15px] italic leading-[1.5] text-[#8a8a8a]">
              We use AI to amplify human potential, not replace it.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="mb-4 text-[15px] font-bold text-[#0a0a0a]">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#6b6b6b] transition-colors hover:text-[#0a0a0a]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
