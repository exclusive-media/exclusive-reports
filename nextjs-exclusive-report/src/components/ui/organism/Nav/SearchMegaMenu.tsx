// src/components/ui/organism/Nav/SearchMegaMenu.tsx
"use client";

import { useEffect, useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Icon } from "@/components/ui/atoms/Icons/Icon";
import { PageContainer } from "@/components/layouts/PageContainer";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "@/components/ui/ThemeSwitch";

interface SearchMegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: { label: string; href: string }[];
}

const CATEGORY_SUBS = {
    Business: [
        { label: "Markets & Indices", href: "/category/business/markets" },
        { label: "Infrastructure Projects", href: "/category/business/infrastructure" },
        { label: "Foreign Investment", href: "/category/business/investment" },
        { label: "Trade Agreements", href: "/category/business/trade" },
        { label: "Energy & Mining", href: "/category/business/energy" },
    ],
    Politics: [
        { label: "Diplomatic Relations", href: "/category/politics/diplomacy" },
        { label: "Election Watch", href: "/category/politics/elections" },
        { label: "National Security", href: "/category/politics/security" },
        { label: "Governance Index", href: "/category/politics/governance" },
        { label: "Geopolitics", href: "/category/politics/geopolitics" },
    ],
    Technology: [
        { label: "AI & Automation", href: "/category/technology/ai" },
        { label: "Fintech Solutions", href: "/category/technology/fintech" },
        { label: "Startup Ecosystem", href: "/category/technology/startups" },
        { label: "Cybersecurity", href: "/category/technology/cybersecurity" },
        { label: "Connectivity", href: "/category/technology/connectivity" },
    ],
    Africa: [
        { label: "Horn of Africa", href: "/category/africa/horn-of-africa" },
        { label: "West Africa Monitor", href: "/category/africa/west-africa" },
        { label: "Southern Africa", href: "/category/africa/southern-africa" },
        { label: "Diaspora Impact", href: "/category/africa/diaspora" },
        { label: "Maghreb Region", href: "/category/africa/maghreb" },
    ],
    Markets: [
        { label: "Commodities", href: "/category/markets/commodities" },
        { label: "Currencies (FX)", href: "/category/markets/fx" },
        { label: "Stock Exchanges", href: "/category/markets/stocks" },
        { label: "Sovereign Debt", href: "/category/markets/debt" },
        { label: "Private Equity", href: "/category/markets/pe" },
    ],
};

