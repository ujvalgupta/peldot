import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Prose } from "@/components/Prose";
import { CtaSection } from "@/components/CtaSection";
import { BLOG_POSTS, getPost } from "@/content/blog-posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Blog — WhiteWhale" };
  return { title: `${post.title} — WhiteWhale`, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-[760px] px-5 pt-12 pb-16 sm:px-8 sm:pt-20">
        <Link href="/blog" className="text-[14px] font-medium text-ww-accent-blue hover:underline">
          ← All posts
        </Link>
        <div className="mt-6 flex items-center gap-3 text-[13px]">
          <span className="rounded-full bg-surface-alt px-3 py-1 font-semibold text-[#4b4b4b]">
            {post.category}
          </span>
          <span className="text-[#9a9a9a]">{post.date}</span>
          {post.author && <span className="text-[#9a9a9a]">· by {post.author}</span>}
        </div>
        <h1 className="heading-display mt-5 text-[36px] font-bold leading-[1.1] text-[#0a0a0a] sm:text-[48px]">
          {post.title}
        </h1>
        <p className="mt-5 text-[19px] leading-[1.5] text-[#5b5b5b]">{post.excerpt}</p>
        <hr className="my-8 border-hairline" />
        <Prose blocks={post.blocks} />
      </article>

      <CtaSection />
    </>
  );
}
