// src/components/ui/organism/Nav/Footer.tsx
"use client";

import { PageContainer } from "@/components/layouts/PageContainer";
import { Logo } from "@/components/ui/atoms/Logo";
import { Icon } from "@/components/ui/atoms/Icons/Icon";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/atoms/Layout/Separator";

const FOOTER_LINKS = {
    coverage: [
        { label: "Business", href: "/category/business" },
        { label: "Politics", href: "/category/politics" },
        { label: "Technology", href: "/category/technology" },
        { label: "Africa Spotlight", href: "/category/africa" },
        { label: "Markets", href: "/category/markets" },
        { label: "Podcasts", href: "/podcasts" },
    ],
    institutional: [
        { label: "About Us", href: "/about" },
        { label: "Editorial Ethics", href: "/ethics" },
        { label: "Our Authors", href: "/authors" },
        { label: "Press Room", href: "/press" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
        { label: "GDPR", href: "/gdpr" },
    ]
};

export function Footer() {
    return (
        <footer className="mt-auto bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-800">
            <PageContainer maxWidth="lg" paddingX="md">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
                    {/* Col 1: Branding & Manifesto */}
                    <div className="lg:col-span-4 space-y-8">
                        <Logo variant="minimal" className="invert brightness-0 saturate-0 scale-110 origin-left" />
                        <p className="text-zinc-500 text-sm max-w-xs leading-relaxed italic">
                            "Power room journalism for policymakers, institutional investors, and global leaders who drive Africa's emerging markets."
                        </p>
                        <div className="flex gap-5 pt-4">
                            <Icon name="Twitter" size={20} className="text-zinc-600 hover:text-white transition-colors cursor-pointer" />
                            <Icon name="Linkedin" size={20} className="text-zinc-600 hover:text-white transition-colors cursor-pointer" />
                            <Icon name="Youtube" size={20} className="text-zinc-600 hover:text-white transition-colors cursor-pointer" />
                            <Icon name="Facebook" size={20} className="text-zinc-600 hover:text-white transition-colors cursor-pointer" />
                        </div>
                    </div>

                    {/* Col 2: Coverage */}
                    <div className="lg:col-span-2 space-y-6">
                        <Heading level="h4" className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">Coverage</Heading>
                        <nav className="flex flex-col gap-3">
                            {FOOTER_LINKS.coverage.map((link) => (
                                <Link key={link.href} href={link.href} className="text-sm text-zinc-500 hover:text-gold transition-colors italic font-medium">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Col 3: Institutional */}
                    <div className="lg:col-span-2 space-y-6">
                        <Heading level="h4" className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">The Institution</Heading>
                        <nav className="flex flex-col gap-3">
                            {FOOTER_LINKS.institutional.map((link) => (
                                <Link key={link.href} href={link.href} className="text-sm text-zinc-500 hover:text-gold transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Col 4: Newsletter & Access */}
                    <div className="lg:col-span-4 space-y-6">
                        <Heading level="h4" className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold">The Intelligence Report</Heading>
                        <p className="text-xs text-zinc-500 leading-relaxed">Join 50,000+ decision makers receiving our weekly deep-dive on African geopolitical and economic shifts.</p>
                        
                        <div className="relative group pt-4">
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs focus:outline-none focus:border-gold transition-colors"
                            />
                            <button className="absolute right-1 top-5 h-8 px-4 bg-gold text-zinc-950 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:brightness-110 transition-all">
                                JOIN
                            </button>
                        </div>
                        
                        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-10">
                            {FOOTER_LINKS.legal.map((link) => (
                                <Link key={link.href} href={link.href} className="text-[10px] text-zinc-700 hover:text-zinc-400 border-b border-transparent hover:border-zinc-400 transition-all uppercase tracking-widest font-bold">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <Separator className="border-zinc-800 opacity-20 mb-10" />

                <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-600">
                    <span>© {new Date().getFullYear()} EXCLUSIVE AUTHORS GROUP. All Rights Reserved.</span>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>INTEGRITY • CONTEXT • DEPTH</span>
                    </div>
                </div>
            </PageContainer>
        </footer>
    );
}
