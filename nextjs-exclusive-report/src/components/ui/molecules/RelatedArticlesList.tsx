"use client";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/atoms/Layout/Separator";
import { motion } from "framer-motion";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { ArticleCard } from "./ArticleCard";
import { Skeleton } from "@/components/ui/atoms/Layout/Skeleton";

interface RelatedArticlesListProps {
    articles: Array<{
        title: string;
        slug: string;
        dek?: string;
        mainImage?: { url: string; alt?: string };
        format?: "EX REPORT" | "ANALYSIS" | "FEATURE" | "OPINION";
        author?: { name: string };
        publishedAt: string | Date;
        readingTime?: number;
    }>;
    title?: string;
    isLoading?: boolean;
    maxItems?: number;
    variant?: "grid" | "vertical" | "compact";
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function RelatedArticlesList({
    articles,
    title = "Related Reading",
    isLoading = false,
    maxItems = 4,
    variant = "vertical",
}: RelatedArticlesListProps) {
    const displayedArticles = articles.slice(0, maxItems);

    if (isLoading) {
        return <RelatedArticlesSkeleton variant={variant} count={maxItems} />;
    }

    if (displayedArticles.length === 0) {
        return null;
    }

    const isGrid = variant === "grid";

    return (
        <section className="space-y-8">
            <div className="flex items-center gap-4">
                <Heading level="h3" variant="section" className="shrink-0">
                    {title}
                </Heading>
                <Separator className="flex-1 opacity-20" />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={cn(
                    "grid gap-8",
                    isGrid
                        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        : "grid-cols-1",
                    variant === "compact" && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                ) }
            >
                {displayedArticles.map((article) => (
                    <motion.div key={article.slug} variants={itemVariants}>
                        <ArticleCard
                            {...article}
                            variant={isGrid || variant === "vertical" ? "vertical" : "horizontal"}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

function RelatedArticlesSkeleton({
    variant = "vertical",
    count = 4,
}: {
    variant?: string;
    count?: number;
}) {
    const isGrid = variant === "grid";

    return (
        <div className="space-y-8">
            <div className="flex items-center gap-4">
                <Skeleton variant="text" className="w-48 h-8" />
                <Separator className="flex-1 opacity-20" />
            </div>

            <div
                className={cn(
                    "grid gap-8",
                    isGrid ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1",
                    variant === "compact" && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                )}
            >
                {Array.from({ length: count }).map((_, i) => (
                    <div key={i}>
                        <ArticleCard title="" slug="" publishedAt={new Date()} isLoading variant={variant === "compact" ? "horizontal" : "vertical"} />
                    </div>
                ))}
            </div>
        </div>
    );
}