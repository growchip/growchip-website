import Link from "next/link";
import Image from "next/image";
import { apolloClient } from "@/lib/apolloClient";
import { BLOGS_QUERY, CATEGORIES_QUERY } from "@/lib/queries";

export const revalidate = 60;

export default async function BlogPage() {
  const [{ data: blogData }, { data: categoryData }] =
    await Promise.all([
      apolloClient.query({ query: BLOGS_QUERY }),
      apolloClient.query({ query: CATEGORIES_QUERY }),
    ]);

  const blogs = blogData?.blogs ?? [];
  const categories = categoryData?.categories ?? [];

  return (
    <>
      {/* HERO */}
      <section className="py-20 text-white">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#84DA2E] to-[#2596BE] rounded-3xl px-6 py-20 text-center">
          <h1 className="text-5xl font-bold">Our Blog</h1>
          <p className="mt-4 text-lg text-gray-200">
            Insights, tutorials, and tech updates
          </p>
        </div>
      </section>

      {/* CATEGORY LIST */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="px-5 py-2 rounded-full outline-2   outline-[#84DA2E]  hover:scale-105 transition-transform duration-300 hover:bg-white  hover:text-[#2596BE]  transition"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10 pb-40">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-2xl p-6 hover:shadow-lg transition">
            <Link href={`/blog/${blog.slug}`}>
              {blog.featuredImage?.url && (
                <Image
                  src={blog.featuredImage.url}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="rounded-xl h-48 object-cover"
                />
              )}
              <h2 className="mt-4 text-2xl font-semibold">
                {blog.title}
              </h2>
            </Link>

            <p className="mt-2 text-gray-600">{blog.excerpt}</p>

            <div className="mt-3 flex gap-2 flex-wrap">
              {blog.categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="text-sm text-blue-600"
                >
                  #{cat.name}
                </Link>
              ))}
               </div>
               <Link href={`/blog/${blog.slug}`} className="inline-flex items-center mt-10 text-sm px-4 py-2.5 rounded-2xl border-[#84DA2E]   
               border-2   text-white hover:border-0 hover:bg-white  hover:text-black  hover:scale-105 transition-transform duration-300
               hover:bg-neutral-tertiary-medium" > Read more
               <svg className="w-4 h-4 ms-1.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /> </svg> </Link>
















              
           
          </div>
        ))}
      </section>
    </>
  );
}
