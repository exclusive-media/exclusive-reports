// src/components/ui/atoms/Heading.tsx
import { cn } from "@/lib/cn";
import { HTMLAttributes, JSX } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
    level?: HeadingLevel;
    variant?: "display" | "section" | "card" | "default";
    className?: string;
}

export function Heading({
    level = "h2",
    variant = "default",
    className,
    children,
    ...props
}: HeadingProps) {
    const Comp = level as keyof JSX.IntrinsicElements;

    const variantStyles = {
        display: "font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
        section: "font-display text-3xl md:text-4xl font-semibold",
        card: "font-display text-2xl font-semibold leading-tight",
        default: "font-display text-xl md:text-2xl font-semibold",
    };

    return (
        <Comp
            className={cn(
                "text-foreground",
                variantStyles[variant],
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    );
}