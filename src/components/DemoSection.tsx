/* eslint-disable @next/next/no-img-element */
import { PlayIcon } from "@/components/icons";

export function DemoSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-5 pt-10 pb-16 sm:px-8 sm:pt-14">
      <p className="mb-7 text-center text-[15px] font-medium text-[#7a7a7a]">
        See WhiteWhale in action —{" "}
        <span className="font-semibold text-[#0a0a0a]">5 Min Demo</span>
      </p>

      <a
        href="#"
        className="group relative mx-auto block max-w-[1040px] overflow-hidden rounded-2xl border border-hairline bg-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
      >
        <img
          src="/images/platform-home.png"
          alt="WhiteWhale platform home screen — Accounts dashboard"
          width={848}
          height={477}
          className="h-auto w-full"
        />
        {/* Play overlay */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-105">
            <PlayIcon className="ml-1 h-6 w-6 text-[#1c1c1c]" />
          </span>
        </span>
      </a>
    </section>
  );
}
