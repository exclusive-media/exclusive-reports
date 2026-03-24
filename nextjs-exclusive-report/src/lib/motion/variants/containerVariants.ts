// src/lib/motion/variants/containerVariants.ts
import { Variants } from "framer-motion";

export const staggerContainer: Variants = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

export const itemVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};
