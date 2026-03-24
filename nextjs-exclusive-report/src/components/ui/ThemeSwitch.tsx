'use client';
// src/components/ui/ThemeSwitch.tsx
// Day/Night toggle — inspired by chunky pill toggle with icon on thumb.
// Uses localStorage-persisted data-theme on <html> to switch ocean ↔ ocean-dark.

import { Switch } from '@heroui/react';
import { useEffect, useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';

// Inline SVG atoms — no static asset dependency
function SunIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
    );
}

function MoonIcon() {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
        </svg>
    );
}

export function ThemeSwitch() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    // Sync with <html data-theme> on mount
    useEffect(() => {
        setMounted(true);
        if (typeof document !== 'undefined') {
            const htmlEl = document.documentElement;
            const current = htmlEl.getAttribute('data-theme');
            setIsDark(current === 'ocean-dark');
        }
    }, []);

    const toggle = (dark: boolean) => {
        const theme = dark ? 'ocean-dark' : 'ocean';
        if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme);
            try {
                localStorage.setItem('ex-theme', theme);
            } catch {
                // ignore
            }
        }
        setIsDark(dark);
    };

    // Prevent hydration mismatch
    if (!mounted) return <div className="w-[148px] h-10" aria-hidden="true" />;

    return (
        <label className="group inline-flex items-center gap-0 cursor-pointer select-none no-underline">
            <Switch
                isSelected={isDark}
                onChange={toggle}
                aria-label={isDark ? 'Switch to day mode' : 'Switch to night mode'}
                className="hidden"
            />
            {/* Custom pill layout - label left/right + icon thumb */}
            <span
                className={cn(
                    'relative flex items-center rounded-full overflow-hidden transition-colors duration-300 border border-transparent',
                    'h-10 w-[148px] px-1',
                    isDark ? 'bg-[#111] border-white/10' : 'bg-[#EBEBEA] border-black/10'
                )}
            >
                {/* Day label */}
                <AnimatePresence initial={false}>
                    {!isDark && (
                        <m.span
                            key="day-label"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-14 text-[10px] font-bold tracking-[0.12em] uppercase text-[#111] pointer-events-none"
                        >
                            DAYMODE
                        </m.span>
                    )}
                </AnimatePresence>

                {/* Night label */}
                <AnimatePresence initial={false}>
                    {isDark && (
                        <m.span
                            key="night-label"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="absolute right-14 text-[11px] font-bold tracking-[0.12em] uppercase text-white pointer-events-none"
                        >
                            NIGHTMODE
                        </m.span>
                    )}
                </AnimatePresence>

                {/* Sliding thumb */}
                <m.span
                    layout
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className={cn(
                        'absolute flex items-center justify-center',
                        'h-8 w-8 rounded-full shadow-md',
                        isDark
                            ? 'right-1 bg-white text-[#111]'
                            : 'left-1 bg-white text-[#111]'
                    )}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <m.span
                            key={isDark ? 'moon' : 'sun'}
                            initial={{ scale: 0.5, opacity: 0, rotate: -30 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            exit={{ scale: 0.5, opacity: 0, rotate: 30 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center"
                        >
                            {isDark ? <MoonIcon /> : <SunIcon />}
                        </m.span>
                    </AnimatePresence>
                </m.span>
            </span>
        </label>
    );
}
