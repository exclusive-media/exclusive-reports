// src/components/ui/organisms/InfiniteNewsFeed.tsx
"use client";

import { useState, useTransition } from "react";
import { fetchMoreArticles } from "@/app/actions/articles";
import { ArticleCard, type ArticleCardProps } from "@/components/ui/molecules/ArticleCard";
import { CardGrid } from "@/components/layouts/CardGrid";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Icon } from "@/components/ui/atoms/Icons/Icon";

export interface InfiniteNewsFeedProps {
    categoryName: string;
    categorySlug: string;
    initialArticles: (ArticleCardProps & { slug: string })[];
    variant?: "grid" | "list";
}

/**
 * Infinite News Feed Organism
 * 
 * Replaces the static 'LatestCategoryFeed' with a dynamic, stateful version.
 * Implements a "Load More" pattern using Server Actions to maintain the premium
 * editorial feel while preventing excessive initial DOM nodes or aggressive infinite scroll.
 */
export function InfiniteNewsFeed({
    categoryName,
    categorySlug,
    initialArticles,
    variant = "grid",
}: InfiniteNewsFeedProps) {
    const [articles, setArticles] = useState(initialArticles);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isPending, startTransition] = useTransition();

    if (!articles || articles.length === 0) return null;

    const handleLoadMore = () => {
        startTransition(async () => {
            const nextPage = page + 1;
            const result = await fetchMoreArticles(categorySlug, nextPage);
            
            // Append new articles and update pagination state
            setArticles((prev) => [...prev, ...result.articles]);
            setPage(nextPage);
            setHasMore(result.hasMore);
        });
    };

    return (
        <section className="space-y-12">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <Heading level="h2" variant="section">
                    Latest in {categoryName}
                </Heading>
            </div>

            {/* Render Feed based on Variant */}
            {variant === "grid" ? (
                <CardGrid columns={2}>
                    {articles.map((article, index) => (
                        <ArticleCard key={`${article.slug}-${index}`} {...article} variant="vertical" />
                    ))}
                </CardGrid>
            ) : (
                <div className="flex flex-col space-y-8 divide-y divide-border/20">
                    {articles.map((article, index) => (
                        <div key={`${article.slug}-${index}`} className={index > 0 ? "pt-8" : ""}>
                             <ArticleCard {...article} variant="horizontal" />
                        </div>
                    ))}
                </div>
            )}

            {/* Load More Controller */}
            {hasMore && (
                <div className="pt-8 flex justify-center border-t border-border/40">
                    <button
                        onClick={handleLoadMore}
                        disabled={isPending}
                        className="group flex items-center justify-center gap-3 w-full md:w-auto px-12 py-4 bg-zinc-50 dark:bg-zinc-900 border border-border/60 hover:border-gold hover:bg-gold/5 transition-all text-xs uppercase tracking-widest font-bold text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? (
                            <>
                                <Icon name="Loader" size={16} className="animate-spin text-gold" />
                                <span>Loading Archive...</span>
                            </>
                        ) : (
                            <>
                                <span>Load More Stories</span>
                                <Icon name="ArrowDown" size={14} className="group-hover:translate-y-1 group-hover:text-gold transition-all" />
                            </>
                        )}
                    </button>
                </div>
            )}
        </section>
    );
}
