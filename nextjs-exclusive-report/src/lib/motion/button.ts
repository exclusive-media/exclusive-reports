// src/lib/motion/button.ts
// Framer Motion presets for button micro-interactions — HeroUI v3 style.
// We use a motion.div wrapper approach (not motion(Button)) to avoid
// the onAnimationStart type conflict between React HTML events and Framer Motion.

export const buttonMotionProps = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
  transition: { type: 'spring', stiffness: 400, damping: 30 },
} as const;