// src/components/ui/organisms/TrendingSidebar.tsx
"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Heading } from "@/components/ui/atoms/typography/Heading";

export interface TrendingArticle {
    title: string;
    slug: string;
    categories?: string[];
}

export interface TrendingSidebarProps {
    categoryName: string;
    articles: TrendingArticle[];
    variant?: "numbered" | "compact";
}

/**
 * Trending Sidebar Organism
 * 
 * A dense, vertical list of high-performing articles used to anchor the right column
 * in standard editorial layouts.
 * Variants:
 * - 'numbered': Displays a prominent ranking number.
 * - 'compact': A tighter list without numbers.
 */
export function TrendingSidebar({
    categoryName,
    articles,
    variant = "numbered"
}: TrendingSidebarProps) {
    if (!articles || articles.length === 0) return null;

    return (
        <aside className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/40 pb-4">
                <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent">
                        Trending
                    </span>
                </div>
                <h3 className="text-sm uppercase tracking-widest font-bold text-muted-foreground hidden lg:block">
                    {categoryName}
                </h3>
            </div>

            <div className="flex flex-col gap-6">
                {articles.map((article, i) => (
                    <m.div
                        key={article.slug}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group flex gap-4 items-start"
                    >
                        {variant === "numbered" && (
                            <span className="text-3xl font-heading italic text-border/50 group-hover:text-gold transition-colors shrink-0 w-8">
                                {i + 1}
                            </span>
                        )}
                        <Link href={`/${article.categories?.[0]?.toLowerCase() || 'articles'}/${article.slug}`} className="flex flex-col gap-2">
                            <Heading level="h4" className="text-base md:text-lg font-display italic leading-snug group-hover:text-gold transition-colors line-clamp-3">
                                {article.title}
                            </Heading>
                            {article.categories && article.categories.length > 0 && (
                                <span className="text-[9px] uppercase tracking-widest font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                                    {article.categories[0]}
                                </span>
                            )}
                        </Link>
                    </m.div>
                ))}
            </div>
        </aside>
    );
}
