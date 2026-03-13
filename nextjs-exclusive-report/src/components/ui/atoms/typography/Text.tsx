// src/components/ui/atoms/Text.tsx
import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

type TextVariant = "default" | "muted" | "small" | "large" | "lead";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    variant?: TextVariant;
    as?: "p" | "span" | "div";
    lineClamp?: number;
}

export function Text({
    variant = "default",
    as = "p",
    lineClamp,
    className,
    children,
    ...props
}: TextProps) {
    const Comp = as;

    const variantStyles = {
        default: "text-foreground",
        muted: "text-muted-foreground",
        small: "text-sm text-muted-foreground",
        large: "text-lg",
        lead: "text-xl text-foreground/90",
    };

    return (
        <Comp
            className={cn(
                variantStyles[variant],
                lineClamp && `line-clamp-${lineClamp}`,
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    );
}