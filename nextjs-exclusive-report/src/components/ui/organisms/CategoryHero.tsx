// src/components/ui/organisms/CategoryHero.tsx
"use client";

import { m } from "framer-motion";
import { PageContainer } from "@/components/layouts/PageContainer";
import { TwoColumnSplit } from "@/components/layouts/TwoColumnSplit";
import { PageHeader } from "@/components/ui/molecules/PageHeader";
import { ArticleCard, type ArticleCardProps } from "@/components/ui/molecules/ArticleCard";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/atoms/Metadata/Badge";

export interface CategoryHeroProps {
    categoryName: string;
    description?: string;
    featuredArticle: ArticleCardProps & { slug: string };
    variant?: "standard" | "spotlight" | "minimal";
}

/**
 * Category Hero Organism
 * 
 * The authoritative entry point for all Category pages. Uses the "Variant-Driven Reusable Organism"
 * pattern to support multiple thematic layouts (standard, spotlight, minimal) while maintaining
 * consistent motion and data contracts.
 */
export function CategoryHero({
    categoryName,
    description,
    featuredArticle,
    variant = "standard",
}: CategoryHeroProps) {

    // ---------------------------------------------------------------------------
    // Variant 1: SPOTLIGHT (Immersive, Visual-First)
    // ---------------------------------------------------------------------------
    if (variant === "spotlight") {
        return (
            <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-end pb-20 pt-32 bg-zinc-950 overflow-hidden group">
                {/* Immersive Background */}
                {featuredArticle.mainImage?.url && (
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={featuredArticle.mainImage.url}
                            alt={categoryName}
                            fill
                            className="object-cover opacity-60 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"
                            priority
                        />
                        {/* Dramatic gradient overlay for text legibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                    </div>
                )}

                <PageContainer maxWidth="lg" className="relative z-10 w-full">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold inline-block">
                                Exclusive Spotlight
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading italic text-white leading-[0.9] tracking-tighter">
                                {categoryName}
                            </h1>
                            <div className="h-[2px] w-24 bg-gold mx-auto my-8 opacity-80" />
                            {description && (
                                <p className="text-lg md:text-xl text-zinc-400 font-serif italic max-w-2xl mx-auto">
                                    {description}
                                </p>
                            )}
                        </m.div>

                        {/* Featured Story Teaser */}
                        <m.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="pt-12 border-t border-white/10"
                        >
                            <Link href={`/articles/${featuredArticle.slug}`} className="block group/link">
                                <span className="text-[9px] uppercase tracking-widest text-zinc-500 font-bold mb-3 block group-hover/link:text-gold transition-colors">
                                    Lead Story
                                </span>
                                <h2 className="text-2xl md:text-4xl font-display italic text-white group-hover/link:text-gold transition-colors line-clamp-2">
                                    {featuredArticle.title}
                                </h2>
                            </Link>
                        </m.div>
                    </div>
                </PageContainer>
            </section>
        );
    }

    // ---------------------------------------------------------------------------
    // Variant 2: MINIMAL (Text-Heavy, Index Style)
    // ---------------------------------------------------------------------------
    if (variant === "minimal") {
        return (
            <section className="bg-background pt-8 pb-12 border-b border-border/40">
                <PageContainer maxWidth="lg">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-end">
                        <div className="flex-1 space-y-6">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Section Index</span>
                            <h1 className="text-4xl md:text-6xl font-heading italic text-foreground tracking-tight leading-none">
                                {categoryName}
                            </h1>
                            {description && (
                                <p className="text-muted-foreground font-serif italic max-w-xl text-lg">
                                    {description}
                                </p>
                            )}
                        </div>
                        
                        <div className="flex-1 w-full md:w-auto border-l border-border/40 pl-0 md:pl-12">
                            <span className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold mb-4 block">Top Story</span>
                            <ArticleCard {...featuredArticle} variant="naked" />
                        </div>
                    </div>
                </PageContainer>
            </section>
        );
    }

    // ---------------------------------------------------------------------------
    // Variant 3: STANDARD (70/30 Split with Ad Placement)
    // ---------------------------------------------------------------------------
    return (
        <section className="bg-background">
            <PageContainer maxWidth="lg" className="pt-12 pb-20">
                <TwoColumnSplit leftWidth="7/10" rightWidth="3/10" gap="xl">
                    
                    {/* Left Column (70%): Category Header + Lead Story */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent">Exclusive Coverage</span>
                            <h1 className="text-6xl md:text-8xl font-heading italic text-foreground leading-[1.1] tracking-tight">
                                {categoryName}
                            </h1>
                            <div className="h-[2px] w-24 bg-gold" />
                            {description && (
                                <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-serif italic max-w-2xl">
                                    {description}
                                </p>
                            )}
                        </div>

                        {/* Featured Story using Featured Variant */}
                        <div className="pt-8 border-t border-border/40">
                            <ArticleCard {...featuredArticle} variant="featured" />
                        </div>
                    </div>

                    {/* Right Column (30%): Ad Placement */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-32">
                            <div className="flex flex-col items-center justify-center p-6 bg-zinc-50 dark:bg-zinc-900 border border-border/50 h-[600px] text-center w-full">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60 mb-2">Advertisement</span>
                                <div className="w-full flex-grow border border-dashed border-muted-foreground/30 flex items-center justify-center">
                                    <span className="text-xs text-muted-foreground font-medium">300x600 Half Page Ad</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                </TwoColumnSplit>
            </PageContainer>
        </section>
    );
}
