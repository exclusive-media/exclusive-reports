// src/components/ui/molecules/PageHeader.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PageContainer } from "@/components/layouts/PageContainer";
import { cn } from "@/lib/utils";

export interface PageHeaderSubcategory {
    label: string;
    slug: string;
}

interface PageHeaderProps {
    /** Primary category title (e.g. "Business") */
    title: string;
    /** Short editorial description — kept compact on the static header */
    description?: string;
    /** The canonical slug for the parent category (used to build sub-links) */
    parentSlug?: string;
    /** List of sub-sections to render in the sticky nav strip */
    subcategories?: PageHeaderSubcategory[];
    className?: string;
}

/**
 * Category PageHeader Molecule — Forbes-style two-phase header
 *
 * Phase 1 (static)
 *   A compact block with a moderate-size italic title and 1-line description.
 *   Sits naturally in document flow just above the category hero.
 *
 * Phase 2 (sticky)
 *   Once the static block scrolls out of view, a slim bar slides down
 *   from below the main navbar. Left side = compact category name.
 *   Right side = horizontally scrollable sub-section links with a
 *   right-edge gradient hint. Bar disappears when scrolling back to top.
 */
export function PageHeader({
    title,
    description,
    parentSlug = "",
    subcategories = [],
    className,
}: PageHeaderProps) {
    const headerRef = useRef<HTMLDivElement>(null);
    const [isSticky, setIsSticky] = useState(false);
    const pathname = usePathname();

    // Use IntersectionObserver (not scroll events) for better performance
    useEffect(() => {
        const el = headerRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // When the static header is NOT intersecting → show sticky bar
                setIsSticky(!entry.isIntersecting);
            },
            {
                // Trigger as soon as the element starts to exit the viewport
                rootMargin: "0px 0px 0px 0px",
                threshold: 0,
            }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    // When the sticky sub-nav becomes active, signal to the global navbar
    // to slide out of view by toggling a class on <html>.
    // CSS in globals.css handles the visual transition.
    useEffect(() => {
        if (isSticky) {
            document.documentElement.classList.add('category-subnav-active');
        } else {
            document.documentElement.classList.remove('category-subnav-active');
        }
        // Clean up when the category page unmounts
        return () => document.documentElement.classList.remove('category-subnav-active');
    }, [isSticky]);

    return (
        <>
            {/* ─── Phase 1: Static compact header ─── */}
            <div
                ref={headerRef}
                className={cn(
                    "py-6 md:py-8 bg-background border-b border-border/40",
                    className
                )}
            >
                <PageContainer maxWidth="lg">
                    <div className="flex items-end justify-between gap-8">
                        {/* Left: Title block */}
                        <m.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="space-y-1"
                        >
                            <span className="text-[9px] uppercase tracking-[0.35em] font-bold text-accent block">
                                Exclusive Coverage
                            </span>
                            <h1 className="font-heading italic text-3xl md:text-4xl text-foreground leading-tight tracking-tight">
                                {title}
                            </h1>
                            {description && (
                                <p className="text-sm text-muted-foreground font-serif italic leading-snug max-w-lg line-clamp-1 hidden md:block">
                                    {description}
                                </p>
                            )}
                        </m.div>

                        {/* Right: Inline sub-section links (desktop, visible before sticky) */}
                        {subcategories.length > 0 && (
                            <nav
                                aria-label="Category sections"
                                className="hidden lg:flex items-center gap-6 shrink-0"
                            >
                                {subcategories.map((sub) => {
                                    const href = `/${parentSlug}/${sub.slug}`;
                                    const isActive = pathname === href;
                                    return (
                                        <Link
                                            key={sub.slug}
                                            href={href}
                                            className={cn(
                                                "text-[11px] uppercase tracking-widest font-bold pb-0.5 border-b-2 transition-colors whitespace-nowrap",
                                                isActive
                                                    ? "border-gold text-foreground"
                                                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                                            )}
                                        >
                                            {sub.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        )}
                    </div>
                </PageContainer>
            </div>

            {/* ─── Phase 2: Sticky bar ─── */}
            <AnimatePresence>
                {isSticky && (
                    <m.div
                        key="sticky-header"
                        initial={{ y: -48, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -48, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 38 }}
                        className={cn(
                            "fixed left-0 right-0",
                            // z-[60] sits above the main navbar (z-50) so this bar
                            // visually takes over the top-of-screen position on scroll
                            "z-[60] top-0",
                            "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm"
                        )}
                    >
                        <PageContainer maxWidth="lg">
                            <div className="flex items-center gap-6 h-12">
                                {/* Left: Category name badge */}
                                <span className="font-heading italic text-lg font-semibold text-foreground shrink-0 pr-6 border-r border-border/50">
                                    {title}
                                </span>

                                {/* Right: Horizontally scrollable sub-section nav */}
                                {subcategories.length > 0 ? (
                                    <div className="relative flex-1 overflow-hidden">
                                        {/* Fade-out gradient hinting at overflow */}
                                        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background/95 to-transparent z-10" />
                                        <nav
                                            aria-label="Category sections"
                                            className="flex items-center gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
                                        >
                                            {subcategories.map((sub) => {
                                                const href = `/${parentSlug}/${sub.slug}`;
                                                const isActive = pathname === href;
                                                return (
                                                    <Link
                                                        key={sub.slug}
                                                        href={href}
                                                        className={cn(
                                                            "text-[10px] uppercase tracking-widest font-bold pb-3 border-b-2 transition-colors whitespace-nowrap",
                                                            isActive
                                                                ? "border-gold text-foreground"
                                                                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                                                        )}
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                );
                                            })}
                                            {/* Spacer so last item clears the gradient */}
                                            <span className="shrink-0 w-8" aria-hidden />
                                        </nav>
                                    </div>
                                ) : (
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                                        All Stories
                                    </span>
                                )}
                            </div>
                        </PageContainer>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    );
}
