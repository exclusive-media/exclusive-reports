// src/components/ui/organisms/AnalysisGrid.tsx
"use client";

import { ArticleCard, type ArticleCardProps } from "@/components/ui/molecules/ArticleCard";
import { Heading } from "@/components/ui/atoms/typography/Heading";

export interface AnalysisGridProps {
    categoryName: string;
    articles: (ArticleCardProps & { slug: string })[];
    variant?: "featured-left" | "equal-grid" | "featured-top";
}

/**
 * Analysis Grid Organism
 * 
 * Used for deeper, prestige content like "Ex Reports" or "Analysis".
 * Variants:
 * - 'featured-left': Asymmetrical grid (1 large left, 2 stacked right).
 * - 'equal-grid': Standard 3-column grid for balanced weight.
 * - 'featured-top': 1 full-width featured on top, 2 or 3 below.
 */
export function AnalysisGrid({
    categoryName,
    articles,
    variant = "featured-left"
}: AnalysisGridProps) {
    if (!articles || articles.length === 0) return null;

    // We guarantee rendering at least up to 4 articles depending on the variant.
    const lead = articles[0];
    const secondary = articles.slice(1, 3);
    const rest = articles.slice(3);

    return (
        <section className="space-y-10">
            <div className="flex items-center gap-4">
                <span className="w-4 h-4 rounded-sm bg-accent inline-block" />
                <Heading level="h2" className="text-2xl md:text-3xl font-heading italic uppercase tracking-wider text-foreground">
                    In-Depth {categoryName}
                </Heading>
            </div>

            {variant === "featured-left" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-8">
                        <ArticleCard {...lead} variant="featured" />
                    </div>
                    <div className="lg:col-span-4 flex flex-col gap-8 divide-y divide-border/40">
                        {secondary.map((article, i) => (
                            <div key={article.slug} className={i > 0 ? "pt-8" : ""}>
                                <ArticleCard {...article} variant="naked" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {variant === "equal-grid" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.slice(0, 3).map((article) => (
                        <ArticleCard key={article.slug} {...article} variant="vertical" />
                    ))}
                </div>
            )}

            {variant === "featured-top" && (
                <div className="space-y-12">
                     <ArticleCard {...lead} variant="featured" />
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border/40 pt-12">
                         {secondary.map((article) => (
                             <ArticleCard key={article.slug} {...article} variant="minimal" />
                         ))}
                         {rest.length > 0 && (
                             <ArticleCard {...rest[0]} variant="minimal" />
                         )}
                     </div>
                </div>
            )}
        </section>
    );
}
