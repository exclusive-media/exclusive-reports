// src/components/ui/organisms/SubcategoryHighlights.tsx
"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { Icon } from "@/components/ui/atoms/Icons/Icon";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/atoms/typography/Heading";

export interface SubCategory {
    label: string;
    slug: string;
    description?: string;
    featuredHeadline?: string;
}

export interface SubcategoryHighlightsProps {
    categoryName: string;
    parentSlug: string;
    subcategories: SubCategory[];
    variant?: "pills" | "cards";
}

/**
 * Subcategory Highlights Organism
 * 
 * Provides navigation deeper into a category's niches.
 * Variants:
 * - 'pills': High contrast inline block clusters. Ideal for mobile or dense headers.
 * - 'cards': Minimalist cards that can display a featured headline from that niche.
 */
export function SubcategoryHighlights({
    categoryName,
    parentSlug,
    subcategories,
    variant = "pills"
}: SubcategoryHighlightsProps) {
    if (!subcategories?.length) return null;

    if (variant === "cards") {
        return (
            <section className="space-y-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent mb-2 block">
                    Key Areas in {categoryName}
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {subcategories.map((sub, i) => (
                        <m.div
                            key={sub.slug}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link 
                                href={`/${parentSlug}/${sub.slug}`}
                                className="group flex flex-col justify-between h-full min-h-[140px] p-6 bg-zinc-50 dark:bg-zinc-900 border border-border/40 hover:border-gold transition-colors"
                            >
                                <div>
                                    <Heading level="h4" className="text-sm uppercase tracking-widest font-bold text-foreground group-hover:text-gold transition-colors mb-2">
                                        {sub.label}
                                    </Heading>
                                    {sub.description && (
                                        <p className="text-xs text-muted-foreground line-clamp-2">
                                            {sub.description}
                                        </p>
                                    )}
                                </div>
                                {sub.featuredHeadline && (
                                    <div className="mt-4 pt-4 border-t border-border/50">
                                         <p className="text-xs font-serif italic text-foreground/80 group-hover:text-foreground line-clamp-2">
                                            "{sub.featuredHeadline}"
                                         </p>
                                    </div>
                                )}
                            </Link>
                        </m.div>
                    ))}
                </div>
            </section>
        );
    }

    // Default 'Pills' Variant
    return (
        <section className="py-6 border-y border-border/40">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 overflow-x-auto no-scrollbar">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground shrink-0 hidden md:block">
                    Explore Sections
                </span>
                <div className="flex items-center gap-2 md:gap-4 shrink-0 px-4 md:px-0">
                    {subcategories.map((sub) => (
                        <Link 
                            key={sub.slug} 
                            href={`/${parentSlug}/${sub.slug}`}
                            className="group flex items-center gap-2 px-4 py-2 bg-background border border-border/50 rounded-full hover:border-gold hover:bg-gold/5 transition-all shrink-0"
                        >
                            <span className="text-xs font-bold uppercase tracking-wider group-hover:text-gold transition-colors">
                                {sub.label}
                            </span>
                            <Icon name="ArrowRight" size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-gold transition-all" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
