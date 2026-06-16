import type { Metadata } from "next";
import Link from "next/link";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Blog — WhiteWhale",
  description:
    "Read company updates, product launches, and market comparisons to stay up to date on the latest in GTM technology.",
};

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  featured?: boolean;
}

const POSTS: Post[] = [
  {
    slug: "lemlist-partners-with-whitewhale",
    title: "lemlist partners with WhiteWhale",
    excerpt: "Europe's leading GTM tool partners with WhiteWhale.",
    category: "Company",
    date: "Jun 1, 2026",
    featured: true,
  },
  {
    slug: "best-sales-intelligence-platforms",
    title: "Best 11 Sales Intelligence Platforms (2026)",
    excerpt: "A breakdown of the top sales intelligence platforms and where WhiteWhale fits in.",
    category: "Guide",
    date: "Jun 14, 2026",
  },
  {
    slug: "what-is-a-sales-signal",
    title: "What is a Sales Signal?",
    excerpt: "The definition of a sales signal — and why custom, verifiable signals beat generic intent data.",
    category: "Education",
    date: "Jun 9, 2025",
  },
  {
    slug: "whitewhale-vs-6sense",
    title: "WhiteWhale vs 6sense",
    excerpt: "How custom buying signals with verifiable sources compare to traditional intent data.",
    category: "Comparison",
    date: "Jun 15, 2026",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = POSTS;
  return (
    <>
      <section className="mx-auto max-w-[900px] px-5 pt-16 pb-10 text-center sm:px-8 sm:pt-24">
        <h1 className="heading-display text-[42px] font-bold text-[#0a0a0a] sm:text-[56px]">
          Everything you need to know.
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-[18px] leading-[1.5] text-[#5b5b5b]">
          Read company updates, product launches, and market comparisons to stay up to date on the
          latest in GTM technology.
        </p>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 pb-16 sm:px-8">
        {/* Featured */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-2xl border border-hairline bg-surface-alt p-8 transition-shadow hover:shadow-[0_16px_48px_-24px_rgba(0,0,0,0.3)] sm:p-12"
        >
          <div className="flex items-center gap-3 text-[13px]">
            <span className="rounded-full bg-[#0a0a0a] px-3 py-1 font-semibold text-white">
              {featured.category}
            </span>
            <span className="text-[#9a9a9a]">{featured.date}</span>
          </div>
          <h2 className="heading-display mt-5 max-w-[680px] text-[30px] font-medium text-[#0a0a0a] group-hover:underline sm:text-[40px]">
            {featured.title}
          </h2>
          <p className="mt-4 max-w-[620px] text-[17px] leading-[1.55] text-[#5b5b5b]">
            {featured.excerpt}
          </p>
        </Link>

        {/* Grid */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-hairline bg-white p-7 transition-shadow hover:shadow-[0_14px_44px_-22px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center gap-3 text-[12px]">
                <span className="rounded-full bg-surface-alt px-2.5 py-1 font-semibold text-[#4b4b4b]">
                  {post.category}
                </span>
                <span className="text-[#9a9a9a]">{post.date}</span>
              </div>
              <h3 className="mt-4 flex-1 text-[20px] font-bold leading-snug text-[#0a0a0a] group-hover:underline">
                {post.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.5] text-[#6b6b6b]">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
