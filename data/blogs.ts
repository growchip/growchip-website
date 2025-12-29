export interface Category {
  name: string;
  slug: string;
}

export interface Author {
  name: string;
  avatar?: {
    url: string;
  };
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  createdAt: string;
  featuredImage?: {
    url: string;
  };
  categories: {
    name: string;
    slug: string;
  }[];
}
export interface Category {
  id: string;
  name: string;
  slug: string;
}