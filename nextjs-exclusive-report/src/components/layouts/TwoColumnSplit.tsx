// src/components/layouts/TwoColumnSplit.tsx
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface TwoColumnSplitProps {
    children: [ReactNode, ReactNode]; // exactly two children expected
    reverseOnMobile?: boolean;
    gap?: "md" | "lg" | "xl";
    leftWidth?: "1/2" | "3/5" | "2/3" | "7/10" | "flex-1";
    rightWidth?: "1/2" | "2/5" | "1/3" | "3/10" | "flex-1";
    className?: string;
    as?: "div" | "section" | "article";
}

export function TwoColumnSplit({
    children,
    reverseOnMobile = false,
    gap = "lg",
    leftWidth = "3/5",
    rightWidth = "2/5",
    className,
    as: Component = "div",
}: TwoColumnSplitProps) {
    if (children.length !== 2) {
        console.warn("TwoColumnSplit expects exactly 2 children");
        return <>{children}</>;
    }

    const [left, right] = children;

    const gapClasses = {
        md: "gap-6 md:gap-8",
        lg: "gap-8 md:gap-10 lg:gap-12",
        xl: "gap-10 md:gap-12 lg:gap-16",
    }[gap];

    const widthClasses = {
        "1/2": "w-full md:w-1/2",
        "3/5": "w-full md:w-3/5",
        "2/3": "w-full md:w-2/3",
        "7/10": "w-full md:w-[70%]",
        "2/5": "w-full md:w-2/5",
        "1/3": "w-full md:w-1/3",
        "3/10": "w-full md:w-[30%]",
        "flex-1": "flex-1",
    };

    return (
        <Component
            className={cn(
                "flex flex-col md:flex-row items-start",
                gapClasses,
                className
            )}
        >
            <div className={cn(widthClasses[leftWidth], reverseOnMobile && "order-last md:order-first")}>
                {left}
            </div>
            <div className={cn(widthClasses[rightWidth], reverseOnMobile && "order-first md:order-last")}>
                {right}
            </div>
        </Component>
    );
}