import { groq } from 'next-sanity'

/**
 * Get single article by slug
 * Optimized: Only fetches what we need for the article page
 * Uses reference expansion (author->, category->)
 */
export const getArticleBySlug = groq`
  *[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    dek,
    body,
    publishDate,
    readingTime,
    format,
    featured,
    "author": author->{
      name,
      image,
      bio,
      role,
      "socialLinks": socialLinks[]{
        platform,
        url
      }
    },
    "category": category->{
      title,
      slug
    },
    "relatedArticles": relatedArticles[0...3]->{
      title,
      slug,
      dek,
      "image": featuredImage
    }
  }
`