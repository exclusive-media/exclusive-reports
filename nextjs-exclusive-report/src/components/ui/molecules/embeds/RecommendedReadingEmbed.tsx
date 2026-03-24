"use client";

import { m } from "framer-motion";
import { RecommendedReadingBlock } from "@/sanity/types/article";
import { ArticleCard } from "@/components/ui/molecules/ArticleCard";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { fadeInUp } from "@/lib/motion/variants/entryVariants";
import { staggerContainer } from "@/lib/motion/variants/containerVariants";
import { useSafeVariants } from "@/lib/motion/use-reduced-motion";

export function RecommendedReadingEmbed({ title = "Recommended Reading", articles = [] }: RecommendedReadingBlock) {
    const entry = useSafeVariants(fadeInUp);
    const stagger = useSafeVariants(staggerContainer);
    const itemVariant = useSafeVariants(fadeInUp);

    if (!articles || articles.length === 0) return null;

    return (
        <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={entry}
            className="my-16 py-8 border-y border-border"
        >
            <Heading level="h3" className="mb-6 uppercase tracking-wider text-muted-foreground font-semibold text-sm flex items-center gap-4">
                {title}
                <div className="flex-1 h-px bg-border" />
            </Heading>

            <m.div 
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {articles.map((article, idx) => (
                    <m.div
                        key={idx}
                        variants={itemVariant}
                    >
                        <ArticleCard 
                            {...article as any} 
                            variant="vertical" 
                        />
                    </m.div>
                ))}
            </m.div>
        </m.div>
    );
}

