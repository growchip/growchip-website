import Image from "next/image";
import { apolloClient } from "@/lib/apolloClient";
import { BLOG_BY_SLUG } from "@/lib/queries";

export const revalidate = 60;

interface PageProps {
  params: { slug: string };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { data } = await apolloClient.query({
    query: BLOG_BY_SLUG,
    variables: { slug: params.slug },
  });

  const blog = data?.blog;

  if (!blog) {
    return <p className="text-center py-20">Blog not found</p>;
  }

  return (
    <article className="max-w-4xl  mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">
        {blog.title}
      </h1>

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
        />
      )}

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: blog.content.html,
        }}
      />
    </article>
  );
}