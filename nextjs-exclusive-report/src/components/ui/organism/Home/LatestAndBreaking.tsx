// src/components/organisms/LatestAndBreaking.tsx
"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { PageContainer } from "@/components/layouts/PageContainer";
import { ArticleCard } from "@/components/ui/molecules/ArticleCard";
import { staggerContainer } from "@/lib/motion/variants/containerVariants";
import { Badge } from "../../atoms/Metadata/Badge";
import { Separator } from "@heroui/react";

export interface LatestAndBreakingProps {
    items: Array<{
        title: string;
        slug: string;
        categories: string[];
        publishedAt: string | Date;
    }>;
}

export function LatestAndBreaking({ items }: LatestAndBreakingProps) {
    if (!items || items.length === 0) return null;

    return (
        <SectionContainer paddingY="md" bg="default">
            <PageContainer maxWidth="lg" paddingX="md">
                <m.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Badge className="relative flex items-center gap-1.5">
                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-xs font-bold tracking-[0.08em] text-red-600 dark:text-red-400">
                                    LATEST & BREAKING
                                </span>
                            </Badge>

                        </div>
                        <Separator className="flex-1 my-2" />
                        <Link href="/news" className="text-xs font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
                            VIEW ALL NEWS →
                        </Link>
                    </div>

                    {/* Stories List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:items-stretch lg:divide-x lg:divide-border/40 lg:gap-0 gap-x-12 gap-y-12">
                        {items.slice(0, 4).map((item, index) => (
                            <m.div
                                key={item.slug}
                                variants={{
                                    hidden: { opacity: 0, y: 10 },
                                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.04 } },
                                }}
                                className="flex-1 lg:px-8 py-2 md:py-0"
                            >
                                <ArticleCard
                                    {...item}
                                    variant="minimal"
                                    publishedAt={item.publishedAt}
                                />
                            </m.div>
                        ))}
                    </div>
                </m.div>
            </PageContainer>
        </SectionContainer>
    );
}