// src/components/ui/organisms/LatestCategoryFeed.tsx
"use client";

import { ArticleCard, type ArticleCardProps } from "@/components/ui/molecules/ArticleCard";
import { CardGrid } from "@/components/layouts/CardGrid";
import { Heading } from "@/components/ui/atoms/typography/Heading";

export interface LatestCategoryFeedProps {
    categoryName: string;
    articles: (ArticleCardProps & { slug: string })[];
    variant?: "grid" | "list";
}

/**
 * Latest Category Feed Organism
 * 
 * Renders the most recent articles for a specific category.
 * Supports a "grid" variant for standard visual cards and a 
 * "list" variant for a denser, text-heavy reading experience.
 */
export function LatestCategoryFeed({
    categoryName,
    articles,
    variant = "grid",
}: LatestCategoryFeedProps) {
    if (!articles || articles.length === 0) return null;

    return (
        <section className="space-y-8">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
                <Heading level="h2" variant="section">
                    Latest in {categoryName}
                </Heading>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent">
                    {articles.length} Updates
                </span>
            </div>

            {variant === "grid" ? (
                <CardGrid columns={2}>
                    {articles.map((article) => (
                        <ArticleCard key={article.slug} {...article} variant="vertical" />
                    ))}
                </CardGrid>
            ) : (
                <div className="flex flex-col space-y-8 divide-y divide-border/20">
                    {articles.map((article, index) => (
                        <div key={article.slug} className={index > 0 ? "pt-8" : ""}>
                             <ArticleCard {...article} variant="horizontal" />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
