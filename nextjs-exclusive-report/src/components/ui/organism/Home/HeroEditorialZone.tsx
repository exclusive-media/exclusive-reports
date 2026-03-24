// src/components/organisms/HeroEditorialZone.tsx
"use client";

import { cn } from "@/lib/cn";
import { m, Variants } from "framer-motion";
import { HeroMeta } from "@/components/ui/molecules/HeroMeta";
import { ArticleCard } from "@/components/ui/molecules/ArticleCard";
import { PodcastTeaser } from "@/components/ui/molecules/PodcastTeaser";
import { AdPlacement } from "@/components/ui/molecules/AdPlacement";
import { TwoColumnSplit } from "@/components/layouts/TwoColumnSplit";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { Separator } from "@heroui/react";

export interface HeroEditorialZoneProps {
    leadStory: {
        title: string;
        slug: string;
        dek?: string;
        mainImage?: { url: string; alt?: string };
        format?: "EX REPORT" | "ANALYSIS" | "FEATURE" | "OPINION";
        category?: string;
        author?: { name: string; role?: string; image?: string };
        publishedAt: string | Date;
        readingTime?: number;
    };
    featuredPodcast: {
        episodeTitle: string;
        slug: string;
        guestName?: string;
        duration?: string;
        coverImage?: { url: string; alt?: string };
        category?: string;
        publishedAt?: string | Date;
    };
    showAd?: boolean;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] } },
};

import { PageContainer } from "@/components/layouts/PageContainer";

export function HeroEditorialZone({
    leadStory,
    featuredPodcast,
    showAd = true,
}: HeroEditorialZoneProps) {
    return (
        <SectionContainer paddingY="xl" bg="default" id="hero-editorial" className="min-h-[min(80vh,900px)]"
        >
            <m.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="relative"
                suppressHydrationWarning
            >
                <PageContainer maxWidth="xl" paddingX="md">
                    <TwoColumnSplit gap="xl" leftWidth="7/10" rightWidth="3/10" reverseOnMobile={false}>
                        {/* Left: Dominant Lead Story */}
                        <m.div variants={itemVariants} className="relative h-full">
                            <ArticleCard
                                {...leadStory}
                                variant="featured"
                                publishedAt={leadStory.publishedAt}
                            />

                            {/* Gold accent rule under lead (visible on mobile) */}

                            <Separator className="my-8 " orientation="vertical" />
                        </m.div>

                        {/* Right: Stacked Podcast + Ad */}
                        <m.div variants={itemVariants} className="space-y-8">
                            <PodcastTeaser {...featuredPodcast} variant="grid" />
                            <Separator className="my-4" />
                            {showAd && <AdPlacement variant="box" className="mx-full lg:mx-0 xl:mx-full" />}
                        </m.div>
                    </TwoColumnSplit>
                </PageContainer>
            </m.div>
        </SectionContainer>
    );
}