// src/components/ui/atoms/Layout/Skeleton.tsx
import { cn } from '@/lib/cn';

export interface SkeletonProps {
    variant?: 'text' | 'rect' | 'circle' | 'card' | 'headline' | 'byline';
    lines?: number; // for 'text' multi-line skeletons
    className?: string;
    'aria-label'?: string;
}

/**
 * Shimmer skeleton atom for loading states.
 *
 * Uses CSS animation `animate-pulse` (Tailwind) — no JS, no layout shift.
 * Variants:
 * - text      → single text line (default 3/4 width)
 * - headline  → wide bold headline line
 * - byline    → short narrow line (author/date)
 * - rect      → generic rectangle block
 * - circle    → avatar/icon circle
 * - card      → full article card skeleton (includes image + lines)
 */
export function Skeleton({
    variant = 'rect',
    lines = 1,
    className,
    'aria-label': ariaLabel = 'Loading…',
}: SkeletonProps) {
    const shimmer = 'bg-default animate-pulse rounded';

    if (variant === 'card') {
        return (
            <div
                role="status"
                aria-label={ariaLabel}
                className={cn('space-y-3', className)}
            >
                {/* Image block */}
                <div className={cn(shimmer, 'h-48 w-full rounded-xl')} />
                {/* Label chip */}
                <div className={cn(shimmer, 'h-4 w-1/4 rounded-full')} />
                {/* Headline */}
                <div className={cn(shimmer, 'h-5 w-full rounded')} />
                <div className={cn(shimmer, 'h-5 w-3/4 rounded')} />
                {/* Byline */}
                <div className={cn(shimmer, 'h-3 w-1/3 rounded')} />
                <span className="sr-only">{ariaLabel}</span>
            </div>
        );
    }

    if (variant === 'text' && lines > 1) {
        return (
            <div
                role="status"
                aria-label={ariaLabel}
                className={cn('space-y-2', className)}
            >
                {Array.from({ length: lines }).map((_, i) => (
                    <div
                        key={i}
                        className={cn(
                            shimmer,
                            'h-4',
                            i === lines - 1 ? 'w-4/6' : 'w-full'
                        )}
                    />
                ))}
                <span className="sr-only">{ariaLabel}</span>
            </div>
        );
    }

    const singleVariant = {
        text: 'h-4 w-3/4',
        headline: 'h-7 w-full',
        byline: 'h-3 w-1/3',
        rect: 'h-32 w-full rounded-lg',
        circle: 'h-10 w-10 rounded-full',
    }[variant] ?? 'h-4 w-3/4';

    return (
        <div
            role="status"
            aria-label={ariaLabel}
            className={cn(shimmer, singleVariant, className)}
        >
            <span className="sr-only">{ariaLabel}</span>
        </div>
    );
}

Skeleton.displayName = 'Skeleton';