"use client";

import Link from "next/link";
import { ArticleCard } from "../molecules/ArticleCard";
import { m } from "framer-motion";
import { fadeInUp } from "@/lib/motion/variants/entryVariants";
import { staggerContainer } from "@/lib/motion/variants/containerVariants";
import { useSafeVariants } from "@/lib/motion/use-reduced-motion";
import { Button } from "@heroui/react";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { PageContainer } from "@/components/layouts/PageContainer";
import { Heading } from "@/components/ui/atoms/typography/Heading";

interface CategorySectionBlockProps {
    categoryTitle: string;
    categorySlug: string;
    articles: any[];
}

export function CategorySectionBlock({
    categoryTitle,
    categorySlug,
    articles
}: CategorySectionBlockProps) {
    const container = useSafeVariants(staggerContainer);
    const item = useSafeVariants(fadeInUp);

    if (!articles || articles.length === 0) return null;

    const [leadArticle, ...supportingArticles] = articles;

    return (
        <SectionContainer paddingY="lg" bg="default">
            <PageContainer maxWidth="lg" paddingX="md">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-10 border-b border-border/60 pb-4">
                    <div className="space-y-1">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">
                            In-Depth
                        </span>
                        <Heading level="h2" variant="section" className="italic">
                            {categoryTitle}
                        </Heading>
                    </div>
                    <Link href={`/category/${categorySlug}`}>
                        <Button variant="ghost" size="sm" className="text-xs font-bold uppercase tracking-tighter">
                            View All Reports →
                        </Button>
                    </Link>
                </div>

                {/* 1 + 3 Grid Layout */}
                <m.div
                    variants={container}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10"
                >
                    {/* Lead Story - Large Horizontal Layout */}
                    <m.div variants={item} className="lg:col-span-12 xl:col-span-8">
                        <ArticleCard
                            {...leadArticle}
                            variant="horizontal"
                            publishedAt={leadArticle.publishDate}
                        />
                    </m.div>

                    {/* Sidebar / Supporting Stories Grid */}
                    <div className="lg:col-span-12 xl:col-span-4 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-1 gap-6">
                        {supportingArticles.slice(0, 3).map((article) => (
                            <m.div key={article._id} variants={item}>
                                <ArticleCard
                                    {...article}
                                    variant="vertical"
                                    publishedAt={article.publishDate}
                                    className="h-full border-none bg-transparent p-0"
                                />
                            </m.div>
                        ))}
                    </div>
                </m.div>
            </PageContainer>
        </SectionContainer>
    );
}