export function SearchMegaMenu({ isOpen, onClose, navItems }: SearchMegaMenuProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [isOpen]);

    return (
        <m.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[100] bg-zinc-950 text-white overflow-y-auto"
        >
            <PageContainer maxWidth="lg" className="py-8 md:py-12">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <button onClick={onClose} className="p-3 rounded-full hover:bg-white/10 transition-colors" aria-label="Close menu">
                        <Icon name="X" size={32} />
                    </button>

                    <div className="absolute left-1/2 -translate-x-1/2">
                        <span className="font-heading italic text-3xl md:text-5xl border-b-[3px] border-gold pb-1 px-4 leading-[1.2]">
                            EXCLUSIVE
                        </span>
                    </div>

                    <div className="hidden md:block">
                        <Link href="/subscribe">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gold hover:underline">Support Exclusive Authors →</span>
                        </Link>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto mb-16 px-4">
                    <input
                        type="search"
                        placeholder="Search stories, reports, and data..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                        className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl md:text-4xl font-display italic placeholder:text-white/20 focus:outline-none focus:border-gold transition-all"
                    />
                    <Icon name="Search" size={32} className="absolute right-4 top-1/2 -translate-y-1/2 text-gold opacity-60" />
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
                    {/* Collaborative Column Container (Col 1 & 2) for better hover bridge */}
                    <div 
                        className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
                        onMouseLeave={() => setActiveCategory(null)}
                    >
                        {/* Col 1: Main Sections */}
                        <div>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/60 mb-8 block">MAIN COVERAGE</span>
                            <nav className="flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={onClose}
                                        onMouseEnter={() => setActiveCategory(item.label)}
                                        className={cn(
                                            "text-2xl md:text-4xl font-display italic transition-all flex items-center justify-between group py-1",
                                            activeCategory === item.label ? "text-gold translate-x-2" : "text-white/60 hover:text-white"
                                        )}
                                    >
                                        {item.label}
                                        <Icon 
                                            name="ArrowRight" 
                                            size={20} 
                                            className={cn(
                                                "transition-all", 
                                                activeCategory === item.label ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                                            )} 
                                        />
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        
                        {/* Col 2: Dynamic Sub-sections */}
                        <div className="border-l border-white/5 pl-8 md:pl-12 pt-8 md:pt-0">
                            <AnimatePresence mode="wait">
                                <m.div
                                    key={activeCategory || "default"}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.15 }}
                                    className="space-y-10"
                                >
                                    {activeCategory && CATEGORY_SUBS[activeCategory as keyof typeof CATEGORY_SUBS] ? (
                                        <div>
                                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-8 block">
                                                {activeCategory.toUpperCase()} NICHES
                                            </span>
                                            <nav className="flex flex-col gap-6">
                                                {CATEGORY_SUBS[activeCategory as keyof typeof CATEGORY_SUBS].map((sub) => (
                                                    <Link
                                                        key={sub.href}
                                                        href={sub.href}
                                                        onClick={onClose}
                                                        className="text-lg md:text-xl font-display italic text-zinc-300 hover:text-gold transition-colors flex items-center gap-3 group"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-gold/20 group-hover:bg-gold transition-colors" />
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    ) : (
                                        <>
                                            <div>
                                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/60 mb-6 block">EXPLORE DATA</span>
                                                <nav className="flex flex-col gap-4 text-sm font-medium tracking-wide text-zinc-400">
                                                    <Link href="/data/market-indices" className="hover:text-gold transition-colors italic">Market Indices & Data</Link>
                                                    <Link href="/reports/policy-reviews" className="hover:text-gold transition-colors italic">Policy Review Archive</Link>
                                                    <Link href="/podcasts" className="hover:text-gold transition-colors italic">The Audio Report (Podcasts)</Link>
                                                </nav>
                                            </div>
                                            <div>
                                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/60 mb-6 block">INSTITUTIONAL</span>
                                                <nav className="flex flex-col gap-4 text-sm font-medium tracking-wide text-zinc-400">
                                                    <Link href="/about" className="hover:text-gold transition-colors">Our Mission</Link>
                                                    <Link href="/membership" className="hover:text-gold transition-colors">Access & Membership</Link>
                                                    <Link href="/contact" className="hover:text-gold transition-colors">Contact Editorial</Link>
                                                </nav>
                                            </div>
                                        </>
                                    )}
                                </m.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Col 3: Featured highlights */}
                    <div className="md:col-span-4 border-l border-white/5 md:pl-12 pt-12 md:pt-0">
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/60 mb-8 block">TODAY'S HIGHLIGHTS</span>
                        <div className="space-y-10">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="group cursor-pointer">
                                    <span className="text-[9px] font-bold tracking-[0.2em] text-accent uppercase mb-2 block italic">FEATURED ANALYSIS</span>
                                    <h4 className="text-xl font-display italic leading-tight group-hover:text-gold transition-colors">
                                        The Horn of Africa Power Balance: A Geopolitical Index
                                    </h4>
                                    <div className="mt-3 h-px w-8 bg-gold opacity-40 group-hover:w-full transition-all duration-700" />
                                </div>
                            ))}
                        </div>

                        <div className="mt-20 pt-10 border-t border-zinc-800/50">
                            {/* Theme Switch for Mobile */}
                            <div className="md:hidden mb-12">
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4 block">PREFERENCE</span>
                                <ThemeSwitch />
                            </div>

                            <p className="text-[10px] text-zinc-500 italic mb-6">"Power room journalism for those who drive Africa's markets."</p>
                            <div className="flex gap-4">
                                <Icon name="Twitter" size={18} className="text-zinc-400 hover:text-white cursor-pointer" />
                                <Icon name="Linkedin" size={18} className="text-zinc-400 hover:text-white cursor-pointer" />
                                <Icon name="Youtube" size={18} className="text-zinc-400 hover:text-white cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
        </m.div>
    );
}
