// src/components/layouts/CardGrid.tsx
import { cn } from "@/lib/cn";
import React from "react";
import { ReactNode } from "react";

interface CardGridProps {
    children: ReactNode;
    columns?: 1 | 2 | 3 | 4;
    gap?: "md" | "lg";
    hoverLift?: boolean; // optional group-hover scale + shadow
    className?: string;
    as?: "div" | "ul" | "ol";
}

export function CardGrid({
    children,
    columns = 3,
    gap = "lg",
    hoverLift = true,
    className,
    as: Component = "div",
}: CardGridProps) {
    const gapClasses = {
        md: "gap-6",
        lg: "gap-8",
    }[gap];

    const columnClasses = {
        1: "grid-cols-1",
        2: "grid-cols-1 sm:grid-cols-2",
        3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
    }[columns];

    const hoverClasses = hoverLift
        ? "group-hover:shadow-md group-hover:scale-[1.02] transition-all duration-300"
        : "";

    return (
        <Component className={cn("grid", columnClasses, gapClasses, className)}>
            {React.Children.map(children, (child) =>
                child ? (
                    <div className={cn("transition-transform", hoverClasses)}>{child}</div>
                ) : null
            )}
        </Component>
    );
}