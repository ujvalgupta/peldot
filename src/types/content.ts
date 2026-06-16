/** Shared content types for the Peldot clone. */

export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface CustomerLogo {
  name: string;
  src: string;
  /** svg logos render via <img> too; flag kept for clarity */
  width: number;
  height: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqGroup {
  heading: string;
  items: FaqItem[];
}

export interface VideoTestimonial {
  quote: string;
  name: string;
  role: string;
  poster: string;
}

export interface FooterColumn {
  heading: string;
  links: { label: string; href: string }[];
}
