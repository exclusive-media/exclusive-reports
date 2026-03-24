// src/components/ui/organism/Home/BusinessAndMarkets.tsx
"use client";

import { m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { PageContainer } from "@/components/layouts/PageContainer";
import { TwoColumnSplit } from "@/components/layouts/TwoColumnSplit";
import { ArticleCard, type ArticleCardProps } from "@/components/ui/molecules/ArticleCard";
import { Separator } from "@/components/ui/atoms/Layout/Separator";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Button } from "@heroui/react";
import { containerVariants } from "@/lib/motion/variants/containerVariants";
import { cn } from "@/lib/utils";

export interface BusinessAndMarketsProps {
    featuredStory: ArticleCardProps;
    supportingStories: ArticleCardProps[];
    marketWatch: {
        items: Array<{
            name: string;
            price: string;
            change: string;
            changePercent: string;
        }>;
        chartImage: { url: string; alt: string };
    };
}

export function BusinessAndMarkets({
    featuredStory,
    supportingStories,
    marketWatch,
}: BusinessAndMarketsProps) {
    if (!featuredStory) return null;

    return (
        <SectionContainer paddingY="xl" bg="default">
            <PageContainer maxWidth="lg" paddingX="md">
                <m.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-10"
                >
                    {/* Section Header */}
                    <div className="flex items-center justify-between border-b border-border/40 pb-4">
                        <div className="flex items-center gap-4">
                            <Heading level="h2" variant="section" className="font-display text-3xl italic">
                                Business & Markets
                            </Heading>
                        </div>

                        <Link href="/category/business-economy">
                            <Button variant="ghost" size="sm" className="text-[10px] tracking-[0.2em] font-bold text-muted-foreground hover:text-accent transition-colors border-none bg-transparent">
                                VIEW MARKET INDICES →
                            </Button>
                        </Link>
                    </div>

                    <TwoColumnSplit gap="xl" leftWidth="7/10" rightWidth="3/10">
                        {/* Left Column (70%) */}
                        <div className="space-y-12">
                            {/* Row 1: Large Featured Card (Horizontal) */}
                            <ArticleCard
                                {...featuredStory}
                                variant="horizontal"
                                publishedAt={featuredStory.publishedAt}
                            />
                            
                            <Separator variant="default" className="my-0 opacity-40" />

                            {/* Row 2: Two Minimal Inline */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {supportingStories?.slice(0, 2).map((story) => (
                                    <ArticleCard
                                        key={story.slug}
                                        {...story}
                                        variant="minimal"
                                        publishedAt={story.publishedAt}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Right Column (30%): Market Watch Panel */}
                        <div className="h-full">
                            <div className="bg-surface border border-border/40 rounded-sm p-6 space-y-8 h-full flex flex-col">
                                <div className="space-y-1">
                                    <h3 className="text-xs font-bold tracking-[0.15em] text-foreground uppercase">MARKET WATCH</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Live • Addis Time</span>
                                    </div>
                                </div>

                                <div className="divide-y divide-border/30 flex-1">
                                    {marketWatch.items.map((item, index) => (
                                        <div key={index} className="py-4 first:pt-0 last:pb-0 flex justify-between items-start">
                                            <div className="space-y-0.5">
                                                <div className="font-bold text-sm tracking-tight">{item.name}</div>
                                                <div className="text-[10px] text-muted-foreground uppercase">Per Unit</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="font-mono text-sm font-bold">{item.price}</div>
                                                <div className={cn(
                                                    "text-[10px] font-bold",
                                                    item.change.startsWith("+") ? "text-green-600" : "text-red-600"
                                                )}>
                                                    {item.change}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Chart Placeholder */}
                                <div className="mt-auto relative aspect-[4/3] w-full bg-muted/10 rounded-sm overflow-hidden border border-border/20">
                                    <Image
                                        src={marketWatch.chartImage.url}
                                        alt={marketWatch.chartImage.alt}
                                        fill
                                        className="object-cover grayscale opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </TwoColumnSplit>
                </m.div>
            </PageContainer>
        </SectionContainer>
    );
}
