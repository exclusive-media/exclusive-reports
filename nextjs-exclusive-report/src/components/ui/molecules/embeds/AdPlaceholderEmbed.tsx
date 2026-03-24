"use client";

import { cn } from "@/lib/utils";
import { m } from "framer-motion";
import { fadeInUp } from "@/lib/motion/variants/entryVariants";
import { useSafeVariants } from "@/lib/motion/use-reduced-motion";
import { AdPlaceholderBlock } from "@/sanity/types/article";

export function AdPlaceholderEmbed({ height = 'medium', label = 'Advertisement' }: AdPlaceholderBlock) {
    const variants = useSafeVariants(fadeInUp);

    const heightClasses = {
        small: "h-[160px]",
        medium: "h-[300px]",
        large: "h-[400px]",
    };

    return (
        <div className="my-12 flex justify-center w-full clear-both">
            <m.div 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                variants={variants}
                className={cn(
                    "w-full max-w-[728px] bg-muted/20 border-2 border-dashed border-border/60 rounded-xl",
                    "flex flex-col items-center justify-center text-muted-foreground/50 select-none overflow-hidden p-4",
                    heightClasses[height]
                )}
            >
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-center">
                    {label}
                </span>
                <span className="text-[10px] mt-2 opacity-50 block max-w-[200px] text-center">
                    Placeholder block configured for {height} display size
                </span>
            </m.div>
        </div>
    );
}

