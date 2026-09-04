import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogDetail } from "@/components/blog-detail"
import { blogPosts, getBlogPost } from "@/lib/blog-data"

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const post = getBlogPost((await params).slug)
  return { title: post?.title ?? "Eye Care Article", description: post?.excerpt }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const post = getBlogPost((await params).slug)
  if (!post) notFound()
  return <BlogDetail post={post} />
}