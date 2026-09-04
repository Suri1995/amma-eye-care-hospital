import type { Metadata } from "next"
import { BlogListing } from "@/components/blog-listing"
import { blogPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Eye Care Blog",
  description: "Helpful eye-care guidance from Amma Eye Care Hospitals in Hyderabad.",
}

export default function BlogsPage() {
  return <BlogListing post={blogPosts[0]} />
}