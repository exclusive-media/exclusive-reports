// src/components/ui/atoms/Logo.tsx
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
    className?: string;
    variant?: "default" | "minimal";
}

export function Logo({ className, variant = "default" }: LogoProps) {
    return (
        <Link href="/" className={cn("inline-block group", className)}>
            <div className="flex flex-col items-center">
                <span className="font-heading italic text-4xl md:text-5xl leading-none transition-colors group-hover:text-gold">
                    EXCLUSIVE
                </span>
                {variant === "default" && (
                    <div className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold text-accent mt-1 opacity-80 group-hover:text-gold transition-colors">
                        Power • Markets • Africa
                    </div>
                )}
            </div>
        </Link>
    );
}
