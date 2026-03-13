// src/components/ui/atoms/Layout/Card.tsx
'use client';
import { cn } from '@/lib/cn';
import {
    Card as HeroCard,
    CardProps as HeroCardProps,
} from '@heroui/react';
import { forwardRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface CardProps extends Omit<HeroCardProps, 'variant'> {
    variant?: 'default' | 'featured' | 'transparent' | 'hover-lift';
    animate?: boolean;
    hoverScale?: number;
}

/**
 * Premium editorial card with optional hover-lift animation.
 * Uses motion.div wrapper (not motion(HeroCard)) to avoid
 * the onAnimationStart type conflict with Framer Motion.
 * 
 * Subcomponents (Header, Body, Footer) are accessed via dot notation: HeroCard.Header etc.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
    (
        {
            variant = 'default',
            animate = true,
            hoverScale = 1.02,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const prefersReducedMotion = useReducedMotion();

        const baseClasses = cn(
            'overflow-hidden transition-shadow duration-300',
            variant === 'featured' && 'border border-accent/20 shadow-md hover:shadow-lg',
            variant === 'transparent' && 'bg-transparent border-none shadow-none',
            variant === 'hover-lift' && 'hover:shadow-xl',
            className
        );

        const card = (
            <HeroCard ref={ref} className={baseClasses} {...props}>
                {children}
            </HeroCard>
        );

        if (!animate || prefersReducedMotion) return card;

        return (
            <motion.div
                whileHover={{ scale: hoverScale }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                className="block"
            >
                {card}
            </motion.div>
        );
    }
);

Card.displayName = 'Card';

// Sub-components re-exported for composition using dot-notation from HeroCard
// @ts-ignore - HeroUI v3 beta types might not reflect these but the components exist
export const CardHeader = HeroCard.Header;
// @ts-ignore
export const CardBody = HeroCard.Body;
// @ts-ignore
export const CardFooter = HeroCard.Footer;