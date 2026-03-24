// src/components/ui/organism/Home/PodcastSection.tsx
"use client";

import { m } from "framer-motion";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { PageContainer } from "@/components/layouts/PageContainer";
import { TwoColumnSplit } from "@/components/layouts/TwoColumnSplit";
import { PodcastTeaser, type PodcastTeaserProps } from "@/components/ui/molecules/PodcastTeaser";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Button } from "@heroui/react";
import { Icon } from "@/components/ui/atoms/Icons/Icon";
import { containerVariants, itemVariants } from "@/lib/motion/variants/containerVariants";
import Link from "next/link";

export interface PodcastSectionProps {
    featuredEpisode: PodcastTeaserProps;
    recentEpisodes: PodcastTeaserProps[];
}

export function PodcastSection({ featuredEpisode, recentEpisodes }: PodcastSectionProps) {
    if (!featuredEpisode) return null;

    return (
        <SectionContainer paddingY="xl" className="bg-zinc-950 border-y border-zinc-800/50">
            <PageContainer maxWidth="lg" paddingX="md">
                <m.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    {/* Section Header */}
                    <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold bg-gold/5 shrink-0">
                                <Icon name="mic" size={24} animated />
                            </div>
                            <Heading level="h2" variant="section" className="font-display text-4xl italic text-white tracking-tight">
                                Podcasts & Audio
                            </Heading>
                        </div>

                        <Link href="/podcasts">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="text-[10px] tracking-[0.2em] font-bold text-zinc-400 hover:text-gold transition-colors border-none bg-transparent"
                            >
                                BROWSE ALL EPISODES →
                            </Button>
                        </Link>
                    </div>

                    {/* Cinematic Layout */}
                    <TwoColumnSplit leftWidth="3/5" rightWidth="2/5" gap="xl">
                        {/* Main Stage: Featured Episode */}
                        <m.div variants={itemVariants} className="h-full">
                            <PodcastTeaser {...featuredEpisode} variant="featured" />
                        </m.div>

                        {/* Side Stage: Stacked Recent Episodes */}
                        <m.div variants={itemVariants} className="flex flex-col h-full space-y-6">
                            <div className="flex items-center justify-between text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase mb-2">
                                <span>Recent Releases</span>
                                <span className="w-1 h-1 rounded-full bg-gold" />
                            </div>
                            
                            <div className="space-y-6 flex-1">
                                {recentEpisodes?.slice(0, 3).map((episode) => (
                                    <div key={episode.slug} className="group">
                                        <PodcastTeaser 
                                            {...episode} 
                                            variant="compact" 
                                        />
                                        <div className="mt-6 h-px bg-zinc-800/50 group-last:hidden" />
                                    </div>
                                ))}
                            </div>

                            {/* Promotional Banner (Option to join membership) */}
                            <div className="mt-auto p-6 bg-gold/5 border border-gold/10 rounded-sm group hover:bg-gold/10 transition-colors duration-500">
                                <h4 className="text-white font-bold text-sm mb-1 tracking-tight">Subscribe to EX Audio</h4>
                                <p className="text-zinc-500 text-xs font-medium italic">Get premium access to full-length deep dives and daily market analysis.</p>
                                <Button variant="ghost" size="sm" className="mt-4 p-0 h-auto text-[10px] tracking-widest text-gold font-bold hover:bg-transparent border-none">
                                    SUPPORT INDEPENDENT JOURNALISM →
                                </Button>
                            </div>
                        </m.div>
                    </TwoColumnSplit>
                </m.div>
            </PageContainer>
        </SectionContainer>
    );
}
