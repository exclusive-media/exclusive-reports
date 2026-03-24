// src/components/ui/organism/Home/TechnologyAndInnovation.tsx
"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { PageContainer } from "@/components/layouts/PageContainer";
import { ArticleCard, type ArticleCardProps } from "@/components/ui/molecules/ArticleCard";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Button } from "@heroui/react";
import { containerVariants, itemVariants } from "@/lib/motion/variants/containerVariants";
import { Separator } from "@/components/ui/atoms/Layout/Separator";
import { AdPlacement } from "@/components/ui/molecules/AdPlacement";

export interface TechnologyAndInnovationProps {
    featuredStory: ArticleCardProps;
    supportingStories: ArticleCardProps[];
}

export function TechnologyAndInnovation({
    featuredStory,
    supportingStories,
}: TechnologyAndInnovationProps) {
    if (!featuredStory) return null;

    return (
        <SectionContainer paddingY="xl" bg="default" className="border-t border-border/40">
            <PageContainer maxWidth="lg" paddingX="md">
                <m.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Section Header */}
                    <div className="flex items-center justify-between border-b border-border/40 pb-5">
                        <div className="flex items-center gap-4">
                            <Heading level="h2" variant="section" className="font-display text-4xl italic">
                                Technology & Innovation
                            </Heading>
                        </div>

                        <Link href="/category/technology">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-[10px] tracking-[0.2em] font-bold text-muted-foreground hover:text-accent transition-colors border-none bg-transparent"
                            >
                                SEE ALL TECHNOLOGY →
                            </Button>
                        </Link>
                    </div>

                    {/* Three Column Grid: 5-4-3 split for editorial rhythm */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Column 1: Primary Vertical (5/12) */}
                        <m.div variants={itemVariants} className="lg:col-span-5 h-full">
                            <ArticleCard
                                {...featuredStory}
                                variant="vertical"
                                publishedAt={featuredStory.publishedAt}
                            />
                        </m.div>

                        {/* Column 2: Supporting Stories (4/12) */}
                        <m.div variants={itemVariants} className="lg:col-span-4 flex flex-col justify-between">
                            <div className="space-y-8 h-full">
                                {supportingStories?.slice(0, 3).map((story, index) => (
                                    <div key={story.slug}>
                                        <ArticleCard
                                            {...story}
                                            variant="minimal"
                                            publishedAt={story.publishedAt}
                                        />
                                        {index < 2 && (
                                            <Separator variant="default" className="mt-8 opacity-30" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </m.div>

                        {/* Column 3: Partner Content / Ad (3/12) */}
                        <m.div variants={itemVariants} className="lg:col-span-3">
                            <div className="sticky top-24 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="h-px bg-gold/40 flex-1" />
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold">PARTNER CONTENT</span>
                                        <div className="h-px bg-gold/40 flex-1" />
                                    </div>
                                    <AdPlacement variant="box" className="w-full bg-surface/50 border-gold/10 hover:border-gold/30 transition-colors duration-500" />
                                </div>
                                <div className="p-6 bg-accent/5 rounded-sm border border-accent/10">
                                    <p className="font-display italic text-sm text-balance text-center leading-relaxed">
                                        &ldquo;Innovation distinguishes between a leader and a follower.&rdquo;
                                    </p>
                                    <div className="mt-3 text-[9px] font-bold tracking-widest text-center text-accent/60 uppercase">
                                        — Digital Transformation Report 2024
                                    </div>
                                </div>
                            </div>
                        </m.div>
                    </div>
                </m.div>
            </PageContainer>
        </SectionContainer>
    );
}