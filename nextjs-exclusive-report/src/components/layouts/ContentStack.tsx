// src/components/layouts/ContentStack.tsx
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface ContentStackProps {
    children: ReactNode;
    gap?: "xs" | "sm" | "md" | "lg" | "xl";
    align?: "start" | "center" | "stretch" | "end";
    className?: string;
    as?: "div" | "section" | "article" | "ul" | "ol";
}

export function ContentStack({
    children,
    gap = "md",
    align = "start",
    className,
    as: Component = "div",
}: ContentStackProps) {
    const gapClasses = {
        xs: "space-y-2",
        sm: "space-y-4",
        md: "space-y-6",
        lg: "space-y-8",
        xl: "space-y-10 lg:space-y-12",
    }[gap];

    const alignClasses = {
        start: "items-start",
        center: "items-center",
        stretch: "items-stretch",
        end: "items-end",
    }[align];

    return (
        <Component className={cn("flex flex-col", gapClasses, alignClasses, className)}>
            {children}
        </Component>
    );
}