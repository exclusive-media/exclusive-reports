// src/components/ui/organism/Home/AfricaSpotlight.tsx
"use client";

import { m } from "framer-motion";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { PageContainer } from "@/components/layouts/PageContainer";
import { TwoColumnSplit } from "@/components/layouts/TwoColumnSplit";
import { ArticleCard, type ArticleCardProps } from "@/components/ui/molecules/ArticleCard";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Separator } from "@/components/ui/atoms/Layout/Separator";
import { containerVariants, itemVariants } from "@/lib/motion/variants/containerVariants";
import Link from "next/link";
import { Button } from "@heroui/react";

export interface AfricaSpotlightProps {
    featuredStory: ArticleCardProps;
    listStories: ArticleCardProps[]; // First is horizontal, others minimal
}

export function AfricaSpotlight({ featuredStory, listStories }: AfricaSpotlightProps) {
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
                                Africa Spotlight
                            </Heading>
                        </div>
                        <Link href="/category/africa">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-[10px] tracking-[0.2em] font-bold text-muted-foreground hover:text-accent transition-colors border-none bg-transparent"
                            >
                                VIEW ALL AFRICA STORIES →
                            </Button>
                        </Link>
                    </div>

                    <TwoColumnSplit leftWidth="2/3" rightWidth="1/3" gap="xl">
                        {/* Left Column: One Large Featured Card (Primary focus) */}
                        <m.div variants={itemVariants}>
                            <ArticleCard
                                {...featuredStory}
                                variant="featured"
                                publishedAt={featuredStory.publishedAt}
                            />
                        </m.div>

                        {/* Right Column: Stacked list with diverse variants */}
                        <m.div variants={itemVariants} className="space-y-8">
                            {listStories?.map((story, index) => {
                                const isFirst = index === 0;
                                return (
                                    <div key={story.slug} className="space-y-8">
                                        <ArticleCard
                                            {...story}
                                            variant={isFirst ? "horizontal" : "minimal"}
                                            publishedAt={story.publishedAt}
                                        />
                                        {index < listStories.length - 1 && (
                                            <Separator variant="default" className="my-0 opacity-30" />
                                        )}
                                    </div>
                                );
                            })}
                        </m.div>
                    </TwoColumnSplit>
                </m.div>
            </PageContainer>
        </SectionContainer>
    );
}
