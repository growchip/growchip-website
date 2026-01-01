import { getBlogsByCategory } from "@/lib/apolloClient";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const blogs = await getBlogsByCategory(slug);

  if (!blogs.length) {
    return (
      <p className="text-center py-20 text-white">
        No blogs found in this category.
      </p>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Category Heading */}
      <h1 className="text-4xl font-bold mb-12 capitalize">
        {slug.replace(/-/g, " ")}
      </h1>

      {/* Blog Cards */}
      <div className="grid sm:grid-cols-2  lg:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="group rounded-2xl border border-gray-200 hover:scale-105 transition-transform duration-300 overflow-hidden hover:shadow-xl transition"
          >
            {/* Featured Image */}
            {blog.featuredImage?.url && (
              <Link href={`/blog/${blog.slug}`}>
                <Image
                  src={blog.featuredImage.url}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            )}

            {/* Content */}
            <div className="p-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-3">
                {blog.categories?.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/category/${cat.slug}`}
                    className="text-xs px-3 py-1  outline-1 rounded-full hover:bg-gray-200 hover:text-black"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 line-clamp-3">{blog.excerpt}</p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </span>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
