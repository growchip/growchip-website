import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https//www.growchiaiteachnology.com";

  return [
   
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },


    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },

    {
      url: `${baseUrl}/blog/artificial-intelligence`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

   
    {
      url: `${baseUrl}/blog/web-development`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    
    {
      url: `${baseUrl}/blog/cyber-security`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    
    {
      url: `${baseUrl}/tutorials`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },

 
   
    
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

     {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}