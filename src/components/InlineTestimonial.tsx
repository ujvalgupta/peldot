/* eslint-disable @next/next/no-img-element */
import { PlayIcon } from "@/components/icons";

interface InlineTestimonialProps {
  quote: string;
  name: string;
  role: string;
  poster: string;
}

/** Horizontal testimonial: video poster (left) + quote and attribution (right). */
export function InlineTestimonial({ quote, name, role, poster }: InlineTestimonialProps) {
  return (
    <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-8 sm:flex-row sm:items-center sm:gap-10">
      <a
        href="#"
        className="group relative block w-full max-w-[260px] shrink-0 overflow-hidden rounded-2xl bg-black/5"
      >
        <img
          src={poster}
          alt={`${name} testimonial`}
          className="aspect-[3/4] h-auto w-full object-cover"
        />
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
