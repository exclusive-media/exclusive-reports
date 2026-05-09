"use server";

import { ArticleCardProps } from "@/components/ui/molecules/ArticleCard";

// Simulated database of articles for testing pagination
const MOCK_DB: (ArticleCardProps & { slug: string })[] = Array.from({ length: 45 }).map((_, i) => ({
    title: `Paginated Insight ${i + 1}: The Changing Landscape of African Policy`,
    slug: `paginated-insight-${i + 1}`,
    dek: `A deep dive into the regulatory shifts and market responses that are defining the next decade of sovereign growth across the continent.`,
    mainImage: { url: `https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=800&auto=format&fit=crop` }, // Just generating consistent mock URLs
    categories: ["Analysis", "Markets"],
    format: i % 3 === 0 ? "EX REPORT" : "ANALYSIS",
    author: { name: i % 2 === 0 ? "Dr. Amara Osei" : "David Ochieng" },
    publishedAt: new Date(Date.now() - (i * 24 * 60 * 60 * 1000)).toISOString(), // Distributed over days
    readingTime: 6 + (i % 5),
}));

/**
 * Server Action: Fetch Paginated Articles
 * 
 * Retrieves a specific "page" of articles for a given category.
 * Replaces the need for a separate API route, allowing the client
 * to request more data directly from the server cleanly.
 */
export async function fetchMoreArticles(categorySlug: string, page: number, perPage: number = 6) {
    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Calculate slice indices
    const start = (page - 1) * perPage;
    const end = start + perPage;

    // Slice the mock database
    const articlesChunk = MOCK_DB.slice(start, end);

    return {
        articles: articlesChunk,
        hasMore: end < MOCK_DB.length,
    };
}
