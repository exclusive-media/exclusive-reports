// src/components/motion/RevealText.tsx
"use client";

import { m } from "framer-motion";
import { useSafeVariants } from "@/lib/motion/use-reduced-motion";

interface RevealTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
    const textVariants = useSafeVariants({
        initial: { y: "100%", opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }
        }
    });

    return (
        <div className="overflow-hidden py-1">
            <m.h2
                className={className}
                variants={textVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
            >
                {text}
            </m.h2>
        </div>
    );
}