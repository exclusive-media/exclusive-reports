// src/components/organisms/PoliticsAndGovernance.tsx
"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { PageContainer } from "@/components/layouts/PageContainer";
import { TwoColumnSplit } from "@/components/layouts/TwoColumnSplit";
import { ArticleCard } from "@/components/ui/molecules/ArticleCard";
import { Separator } from "@/components/ui/atoms/Layout/Separator";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Button } from "@heroui/react";
import { containerVariants } from "@/lib/motion/variants/containerVariants";

export interface PoliticsAndGovernanceProps {
    leftColumnStories: Array<any>; // minimal variant
    middleFeatured: any; // featured variant
    middleSupporting: Array<any>; // default variant (2 items)
}

export function PoliticsAndGovernance({
    leftColumnStories,
    middleFeatured,
    middleSupporting,
}: PoliticsAndGovernanceProps) {
    if (!middleFeatured) return null;

    return (
        <SectionContainer paddingY="lg" bg="default">
            <PageContainer maxWidth="lg" paddingX="md">
                <m.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-10"
                >
                    {/* Section Header */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Heading level="h2" variant="section" className="font-display">
                                Politics & Governance
                            </Heading>
                            <Separator variant="gold-accent" className="w-12" />
                        </div>

                        <Link href="/category/policy">
                            <Button variant="ghost" size="sm" className="text-xs uppercase tracking-widest font-medium">
                                SEE ALL POLITICS →
                            </Button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {/* Left Column: Up to 3 Minimal Variant Cards */}
                        <div className="lg:col-span-4 space-y-6">
                            {leftColumnStories.slice(0, 3).map((story, index) => (
                                <ArticleCard
                                    key={index}
                                    {...story}
                                    variant="minimal"
                                    publishedAt={story.publishedAt}
                                />
                            ))}
                        </div>

                        {/* Middle Column: Nested Featured + Two Stacked Default Cards */}
                        <div className="lg:col-span-8">
                            <TwoColumnSplit gap="xl">
                                {/* Top: Large Featured Card */}
                                <div className="lg:col-span-12">
                                    <ArticleCard
                                        {...middleFeatured}
                                        variant="featured"
                                        publishedAt={middleFeatured.publishedAt}
                                    />
                                </div>

                                {/* Bottom: Two Stacked Default Variant Cards */}
                                <div className="lg:col-span-12 space-y-6">
                                    {middleSupporting.slice(0, 2).map((story, index) => (
                                        <ArticleCard
                                            key={index}
                                            {...story}
                                            variant="default" // or "vertical" – using default as per your instruction
                                            publishedAt={story.publishedAt}
                                        />
                                    ))}
                                </div>
                            </TwoColumnSplit>
                        </div>
                    </div>
                </m.div>
            </PageContainer>
        </SectionContainer>
    );
}