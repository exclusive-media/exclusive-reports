// src/lib/motion/presets.ts

// The "Exclusive" Standard Spring - Calm, decisive, no bounce.
export const EX_SPRING = {
    type: "spring" as const,
    stiffness: 400,
    damping: 30,
    mass: 1,
};

// The "Heavy" Spring - For larger structural elements (Organisms).
export const EX_HEAVY_SPRING = {
    type: "spring" as const,
    stiffness: 200,
    damping: 40,
};

// Standard Duration-based transition for simple fades (Best for Lighthouse/INP)
export const EX_FADE_TRANSITION = {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1], // Standard Ease-Out
};