// src/components/ui/organism/Nav/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { m, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PageContainer } from "@/components/layouts/PageContainer";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";
import { Icon } from "@/components/ui/atoms/Icons/Icon";
import { cn } from "@/lib/utils";
import { SearchMegaMenu } from "./SearchMegaMenu";
import { Logo } from "@/components/ui/atoms/Logo";

const NAV_ITEMS = [
    { label: "Business", href: "/category/business" },
    { label: "Politics", href: "/category/politics" },
    { label: "Technology", href: "/category/technology" },
    { label: "Africa", href: "/category/africa" },
    { label: "Markets", href: "/category/markets" },
];

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    
    // Logo scaling: scale from 1 to 0.8 when scrolling from 0 to 100px
    const logoScale = useTransform(scrollY, [0, 100], [1, 0.8]);
    const logoY = useTransform(scrollY, [0, 100], [0, -5]);
    
    // Sticky state for blur effects
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        const updateSticky = () => {
            setIsSticky(window.scrollY > 50);
        };
        updateSticky();
        window.addEventListener("scroll", updateSticky);
        return () => window.removeEventListener("scroll", updateSticky);
    }, []);

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
                {/* Row 1: Top Bar (Logo, Menu Trigger, CTA) */}
                <div className={cn(
                    "relative py-4 md:py-6 transition-all duration-500 border-b border-white/0",
                    isSticky && "bg-background/95 backdrop-blur-md border-border/40 py-3 md:py-4 shadow-sm"
                )}>
                    <PageContainer maxWidth="lg" paddingX="md" className="flex items-center justify-between">
                        {/* Left: Menu & Search combined */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase transition-colors hover:text-gold"
                                aria-label="Open Navigation & Search"
                            >
                                <div className="space-y-1.5 w-5">
                                    <div className="h-0.5 w-full bg-foreground transition-all group-hover:bg-gold" />
                                    <div className="h-0.5 w-3/4 bg-foreground transition-all group-hover:bg-gold" />
                                </div>
                                <span className="hidden md:inline">Browse</span>
                                <Icon name="Search" size={14} className="ml-1 opacity-60" />
                            </button>
                        </div>

                        {/* Center: Brand Identity */}
                        <m.div 
                            style={{ scale: logoScale, y: logoY }}
                            className="absolute left-1/2 -translate-x-1/2 text-center"
                        >
                            <Logo />
                        </m.div>

                        {/* Right: Actions */}
                        <div className="flex items-center gap-6">
                            <div className="hidden lg:block">
                                <ThemeSwitch />
                            </div>
                            <Link href="/subscribe">
                                <button className="px-5 py-2.5 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-gold hover:text-zinc-950 transition-all shadow-xl">
                                    Subscribe
                                </button>
                            </Link>
                        </div>
                    </PageContainer>
                </div>

                {/* Row 2: Editorial Navigation (Hidden on mobile scroll or condensed) */}
                <div className={cn(
                    "hidden md:block transition-all duration-500 bg-background/90 backdrop-blur-sm border-b border-border/40",
                    isSticky ? "h-12 translate-y-0" : "h-14 py-2"
                )}>
                    <PageContainer maxWidth="lg" className="h-full flex items-center justify-center">
                        <nav className="flex items-center gap-12">
                            {NAV_ITEMS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="relative group text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full" />
                                </Link>
                            ))}
                        </nav>
                    </PageContainer>
                </div>
            </header>

            {/* Spacing for fixed header */}
            <div className="h-[120px] md:h-[160px]" />

            {/* Full-screen Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <SearchMegaMenu 
                        isOpen={isMenuOpen} 
                        onClose={() => setIsMenuOpen(false)} 
                        navItems={NAV_ITEMS}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
