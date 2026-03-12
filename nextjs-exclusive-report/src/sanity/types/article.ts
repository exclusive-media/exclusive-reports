export interface Author {
    name: string
    image?: any
    bio?: any[]
    role?: string
    socialLinks?: Array<{
        platform: string
        url: string
    }>
}

export interface Category {
    title: string
    slug: string
}

export interface RelatedArticle {
    title: string
    slug: string
    dek?: string
    image?: any
}

export interface Article {
    _id: string
    title: string
    dek?: string
    body: any[]           // Portable Text
    publishDate: string
    readingTime?: number
    format?: string
    featured?: boolean
    author: Author
    category: Category
    relatedArticles?: RelatedArticle[]
}