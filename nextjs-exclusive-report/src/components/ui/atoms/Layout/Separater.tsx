// src/components/ui/atoms/Layout/Separator.tsx
import { cn } from '@/lib/cn';

export interface SeparatorProps {
    variant?: 'default' | 'gold-accent' | 'thick' | 'editorial';
    orientation?: 'horizontal' | 'vertical';
    className?: string;
    decorative?: boolean;
}

/**
 * Editorial-grade separator atom.
 * 
 * Variants:
 * - default      → thin hairline, border color
 * - gold-accent  → warm accent rule with a centered gold dot flourish
 * - thick        → visually heavier divider (section-level)
 * - editorial    → gold line with centered em-dash for premium editorial breaks
 */
export function Separator({
    variant = 'default',
    orientation = 'horizontal',
    decorative = true,
    className,
}: SeparatorProps) {
    if (orientation === 'vertical') {
        return (
            <div
                role={decorative ? 'none' : 'separator'}
                aria-orientation="vertical"
                className={cn('inline-block self-stretch w-px bg-border mx-2', className)}
            />
        );
    }

    if (variant === 'editorial') {
        return (
            <div
                role={decorative ? 'none' : 'separator'}
                className={cn('relative my-8 flex items-center justify-center', className)}
            >
                <div className="absolute inset-x-0 h-px bg-accent/30" />
                <span className="relative bg-background px-4 text-accent/60 text-sm tracking-[0.5em] font-serif select-none">
                    ✦
                </span>
            </div>
        );
    }

    return (
        <hr
            role={decorative ? 'none' : 'separator'}
            className={cn(
                'border-0 my-6',
                variant === 'gold-accent' && 'h-px bg-accent/30',
                variant === 'thick' && 'h-0.5 bg-border',
                variant === 'default' && 'h-px bg-border',
                className
            )}
        />
    );
}

Separator.displayName = 'Separator';