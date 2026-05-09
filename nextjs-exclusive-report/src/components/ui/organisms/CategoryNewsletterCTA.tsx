// src/components/ui/organisms/CategoryNewsletterCTA.tsx
"use client";

import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Icon } from "@/components/ui/atoms/Icons/Icon";

export interface CategoryNewsletterCTAProps {
    categoryName: string;
    variant?: "boxed" | "inline";
}

/**
 * Category Newsletter CTA Organism
 * 
 * Captures user interest for a specific vertical/category.
 * Variants:
 * - 'boxed': A standalone block with dark background (e.g., bg-zinc-950) for strong visual breaks.
 * - 'inline': A lighter, horizontal layout perfect for slipping between feed sections.
 */
export function CategoryNewsletterCTA({
    categoryName,
    variant = "boxed"
}: CategoryNewsletterCTAProps) {
    if (variant === "inline") {
        return (
            <section className="py-12 border-y border-border/40">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                    <div className="max-w-md">
                        <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent flex items-center gap-2 mb-2">
                            <Icon name="Mail" size={12} /> The Briefing
                        </span>
                        <Heading level="h3" className="text-2xl font-display italic text-foreground mb-2">
                            Get weekly {categoryName} intelligence.
                        </Heading>
                        <p className="text-sm text-muted-foreground font-serif">
                            Curated insights from our regional editors delivered every Friday.
                        </p>
                    </div>
                    <form className="flex w-full md:w-auto gap-2" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Enter your work email" 
                            className="flex-1 md:w-64 bg-background border border-border/60 px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
                        />
                        <button className="bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 px-6 py-2 text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-colors whitespace-nowrap">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        );
    }

    // Default 'Boxed' Variant
    return (
        <section className="bg-zinc-950 dark:bg-zinc-900 border border-white/10 dark:border-border/10 p-12 md:p-16 text-center space-y-8 relative overflow-hidden group">
            {/* Subtle Texture/Background Element */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <Icon name="Mail" size={200} className="text-white transform rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
            </div>

            <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold flex items-center justify-center gap-2">
                    <Icon name="Shield" size={14} /> Intelligence Briefing
                </span>
                <Heading level="h3" className="text-4xl md:text-5xl font-heading italic text-white tracking-tight leading-snug">
                    Stay ahead in {categoryName}.
                </Heading>
                <p className="text-lg text-zinc-400 font-serif italic max-w-xl mx-auto">
                    Actionable analysis, exclusive interviews, and data-driven reports 
                    delivered straight to your inbox.
                </p>

                <form className="flex flex-col sm:flex-row gap-3 pt-6 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <input 
                        type="email" 
                        placeholder="Corporate Email Address" 
                        className="flex-1 bg-white/5 border border-white/20 text-white placeholder:text-zinc-500 px-6 py-4 text-sm focus:outline-none focus:border-gold focus:bg-white/10 transition-colors rounded-none"
                    />
                    <button className="bg-gold text-zinc-950 px-8 py-4 text-[11px] uppercase tracking-widest font-bold hover:brightness-110 transition-all rounded-none shrink-0 border border-gold">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}
