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
    body: Array<
        | { _type: 'block' }
        | { _type: 'image' }
        | { _type: 'youtube' }
        | { _type: 'callout' }
        | { _type: 'quote' }
        | { _type: 'divider' }
        | GalleryBlock
        | ImageWithHotspotsBlock
        | StatsBlock           // ← new
        | SummaryListBlock
        | PromoBlock
        | AdPlaceholderBlock
        | RecommendedReadingBlock
    // future blocks will be added here
    >          // Portable Text
    publishDate: string
    readingTime?: number
    format?: string
    featured?: boolean
    author: Author
    category: Category
    relatedArticles?: RelatedArticle[]
}
// Add these two interfaces
export interface GalleryImageItem {
    image: any          // Sanity image asset
    alt: string
    caption?: string
}
// Embed Blocks 
export interface GalleryBlock {
    _type: 'gallery'
    layout?: 'carousel' | 'grid' | 'stacked'
    images: Array<{
        imageItem: GalleryImageItem
    }>
}

export interface Hotspot {
    x: number
    y: number
    tooltip: string
}

export interface ImageWithHotspotsBlock {
    _type: 'imageWithHotspots'
    image: any
    hotspots: Hotspot[]
}
export interface StatItem {
    number: string
    label: string
    suffix?: string
}

export interface StatsBlock {
    _type: 'stats'
    items: StatItem[]
}

export interface SummaryItem {
    icon?: string
    text: string
}

export interface SummaryListBlock {
    _type: 'summaryList'
    title?: string
    items: SummaryItem[]
}

export interface PromoBlock {
    _type: 'promo'
    title: string
    description?: string
    image?: any
    link: string
    buttonText: string
    variant?: 'primary' | 'secondary'
}

export interface AdPlaceholderBlock {
    _type: 'adPlaceholder'
    height: 'small' | 'medium' | 'large'
    label: string
}

export interface RecommendedReadingBlock {
    _type: 'recommendedReading'
    title: string
    articles: RelatedArticle[]
}