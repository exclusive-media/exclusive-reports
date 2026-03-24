// src/components/layouts/InlineCluster.tsx
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface InlineClusterProps {
    children: ReactNode;
    gap?: "xs" | "sm" | "md" | "lg";
    align?: "start" | "center" | "baseline" | "end";
    wrap?: boolean;
    className?: string;
    as?: "div" | "span" | "p" | "ul" | "ol";
}

export function InlineCluster({
    children,
    gap = "sm",
    align = "center",
    wrap = true,
    className,
    as: Component = "div",
}: InlineClusterProps) {
    const gapClasses = {
        xs: "gap-1.5",
        sm: "gap-2",
        md: "gap-3",
        lg: "gap-4",
    }[gap];

    const alignClasses = {
        start: "items-start",
        center: "items-center",
        baseline: "items-baseline",
        end: "items-end",
    }[align];

    return (
        <Component
            className={cn(
                "inline-flex flex-wrap",
                gapClasses,
                alignClasses,
                wrap ? "flex-wrap" : "flex-nowrap",
                className
            )}
        >
            {children}
        </Component>
    );
}