import { PlayIcon } from "@/components/icons";

interface InlineTestimonialProps {
  quote: string;
  name: string;
  role: string;
  /** Optional — retained for API compatibility; avatar is generated from name. */
  poster?: string;
}

function initials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

/** Horizontal testimonial: placeholder avatar (left) + quote and attribution (right). */
export function InlineTestimonial({ quote, name, role }: InlineTestimonialProps) {
  return (
    <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
      <a
        href="#"
        className="group relative flex aspect-[3/4] w-full max-w-[260px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-ww-blue to-[#1c1c1c]"
      >
        <span className="text-[56px] font-bold text-white/80">{initials(name)}</span>
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform group-hover:scale-105">
            <PlayIcon className="ml-0.5 h-5 w-5 text-[#1c1c1c]" />
          </span>
        </span>
      </a>

      <div className="flex-1 text-center sm:text-left">
        <p className="heading-display text-[26px] font-semibold leading-[1.25] text-[#0a0a0a] sm:text-[32px]">
          {quote}
        </p>
        <p className="mt-5 text-[16px] font-bold text-[#0a0a0a]">{name}</p>
        <p className="text-[15px] text-[#7a7a7a]">{role}</p>
      </div>
    </div>
  );
}
