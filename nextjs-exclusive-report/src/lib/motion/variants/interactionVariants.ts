// src/lib/motion/variants/interactionVariants.ts

export const subtleHover = {
    scale: 1.02,
    transition: { type: "spring", stiffness: 400, damping: 30 }
};

export const subtleTap = {
    scale: 0.98
};

// For the Ethiopian Gold Accent underline
export const accentUnderline: any = {
    initial: { width: "0%", opacity: 0 },
    hover: {
        width: "100%",
        opacity: 1,
        transition: { duration: 0.3, ease: "easeInOut" }
    }
};