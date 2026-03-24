// src/components/layouts/SidebarLayout.tsx
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface SidebarLayoutProps {
    main: ReactNode;
    sidebar: ReactNode;
    sidebarWidth?: "1/4" | "1/3" | "80" | "320px"; // % or fixed px
    reverse?: boolean; // sidebar on left instead of right
    gap?: "md" | "lg";
    className?: string;
    mainClassName?: string;
    sidebarClassName?: string;
}

export function SidebarLayout({
    main,
    sidebar,
    sidebarWidth = "1/3",
    reverse = false,
    gap = "lg",
    className,
    mainClassName,
    sidebarClassName,
}: SidebarLayoutProps) {
    const gapClasses = {
        md: "gap-6 lg:gap-8",
        lg: "gap-8 lg:gap-10",
    }[gap];

    const widthClasses = {
        "1/4": "w-full lg:w-1/4",
        "1/3": "w-full lg:w-1/3",
        "80": "w-full lg:w-80",
        "320px": "w-full lg:w-[320px]",
    }[sidebarWidth];

    return (
        <div className={cn("grid grid-cols-1 lg:grid-cols-12", gapClasses, className)}>
            {/* Main content – takes most columns */}
            <div
                className={cn(
                    "lg:col-span-9 xl:col-span-8",
                    reverse ? "lg:order-2" : "lg:order-1",
                    mainClassName
                )}
            >
                {main}
            </div>

            {/* Sidebar */}
            <aside
                className={cn(
                    widthClasses,
                    "lg:sticky lg:top-20 h-fit",
                    reverse ? "lg:order-1" : "lg:order-2",
                    sidebarClassName
                )}
            >
                {sidebar}
            </aside>
        </div>
    );
}