import type { SVGProps } from "react";

/** Rightward arrow used in CTA buttons ("See your signals →"). */
export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <line x1="4" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  );
}

/** Chevron used in nav dropdowns and FAQ rows. */
export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/** Filled play triangle for video thumbnails. */
export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

/** Checkmark used in feature/pricing lists. */
export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/** Peldot whale mark (rounded black square with whale silhouette). */
export function WhaleMarkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <rect width="32" height="32" rx="8" fill="#0a0a0a" />
      <path
        d="M7 18.5c2.2-.4 3.4-1.6 4.6-3.2 1.4-1.9 3.4-3.3 6.1-3.3 3.4 0 5.8 2 6.8 3.9.3.6-.1 1-.6.8-1-.4-1.8-.2-2.3.4 1 .5 1.5 1.2 1.6 2 .05.5-.5.7-.8.3-.7-.8-1.7-1.1-2.7-1-2.6.2-4.2 1.6-6.6 1.6-2.6 0-4.8-1-6.1-2.6-.3-.4 0-1 .4-.9z"
        fill="#fff"
      />
      <circle cx="20.3" cy="14.8" r="0.7" fill="#0a0a0a" />
    </svg>
  );
}
