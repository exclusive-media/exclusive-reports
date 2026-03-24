"use client";

import { m } from "framer-motion";
import { fadeInUp } from "@/lib/motion/variants/entryVariants";
import { useSafeVariants } from "@/lib/motion/use-reduced-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardFooter, CardHeader } from "@/components/ui/atoms/Layout/Card";
import { Badge } from "@/components/ui/atoms/Metadata/Badge";
import { AuthorMeta } from "@/components/ui/atoms/Metadata/AuthorMeta";
import { Skeleton } from "@/components/ui/atoms/Layout/Skeleton";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { DateStamp } from "@/components/ui/atoms/typography/Datestamp";
import { Dek } from "@/components/ui/atoms/typography/Dek";
import { Icon } from "@/components/ui/atoms/Icons/Icon";

import { differenceInHours, format, isValid } from "date-fns";

export interface ArticleCardProps {
    title: string;
    slug: string;
    dek?: string;
    mainImage?: { url: string; alt?: string; width?: number; height?: number };
    categories?: string[];
    format?: "EX REPORT" | "ANALYSIS" | "FEATURE" | "OPINION" | "POLICY REVIEW" | "GEOPOLITICS";
    author?: { name: string; role?: string; image?: string };
    publishedAt: string | Date;
    readingTime?: number;
    variant?: "vertical" | "featured" | "horizontal" | "minimal";
    isLoading?: boolean;
}

