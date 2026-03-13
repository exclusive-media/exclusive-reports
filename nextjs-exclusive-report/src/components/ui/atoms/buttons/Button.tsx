// src/components/ui/atoms/buttons/Button.tsx
'use client';
import { cn } from '@/lib/cn';
import { Button as HeroButton, ButtonProps as HeroButtonProps } from '@heroui/react';
import { motion, useReducedMotion } from 'framer-motion';
import { buttonMotionProps } from '@/lib/motion/button';
import { forwardRef } from 'react';

export interface ButtonProps extends Omit<HeroButtonProps, 'variant' | 'color'> {
    variant?: 'primary' | 'gold' | 'outline-gold' | 'ghost' | 'subscribe' | 'danger' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    animate?: boolean; // toggle motion wrapper
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            fullWidth = false,
            animate = true,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const prefersReducedMotion = useReducedMotion();

        const heroVariantMap: Record<string, HeroButtonProps['variant']> = {
            primary: 'primary',
            gold: 'primary',
            'outline-gold': 'outline',
            ghost: 'ghost',
            subscribe: 'primary',
            danger: 'danger',
            secondary: 'secondary',
        };

        const baseClasses = cn(
            'font-medium tracking-wide transition-all',
            fullWidth && 'w-full',
            // Power Room gold accent override
            (variant === 'gold' || variant === 'subscribe') &&
                'bg-accent text-accent-foreground hover:bg-accent/90',
            variant === 'outline-gold' && 'border-accent text-accent hover:bg-accent/10',
            className
        );

        const button = (
            <HeroButton
                ref={ref}
                variant={heroVariantMap[variant]}
                size={size}
                className={baseClasses}
                fullWidth={fullWidth}
                {...props}
            >
                {children}
            </HeroButton>
        );

        if (!animate || prefersReducedMotion) return button;

        return (
            <motion.div
                className={cn('inline-flex', fullWidth && 'w-full')}
                {...buttonMotionProps}
            >
                {button}
            </motion.div>
        );
    }
);

Button.displayName = 'Button';