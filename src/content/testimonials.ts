export interface TestimonialMetric {
  value: string;
  caption: string;
}

export interface Testimonial {
  company: string;
  name: string;
  role: string;
  quote: string;
  metrics: TestimonialMetric[];
  href?: string;
  /** Rendered as a video-style card in the homepage Testimonials section. */
  featuredOnHome?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    company: "Arcwell",
    name: "Riley Stone",
    role: "Sales Representative, Arcwell",
    quote:
      "Peldot helped us stop chasing digital noise and start seeing real opportunity. It's like having a radar that tells you when and where to make your move.",
    metrics: [
      { value: "5 DAYS", caption: "TO ROI AFTER SIGNING UP FOR PELDOT." },
      { value: "2,800", caption: "ACCOUNTS PRIORITIZED IN JUST 24 HOURS." },
    ],
    href: "/customer-stories/arcwell-case-study",
  },
  {
    company: "Quantel",
    name: "Devin Hart",
    role: "Account Executive, Quantel",
    quote:
      "It's so easy to use. I truly cannot highlight that point enough. This is the information you need, right where you need it and when you need it. Don't hesitate to try it out.",
    metrics: [
      { value: "300+", caption: "ACCOUNTS RANKED" },
      { value: "13 Signals", caption: "IN THE FIRST TWO WEEKS" },
    ],
    featuredOnHome: true,
  },
  {
    company: "Lumeo",
    name: "Adrian Cole",
    role: "GTM Lead, Lumeo",
    quote:
      "Even just within our ICP, there are so many accounts that I had never heard of before. It's been cool even when I thought I already had a decent grasp of our ICP.",
    metrics: [
      { value: "30 minutes", caption: "TO FIRST SUGGESTIONS" },
      { value: "279 accounts", caption: "SUGGESTIONS FOUND" },
    ],
    featuredOnHome: true,
  },
];
