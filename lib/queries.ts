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
  query BlogBySlug {
  blog(where: {slug: "web-designing-services-in-chandigarh"}) {
    title
    content {
      html
    }
    publishedAt
    seo {
      metaTitle
      metaDescription
    }
    featuredImage {
      url(transformation: {image: {resize: {width: 1366, height: 786}}, document: {}})
    }
    author {
      name
      avatar {
        url(transformation: {image: {resize: {width: 400}}})
      }
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