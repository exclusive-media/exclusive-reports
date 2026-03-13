"use client";
// src/components/ui/atoms/Icons/Icon.tsx
import { cn } from "@/lib/utils";
import * as Lucide from "lucide-react";
import { forwardRef, SVGProps, type ComponentType } from "react";

// Import animated icons as they are added by shadcn
// These components use framer-motion/motion/react and have a specific handle interface
import { PlayIcon } from "@/components/ui/play";
import { PauseIcon } from "@/components/ui/pause";
import { MicIcon } from "@/components/ui/mic";
import { BookmarkIcon } from "@/components/ui/bookmark";

// Map names to animated components
const animatedIconMap: Record<string, ComponentType<any>> = {
    play: PlayIcon,
    pause: PauseIcon,
    mic: MicIcon,
    bookmark: BookmarkIcon,
};

type LucideIconName = keyof typeof Lucide;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
    name: string;                    // e.g., "Play", "Pause", "Settings", or lowercase "play" for animated
    animated?: boolean;
    size?: number;
    color?: string;
    className?: string;
}

/**
 * Unified Icon Atom.
 * Supports both static Lucide icons and shadcn-style animated icons.
 * 
 * Usage:
 * <Icon name="Settings" size={20} />              // Static Lucide
 * <Icon name="play" animated size={32} />          // Animated variant
 */
export const Icon = forwardRef<SVGSVGElement | HTMLDivElement, IconProps>(
    (
        {
            name,
            animated = false,
            size = 24,
            color = "currentColor",
            className,
            ...props
        },
        ref
    ) => {
        const lowerName = name.toLowerCase();

        // 1. Try animated version first if requested
        if (animated) {
            const AnimatedComp = animatedIconMap[lowerName];
            if (AnimatedComp) {
                return (
                    <AnimatedComp
                        ref={ref as any}
                        size={size}
                        className={cn("text-foreground", className)}
                        {...props}
                    />
                );
            }
            console.warn(`Animated icon "${name}" not found. Falling back to static.`);
        }

        // 2. Fallback or Static Lucide Icon
        // We look for the exact name first, then capitalized
        const iconKey = (Lucide[name as LucideIconName] 
            ? name 
            : name.charAt(0).toUpperCase() + name.slice(1)) as LucideIconName;
            
        const StaticIcon = Lucide[iconKey] as Lucide.LucideIcon;

        if (!StaticIcon) {
            console.warn(`Icon "${name}" not found in lucide-react`);
            return null;
        }

        return (
            <StaticIcon
                ref={ref as any}
                size={size}
                color={color}
                className={cn("inline-block shrink-0", className)}
                {...props}
            />
        );
    }
);

Icon.displayName = "Icon";