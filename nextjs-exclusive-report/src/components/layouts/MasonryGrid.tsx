// src/components/layouts/MasonryGrid.tsx
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface MasonryGridProps {
    children: ReactNode;
    columns?: 1 | 2 | 3 | 4; // base columns (responsive auto-adjust)
    gap?: "md" | "lg" | "xl";
    className?: string;
    as?: "div" | "ul" | "ol" | "section";
}

export function MasonryGrid({
    children,
    columns = 3,
    gap = "lg",
    className,
    as: Component = "div",
}: MasonryGridProps) {
    const gapClasses = {
        md: "gap-6",
        lg: "gap-8",
        xl: "gap-10",
    }[gap];

    const columnClasses = {
        1: "columns-1",
        2: "columns-1 sm:columns-2",
        3: "columns-1 sm:columns-2 lg:columns-3",
        4: "columns-1 sm:columns-2 lg:columns-3 xl:columns-4",
    }[columns];

    return (
        <Component
            className={cn(
                "w-full",
                columnClasses,
                gapClasses,
                "break-inside-avoid", // prevents children from breaking across columns
                className
            )}
        >
            {children}
        </Component>
    );
}