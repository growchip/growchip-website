export interface Category {
  name: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  categories: Category[];
}
