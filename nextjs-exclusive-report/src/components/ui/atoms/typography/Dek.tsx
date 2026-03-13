// src/components/ui/atoms/Dek.tsx
import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

interface DekProps extends HTMLAttributes<HTMLParagraphElement> {
    className?: string;
}

export function Dek({ className, children, ...props }: DekProps) {
    return (
        <p
            className={cn(
                "text-muted text-lg md:text-xl font-serif italic leading-relaxed",
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
}