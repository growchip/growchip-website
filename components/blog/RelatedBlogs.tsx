import Link from "next/link";
import Image from "next/image";
import { apolloClient } from "@/lib/apolloClient";
import { RELATED_BLOGS_QUERY } from "@/lib/queries";

export default async function RelatedBlogs({
  currentSlug,
  categorySlug,
}: {
  currentSlug: string;
  categorySlug: string;
}) {
  /* SAFETY GUARD */
  if (!currentSlug || !categorySlug) return null;

  const { data } = await apolloClient.query({
    query: RELATED_BLOGS_QUERY,
    variables: {
      slug: currentSlug,
      categorySlug,
    },
  });

  const blogs = data?.blogs ?? [];

  if (!blogs.length) return null;

  return (
    <div className="rounded-xl shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Related Blogs</h3>

      <div className="space-y-4">
        {blogs.map((blog: any) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="flex gap-3 items-center hover:bg-gray-100 hover:text-black p-2 rounded-lg transition"
          >
            {blog.featuredImage?.url && (
              <Image
                src={blog.featuredImage.url}
                alt={blog.title}
                width={80}
                height={60}
                className="rounded-md object-cover"
              />
            )}

            <p className="text-sm font-medium line-clamp-2">
              {blog.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}