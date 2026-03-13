// src/components/ui/atoms/buttons/IconButton.tsx
'use client';
import { cn } from '@/lib/cn';
import { Button, ButtonProps } from '@heroui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { buttonMotionProps } from '@/lib/motion/button';
import { forwardRef } from 'react';

export interface IconButtonProps extends Omit<ButtonProps, 'isIconOnly'> {
    'aria-label': string; // required for icon-only accessibility
    animate?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ 'aria-label': ariaLabel, animate = true, className, ...props }, ref) => {
        const prefersReducedMotion = useReducedMotion();

        const button = (
            <Button
                ref={ref}
                isIconOnly
                aria-label={ariaLabel}
                className={cn(
                    'rounded-full p-2 text-foreground/80 hover:text-foreground hover:bg-default/20',
                    className
                )}
                {...props}
            />
        );

        if (!animate || prefersReducedMotion) return button;

        return (
            <motion.div className="inline-flex" {...buttonMotionProps}>
                {button}
            </motion.div>
        );
    }
);

IconButton.displayName = 'IconButton';