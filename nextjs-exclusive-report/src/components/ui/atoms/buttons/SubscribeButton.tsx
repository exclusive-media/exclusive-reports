// src/components/ui/atoms/buttons/SubscribeButton.tsx (premium CTA)
'use client';
import { Button as HeroButton, ButtonProps } from '@heroui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { buttonMotionProps } from '@/lib/motion/button';
import { cn } from '@/lib/cn';
import { forwardRef } from 'react';

export const SubscribeButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, children = 'Subscribe to EX', ...props }, ref) => {
        const prefersReducedMotion = useReducedMotion();

        const button = (
            <HeroButton
                ref={ref}
                variant="primary"
                size="lg"
                className={cn(
                    'bg-accent text-accent-foreground font-semibold tracking-wide',
                    'shadow-md hover:shadow-lg hover:bg-accent/90',
                    className
                )}
                {...props}
            >
                {children}
            </HeroButton>
        );

        if (prefersReducedMotion) return button;

        return (
            <motion.div
                className="inline-flex"
                {...buttonMotionProps}
            >
                {button}
            </motion.div>
        );
    }
);

SubscribeButton.displayName = 'SubscribeButton';