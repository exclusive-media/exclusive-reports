"use client";

// src/components/ui/atoms/Heading.tsx
import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";
import { m } from "framer-motion";
import { useSafeVariants } from "@/lib/motion/use-reduced-motion";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: HeadingLevel;
    variant?: "display" | "section" | "card" | "default";
    className?: string;
    animate?: boolean;
    delay?: number;
}

export function Heading({
    level = "h2",
    variant = "default",
    className,
    children,
    animate = false,
    delay = 0,
    ...props
}: HeadingProps) {
    const Comp = level;

    const variantStyles = {
        display: "font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
        section: "font-display text-3xl md:text-4xl font-semibold",
        card: "font-display text-2xl font-semibold leading-tight",
        default: "font-display text-xl md:text-2xl font-semibold",
    };

    const variants = useSafeVariants({
        initial: { y: "100%", opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }
        }
    });

    const combinedClassName = cn(
        "text-foreground",
        variantStyles[variant],
        className
    );

    if (animate) {
        const MotionComp = m[level];
        return (
            <div className="overflow-hidden py-1">
                <MotionComp
                    className={combinedClassName}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={variants}
                    {...(props as any)}
                >
                    {children}
                </MotionComp>
            </div>
        );
    }

    return (
        <Comp
            className={combinedClassName}
            {...(props as any)}
        >
            {children}
        </Comp>
    );
}