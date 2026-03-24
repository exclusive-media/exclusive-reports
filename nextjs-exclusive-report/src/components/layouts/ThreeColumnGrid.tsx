// src/components/layouts/ThreeColumnGrid.tsx
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface ThreeColumnGridProps {
    children: ReactNode;
    gap?: "md" | "lg" | "xl";
    minItemWidth?: number; // in pixels, for minmax(auto, min-width)
    className?: string;
    as?: "div" | "ul" | "ol" | "section";
}

export function ThreeColumnGrid({
    children,
    gap = "lg",
    minItemWidth = 320,
    className,
    as: Component = "div",
}: ThreeColumnGridProps) {
    const gapClasses = {
        md: "gap-6",
        lg: "gap-8",
        xl: "gap-10",
    }[gap];

    return (
        <Component
            className={cn(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
                gapClasses,
                `grid-cols-[repeat(auto-fill,minmax(${minItemWidth}px,1fr))]`,
                className
            )}
        >
            {children}
        </Component>
    );
}