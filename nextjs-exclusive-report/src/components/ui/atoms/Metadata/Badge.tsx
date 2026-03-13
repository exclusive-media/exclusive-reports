// src/components/ui/atoms/Metadata/Badge.tsx
import { cn } from '@/lib/cn';

export interface BadgeProps {
    variant?: 'gold' | 'muted' | 'default' | 'soft';
    size?: 'sm' | 'md' | 'lg';
    uppercase?: boolean;
    className?: string;
    children?: React.ReactNode;
}

/**
 * Editorial category badge — the "EX REPORT", "ANALYSIS", "FEATURE" UI seal.
 *
 * Pure CSS implementation (no HeroUI Badge wrapper) to avoid HeroUI's
 * Badge API incompatibilities and to give us full styling control.
 *
 * Variants:
 * - gold     → accent background tint with accent text (signature label)
 * - muted    → subtle gray for secondary metadata
 * - default  → foreground/default surface
 * - soft     → very light background with muted text
 */
import React from 'react';

export function Badge({
    variant = 'default',
    size = 'md',
    uppercase = true,
    className,
    children,
}: BadgeProps) {
    const sizeClasses = {
        sm: 'text-[10px] px-2 py-0.5',
        md: 'text-xs px-2.5 py-0.5',
        lg: 'text-sm px-3 py-1',
    };

    const variantClasses = {
        gold: 'bg-accent/10 text-accent border border-accent/30 shadow-sm',
        muted: 'bg-default text-muted border border-border',
        default: 'bg-default text-default-foreground border border-border',
        soft: 'bg-default/50 text-muted',
    };

    return (
        <span
            className={cn(
                'inline-flex items-center font-medium tracking-wide rounded',
                uppercase && 'uppercase',
                sizeClasses[size],
                variantClasses[variant],
                className
            )}
        >
            {children}
        </span>
    );
}

Badge.displayName = 'Badge';