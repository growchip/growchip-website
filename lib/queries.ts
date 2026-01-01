import { gql } from "@apollo/client";


export const BLOGS_QUERY = gql`
  query Blogs {
    blogs(orderBy: publishedAt_DESC) {
      id
      title
      slug
      excerpt
      publishedAt
      featuredImage {
        url
      }
      author {
        name
      }
      categories {
        name
        slug
      }
    }
  }
`;

export const BLOG_BY_SLUG = gql`
  query BlogBySlug($slug: String!) {
  blog(where: { slug: $slug }) {
    id
    slug
    title
    content {
      raw
    }
    publishedAt
    seo {
      metaTitle
      metaDescription
    }
    featuredImage {
      url(
        transformation: {
          image: { resize: { width: 1366, height: 786 } }
        }
      )
    }
    author {
      name
      avatar {
        url(transformation: { image: { resize: { width: 400  } } })
      }
    }
    categories {
      slug
      name
    }
  }
}
`;
export const BLOGS_BY_CATEGORY = gql`
   query BlogsByCategory($slug: String!) {
  blogs(
    where: { categories_some: { slug: $slug } }
    orderBy: createdAt_DESC
  ) {
    id
    title
    slug
    excerpt
    createdAt
    featuredImage {
      url
    }
    categories {
      name
      slug
    }
  }
}

`;


export const CATEGORIES_QUERY = gql`
  query Categories {
    categories(orderBy: name_ASC) {
      id
      name
      slug
    }
  }
`;

/* Recent Blogs */
export const RELATED_BLOGS_QUERY = gql`
  query RelatedBlogs($slug: String!, $categorySlug: String!) {
    blogs(
      where: {
        slug_not: $slug
        categories_some: { slug: $categorySlug }
      }
      orderBy: publishedAt_DESC
      first: 4
    ) {
      id
      title
      slug
      featuredImage {
        url
      }
    }
  }
`;