export function ArticleCard({
    title,
    slug,
    dek,
    mainImage,
    categories = [],
    format,
    author,
    publishedAt,
    readingTime,
    variant = "vertical",
    isLoading = false,
}: ArticleCardProps) {
    const variants = useSafeVariants(fadeInUp);

    if (isLoading) {
        return <ArticleCardSkeleton variant={variant} />;
    }

    const isFeatured = variant === "featured";
    const isHorizontal = variant === "horizontal";
    const isMinimal = variant === "minimal";

    const articleSlug = typeof slug === "string" ? slug : (slug as any)?.current;

    // Relative Time Logic
    const publishDate = new Date(publishedAt);
    const hoursAgo = isValid(publishDate) ? differenceInHours(new Date(), publishDate) : null;
    const showRelativeTime = hoursAgo !== null && hoursAgo >= 0 && hoursAgo < 24;
    const timeLabel = showRelativeTime
        ? `${hoursAgo === 0 ? "LESS THAN AN HOUR" : hoursAgo} ${hoursAgo === 1 ? "HOUR" : "HOURS"} AGO`
        : null;

    if (isMinimal) {
        return (
            <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={variants}
                className="group w-full"
            >
                <Link href={`/articles/${articleSlug}`} className="block w-full">
                    <div className="flex flex-col space-y-2 border-none bg-transparent p-0 shadow-none transition-all">
                        {/* Time label (Optional: only if < 24h) */}
                        {timeLabel && (
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/80 group-hover:text-gold transition-colors">
                                {timeLabel}
                            </span>
                        )}

                        <Heading
                            variant="card"
                            className="text-lg md:text-xl font-display italic leading-tight group-hover:text-accent transition-colors line-clamp-3"
                        >
                            {title}
                        </Heading>

                        {dek && (
                            <Dek className="text-xs line-clamp-2 md:line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                                {dek}
                            </Dek>
                        )}

                        {/* Footer: Author & Category */}
                        <div className="flex items-center gap-3 pt-1 text-sm text-muted-foreground">
                            {author && (
                                <span className="font-medium">
                                    By <span className="text-foreground/90 font-bold">{author.name}</span>
                                </span>
                            )}
                            {categories.length > 0 && (
                                <>
                                    <span className="opacity-40">•</span>
                                    <span className="uppercase text-[9px] tracking-widest font-bold text-accent italic">
                                        {categories[0]}
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </Link>
            </m.div>
        );
    }

    return (
        <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={variants}
            className="group h-full"
        >
            <Link href={`/articles/${articleSlug}`} className="block h-full">
                <Card
                    variant={isFeatured ? "featured" : "default"}
                    className={cn(
                        "h-full overflow-hidden border-border/0 bg-card shadow-sm transition-shadow duration-300",
                        "group-hover:shadow-md group-hover:border-accent/30",
                        isHorizontal && "flex flex-row gap-6"
                    )}
                >
                    {/* Image */}
                    {mainImage?.url && (
                        <div
                            className={cn(
                                "relative overflow-hidden shrink-0",
                                isHorizontal ? "w-[40%] min-w-[140px] md:min-w-[200px]" : "w-full",
                                isFeatured ? "aspect-[16/9]" : "aspect-[4/3]"
                            )}
                        >
                            <m.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                                className="h-full w-full"
                            >
                                <Image
                                    src={mainImage.url}
                                    alt={mainImage.alt || title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={isFeatured}
                                />
                            </m.div>
                        </div>
                    )}

                    {/* Content */}
                    <div className={cn("flex flex-col", isHorizontal && "flex-1")}>
                        <CardHeader className={cn("pb-2", isHorizontal && "pt-0")}>
                            <div className="flex flex-wrap items-center gap-2">
                                {/* Time label for other variants if within 24h? User only mentioned it for the new variation, but we could add it to others too. I'll stick to DateStamp for now to maintain existing style. */}
                                {format && (
                                    <div className="flex items-center gap-1.5">
                                        <Icon
                                            name={format === "EX REPORT" ? "Shield" : format === "ANALYSIS" ? "LineChart" : "Feather"}
                                            size={14}
                                            className="text-gold"
                                        />
                                        <Badge animate={false} variant="gold">{format}</Badge>
                                    </div>
                                )}
                                {categories.slice(0, 2).map((cat) => (
                                    <Badge animate={false} key={cat} variant="muted">
                                        {cat}
                                    </Badge>
                                ))}
                            </div>

                            <Heading
                                level={isFeatured ? "h2" : "h3"}
                                variant={isFeatured ? "display" : isHorizontal ? "card" : "section"}
                                className={cn(
                                    "mt-2 line-clamp-2 md:line-clamp-3 group-hover:text-accent transition-colors transition-font-size",
                                    isFeatured && "text-2xl md:text-3xl lg:text-4xl"
                                )}
                            >
                                {title}
                            </Heading>

                            {dek && <Dek className="mt-2 line-clamp-2 md:line-clamp-3">{dek}</Dek>}
                        </CardHeader>

                        <CardFooter className="mt-auto pt-4">
                            <div className="flex flex-wrap items-center justify-between gap-4 w-full">
                                {author && (
                                    <AuthorMeta
                                        name={author.name}
                                        role={author.role}
                                        avatarSrc={author.image}
                                        size={isHorizontal ? "sm" : "md"}
                                    />
                                )}

                                {showRelativeTime ? (
                                    <div className="text-[10px] uppercase tracking-widest font-bold text-accent italic">{timeLabel}</div>
                                ) : (
                                    <DateStamp date={publishedAt} readingTime={readingTime} />
                                )}
                            </div>
                        </CardFooter>
                    </div>
                </Card>
            </Link>
        </m.div>
    );
}

function ArticleCardSkeleton({ variant = "vertical" }: { variant?: string }) {
    const isHorizontal = variant === "horizontal";

    return (
        <Card className={cn("h-full overflow-hidden", isHorizontal && "flex flex-row gap-6")}>
            {/* Image skeleton */}
            <Skeleton
                className={cn(
                    isHorizontal ? "w-1/3 min-w-[160px]" : "w-full",
                    variant === "featured" ? "aspect-[16/9]" : "aspect-[4/3]"
                )}
            />

            <div className={cn("flex flex-col p-6", isHorizontal && "flex-1")}>
                <div className="flex gap-2">
                    <Skeleton variant="text" className="w-20" />
                    <Skeleton variant="text" className="w-16" />
                </div>

                <Skeleton variant="headline" className="mt-3" />
                <Skeleton variant="text" lines={2} className="mt-2" />

                <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Skeleton variant="circle" />
                        <div className="space-y-2">
                            <Skeleton variant="text" className="w-24" />
                            <Skeleton variant="text" className="w-16" />
                        </div>
                    </div>
                    <Skeleton variant="text" className="w-32" />
                </div>
            </div>
        </Card>
    );
}