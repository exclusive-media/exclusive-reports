// src/components/motion/MotionProvider.tsx (Updated)
"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import { EX_SPRING } from "@/lib/motion/presets";

export function MotionProvider({ children }: { children: React.ReactNode }) {
    return (
        <LazyMotion features={domAnimation} strict>
            {/* This ensures every 'm' component uses EX_SPRING by default unless overridden */}
            <MotionConfig transition={EX_SPRING}>
                {children}
            </MotionConfig>
        </LazyMotion>
    );
}