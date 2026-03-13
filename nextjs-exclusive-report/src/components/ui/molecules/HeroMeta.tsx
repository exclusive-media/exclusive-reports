"use client";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/atoms/Layout/Separator";
import { Badge } from "@/components/ui/atoms/Metadata/Badge";
import { AuthorMeta } from "@/components/ui/atoms/Metadata/AuthorMeta";
import { DateStamp } from "@/components/ui/atoms/typography/Datestamp";
import { Text } from "@/components/ui/atoms/typography/Text";

interface HeroMetaProps {
    category?: string;
    format?: "EX REPORT" | "ANALYSIS" | "FEATURE" | "OPINION";
    author?: { name: string; role?: string; image?: string };
    publishedAt: string | Date;
    readingTime?: number;
    size?: "default" | "large" | "compact";
    className?: string;
}

export function HeroMeta({
    category,
    format,
    author,
    publishedAt,
    readingTime,
    size = "default",
    className,
}: HeroMetaProps) {
    const isLarge = size === "large";
    const isCompact = size === "compact";

    return (
        <div
            className={cn(
                "flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted",
                isLarge && "text-base",
                isCompact && "text-xs gap-x-2",
                className
            )}
        >
            {/* Category + Format badges */}
            <div className="flex items-center gap-2 flex-wrap">
                {format && <Badge variant="gold">{format}</Badge>}
                {category && <Badge variant="muted">{category}</Badge>}
            </div>

            {/* Separator dot/line */}
            {(format || category) && (author || publishedAt) && (
                <Separator orientation="vertical" className="h-4 bg-border/50" />
            )}

            {/* Author */}
            {author && (
                <AuthorMeta
                    name={author.name}
                    role={author.role}
                    avatarSrc={author.image}
                    size={isCompact ? "sm" : "md"}
                />
            )}

            {/* Date + Reading time */}
            {(publishedAt || readingTime) && (
                <div className="flex items-center gap-2">
                    {(author || format || category) && (
                        <span className="hidden sm:inline text-muted/50">•</span>
                    )}
                    <DateStamp date={publishedAt} readingTime={readingTime} />
                </div>
            )}
        </div>
    );
}