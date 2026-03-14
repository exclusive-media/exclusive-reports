"use client";

import { motion } from "framer-motion";
import { RecommendedReadingBlock } from "@/sanity/types/article";
import { ArticleCard } from "@/components/ui/molecules/ArticleCard";
import { Heading } from "@/components/ui/atoms/typography/Heading";

export function RecommendedReadingEmbed({ title = "Recommended Reading", articles = [] }: RecommendedReadingBlock) {
    if (!articles || articles.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="my-16 py-8 border-y border-border"
        >
            <Heading level="h3" className="mb-6 uppercase tracking-wider text-muted-foreground font-semibold text-sm flex items-center gap-4">
                {title}
                <div className="flex-1 h-px bg-border" />
            </Heading>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <ArticleCard 
                            {...article as any} 
                            variant="vertical" 
                        />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
