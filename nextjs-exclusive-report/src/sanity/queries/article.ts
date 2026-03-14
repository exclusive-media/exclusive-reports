import { groq } from 'next-sanity'

export const getArticleBySlug = groq`
  *[_type == "article" && slug.current == $slug][0]{
    _id,
    title,
    dek,
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
      "slug": slug.current
    },
    "relatedArticles": relatedArticles[0...3]->{
      title,
      "slug": slug.current,
      dek,
      "publishedAt": publishDate,
      "mainImage": featuredImage.asset->{ url },
      readingTime,
      "author": author->{ name, image }
    },
    body[] {
      ...,
      _type == "gallery" => {
        layout,
        images[]
      },
      _type == "imageWithHotspots" => {
        image,
        hotspots[]
      },
      _type == "stats" => {
        items
      },
      _type == "summaryList" => {
        title,
        items 
      }, 
      _type == "promo" => {
        title,
        description,
        image,
        link,
        buttonText,
        variant
      }, 
      _type == "adPlaceholder" => {
         title,
         description,
         image,
         link,
         buttonText,
         variant
      }, 
      _type == "recommendedReading" => {
         title,
         articles[]->{
            title,
            "slug": slug.current,
            dek,
            "publishedAt": publishDate,
            "mainImage": featuredImage.asset->{ url },
            readingTime,
            "author": author->{ name, image }
         }
      } 
    }
  
    }
`