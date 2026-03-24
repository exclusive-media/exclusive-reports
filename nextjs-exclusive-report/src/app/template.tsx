// src/app/template.tsx
"use client";

import { m, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useSafeVariants } from "@/lib/motion/use-reduced-motion";
import { EX_FADE_TRANSITION } from "@/lib/motion/presets";

/**
 * The Global Page Transition Wrapper
 * This provides the "Institutional Fade" between routes.
 */
export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Ensure users with reduced motion preferences get an even 
    // subtler transition (shorter duration, no vertical lift)
    const fadeVariants = useSafeVariants({
        initial: { opacity: 0, y: 8 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                ...EX_FADE_TRANSITION,
                duration: 0.5
            }
        },
        exit: { opacity: 0, y: -8 }
    });

    return (
        <AnimatePresence mode="wait">
            <m.div
                key={pathname}
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col min-h-screen"
            >
                {children}
            </m.div>
        </AnimatePresence>
    );
}