import Image from "next/image";
import { apolloClient } from "@/lib/apolloClient";
import { BLOG_BY_SLUG } from "@/lib/queries";
import RelatedBlogs from "@/components/blog/RelatedBlogs";
import BasicFrom from "@/components/Contact/BasicFrom";

import { RichText } from "@graphcms/rich-text-react-renderer";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  
  const { slug } = await params;

  if (!slug) {
    throw new Error("Slug missing");
  }

  
  const { data } = await apolloClient.query({
    query: BLOG_BY_SLUG,
    variables: { slug },
  });

  const blog = data?.blog;

  if (!blog) {
    throw new Error("Blog not found");
  }

  const categorySlug = blog.categories?.[0]?.slug;

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* MAIN BLOG */}
        <article className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

          <p className="text-gray-500 mb-6">
            By {blog.author?.name} •{" "}
            {new Date(blog.publishedAt).toDateString()}
          </p>

          {blog.featuredImage?.url && (
            <Image
              src={blog.featuredImage.url}
              alt={blog.title}
              width={800}
              height={400}
              className="w-full rounded-lg mb-8"
              priority
            />
          )}

          {/* ✅ SAFE RICH TEXT RENDERING */}
          <div className="prose max-w-none">
            <RichText content={blog.content.raw} />
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="space-y-8">
          <div className="p-4 rounded-3xl shadow-inner">
            <BasicFrom />
          </div>

          <RelatedBlogs
            currentSlug={blog.slug}
            categorySlug={categorySlug}
          />
        </aside>

      </div>
    </section>
  );
}
