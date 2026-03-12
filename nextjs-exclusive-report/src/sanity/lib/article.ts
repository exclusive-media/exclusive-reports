import { client } from '../client'
import { getArticleBySlug } from '../queries/article'
import { Article } from '../types/article'

/**
 * Fetch single article by slug with ISR caching
 * Revalidates every 60 seconds (good balance for free tier)
 */
export async function getArticle(slug: string): Promise<Article | null> {
    return client.fetch<Article>(
        getArticleBySlug,
        { slug },
        {
            next: {
                revalidate: 60,           // ISR - perfect for news
                tags: ['article', `article-${slug}`]
            }
        }
    )
}