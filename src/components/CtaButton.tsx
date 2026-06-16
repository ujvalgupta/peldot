import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@/components/icons";

interface CtaButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  withArrow?: boolean;
  className?: string;
}

/** Pill button matching WhiteWhale CTAs: dark primary or bordered outline. */
export function CtaButton({
  children,
  href = "/pricing",
  variant = "primary",
  withArrow = false,
  className,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-md px-7 py-3.5 text-[15px] font-semibold transition-all",
        variant === "primary"
          ? "bg-[#1c1c1c] text-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:opacity-90"
          : "border border-[#d9d9d9] bg-white text-[#1c1c1c] hover:border-[#bdbdbd]",
        className,
      )}
    >
      {children}
      {withArrow && (
        <ArrowRightIcon className="h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
