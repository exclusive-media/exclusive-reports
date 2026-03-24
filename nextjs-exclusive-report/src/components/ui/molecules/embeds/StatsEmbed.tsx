"use client";

import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import { StatItem } from "@/sanity/types/article";
import { Card } from "@/components/ui/atoms/Layout/Card";
import { fadeInUp } from "@/lib/motion/variants/entryVariants";
import { staggerContainer } from "@/lib/motion/variants/containerVariants";
import { useSafeVariants } from "@/lib/motion/use-reduced-motion";

interface StatsEmbedProps {
    items?: StatItem[];
}

export function StatsEmbed({ items = [] }: StatsEmbedProps) {
    const stagger = useSafeVariants(staggerContainer);
    const itemVariant = useSafeVariants(fadeInUp);

    if (!items || items.length === 0) return null;

    return (
        <m.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="my-12"
        >
            <Card className="px-6 py-10 sm:p-12 border-border/40 shadow-sm bg-gradient-to-br from-background to-muted/30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                    {items.map((item, index) => (
                        <m.div
                            key={index}
                            variants={itemVariant}
                            className="flex flex-col items-center justify-center space-y-2"
                        >
                            <div className="flex items-baseline gap-0.5 text-accent font-bold">
                                <span className="text-4xl sm:text-5xl md:text-6xl tracking-tight">
                                    {item.number}
                                </span>
                                {item.suffix && (
                                    <span className="text-xl sm:text-2xl font-semibold opacity-80">
                                        {item.suffix}
                                    </span>
                                )}
                            </div>
                            <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest max-w-[120px]">
                                {item.label}
                            </span>
                        </m.div>
                    ))}
                </div>
            </Card>
        </m.div>
    );
}
