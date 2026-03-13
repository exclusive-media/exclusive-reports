// src/components/ui/atoms/Label.tsx
import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

interface LabelProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "gold" | "muted" | "default";
}

export function Label({ variant = "default", className, children, ...props }: LabelProps) {
    const variantStyles = {
        gold: "bg-accent/10 text-accent border border-accent/30 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide rounded",
        muted: "text-muted-foreground text-xs uppercase tracking-wider",
        default: "text-foreground/80 text-sm font-medium",
    };

    return (
        <span className={cn(variantStyles[variant], className)} {...props}>
            {children}
        </span>
    );
}