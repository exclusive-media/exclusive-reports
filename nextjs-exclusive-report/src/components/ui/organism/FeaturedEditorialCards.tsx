// src/components/organisms/FeaturedEditorialCards.tsx
"use client";

import { m } from "framer-motion";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { PageContainer } from "@/components/layouts/PageContainer";
import { ThreeColumnGrid } from "@/components/layouts/ThreeColumnGrid";
import { FeaturedEditorialCard } from "@/components/ui/molecules/FeaturedEditorialCard";
import { Separator } from "@heroui/react";
import { staggerContainer } from "@/lib/motion/variants/containerVariants";

export interface FeaturedEditorialCardsProps {
    cards: Array<{
        title: string;
        slug: string;
        dek?: string;
        mainImage?: { url: string; alt?: string };
        format: "EX REPORT" | "FEATURE STORY" | "ANALYSIS";
        category?: string;
        author?: { name: string };
        publishedAt: string | Date;
        readingTime?: number;
    }>;
}

export function FeaturedEditorialCards({ cards }: FeaturedEditorialCardsProps) {
    if (!cards || cards.length === 0) return null;

    return (
        <SectionContainer paddingY="md" bg="default">
            <PageContainer maxWidth="xl" paddingX="md">
                <m.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Subtle separator + heading area */}
                    <Separator variant="default" className="mb-10" />

                    <ThreeColumnGrid gap="lg">
                        {cards.map((card, index) => (
                            <FeaturedEditorialCard key={index} {...card} />
                        ))}
                    </ThreeColumnGrid>
                </m.div>
            </PageContainer>
        </SectionContainer>
    );
}