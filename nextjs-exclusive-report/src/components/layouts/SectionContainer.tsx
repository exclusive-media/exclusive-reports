// src/components/layouts/SectionContainer.tsx
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface SectionContainerProps {
    children: ReactNode;
    paddingY?: "md" | "lg" | "xl";
    bg?: "default" | "surface" | "muted" | "accent/5" | "none";
    divider?: boolean;
    className?: string;
    as?: "section" | "div" | "article";
    id?: string;
}

export function SectionContainer({
    children,
    paddingY = "lg",
    bg = "default",
    divider = false,
    className,
    as: Component = "section",
    id,
}: SectionContainerProps) {
    const pyClasses = {
        md: "py-10 sm:py-12 lg:py-16",
        lg: "py-16 sm:py-20 lg:py-24",
        xl: "py-20 sm:py-24 lg:py-32",
    }[paddingY];

    const bgClasses = {
        default: "bg-background",
        surface: "bg-surface",
        muted: "bg-muted/30",
        "accent/5": "bg-accent/5",
        none: "",
    }[bg];

    return (
        <Component
            id={id}
            className={cn(
                "w-full",
                pyClasses,
                bgClasses,
                divider && "border-t border-border/40",
                className
            )}
        >
            {children}
        </Component>
    );
}