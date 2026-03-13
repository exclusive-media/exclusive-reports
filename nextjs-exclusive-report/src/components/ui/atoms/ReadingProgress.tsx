// src/components/ui/atoms/ReadingProgress.tsx
'use client';

import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function ReadingProgress() {
    const [isMounted, setIsMounted] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
        stiffness: 100,
        damping: 30,
    });

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-50"
            style={{ scaleX }}
            aria-hidden="true" // decorative only
        />
    );
}