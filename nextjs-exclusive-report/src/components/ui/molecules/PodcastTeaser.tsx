// src/components/ui/molecules/PodcastTeaser.tsx
"use client";

import { cn } from "@/lib/utils";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/atoms/Layout/Card";
import { Skeleton } from "@/components/ui/atoms/Layout/Skeleton";
import { Icon } from "@/components/ui/atoms/Icons/Icon";
import { Badge } from "@/components/ui/atoms/Metadata/Badge";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Text } from "@/components/ui/atoms/typography/Text";
import { DateStamp } from "@/components/ui/atoms/typography/Datestamp";

export interface PodcastTeaserProps {
    episodeTitle: string;
    slug: string;
    guestName?: string;
    duration?: string;
    coverImage?: { url: string; alt?: string };
    shortDescription?: string;
    category?: string;
    publishedAt?: string | Date;
    variant?: "grid" | "compact" | "featured";
    isLoading?: boolean;
}

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function PodcastFeatured({
    episodeTitle,
    slug,
    guestName,
    duration,
    coverImage,
    shortDescription,
    publishedAt,
}: PodcastTeaserProps) {
    return (
        <m.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative h-full min-h-[440px] overflow-hidden rounded-sm bg-zinc-900 border border-zinc-800/50 shadow-2xl"
        >
            <Link href={`/podcasts/${slug}`} className="block h-full">
                {/* Background Image with Overlay */}
                {coverImage?.url && (
                    <div className="absolute inset-0">
                        <Image
                            src={coverImage.url}
                            alt={coverImage.alt || episodeTitle}
                            fill
                            className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
                    </div>
                )}

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-end p-8 md:p-12 space-y-6">
                    <div className="flex items-center gap-3">
                        <Badge variant="gold" className="bg-gold/20 backdrop-blur-md border-gold/30 text-gold shadow-sm">
                            LATEST EPISODE
                        </Badge>
                        {duration && (
                            <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase">
                                {duration} • AUDIO REPORT
                            </span>
                        )}
                    </div>

                    <div className="space-y-4 max-w-2xl">
                        <Heading
                            level="h2"
                            variant="display"
                            className="text-4xl md:text-5xl lg:text-7xl text-white font-display italic leading-[1] group-hover:text-gold transition-colors"
                        >
                            {episodeTitle}
                        </Heading>
                        {guestName && (
                            <div className="text-xl md:text-2xl text-zinc-400 font-medium italic">
                                with <span className="text-white font-bold">{guestName}</span>
                            </div>
                        )}
                        {shortDescription && (
                            <p className="text-zinc-400 text-base md:text-lg line-clamp-2 mt-4 font-light max-w-xl leading-relaxed">
                                {shortDescription}
                            </p>
                        )}
                    </div>

                    <div className="pt-4 flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-zinc-950 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                            <Icon name="play" size={32} />
                        </div>
                        <div className="hidden md:block flex-1 max-w-[200px]">
                            <div className="h-0.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                <m.div 
                                    className="h-full bg-gold/60"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "35%" }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />
                            </div>
                            <span className="text-[9px] text-zinc-600 mt-2 block tracking-[0.2em] font-bold uppercase">Streaming on Exclusive Audio</span>
                        </div>
                    </div>
                </div>
            </Link>
        </m.div>
    );
}

export function PodcastTeaser({
    episodeTitle,
    slug,
    guestName,
    duration,
    coverImage,
    shortDescription,
    category,
    publishedAt,
    variant = "grid",
    isLoading = false,
}: PodcastTeaserProps) {
    if (isLoading) {
        return <PodcastTeaserSkeleton variant={variant} />;
    }

    if (variant === "featured") {
        return <PodcastFeatured {...{ episodeTitle, slug, guestName, duration, coverImage, shortDescription, category, publishedAt }} />;
    }

    const isCompact = variant === "compact";

    return (
        <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInVariants}
            className="group h-full"
        >
            <Link href={`/podcasts/${slug}`} className="block h-full">
                <Card
                    className={cn(
                        "h-full overflow-hidden border-border/40 bg-card shadow-sm transition-all duration-300",
                        "group-hover:shadow-md group-hover:border-accent/30",
                        isCompact && "flex flex-row gap-4"
                    )}
                >
                    {/* Cover Image with Play overlay */}
                    <div className={cn("relative overflow-hidden", isCompact ? "w-32 shrink-0 md:w-40" : "w-full")}>
                        <div className={cn("relative aspect-square", isCompact ? "aspect-square" : "aspect-[4/3]")}>
                            {coverImage?.url ? (
                                <m.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-full w-full">
                                    <Image
                                        src={coverImage.url}
                                        alt={coverImage.alt || episodeTitle}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </m.div>
                            ) : (
                                <div className="h-full w-full bg-muted flex items-center justify-center">
                                    <Icon name="mic" size={isCompact ? 32 : 48} animated className="text-muted" />
                                </div>
                            )}

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white shadow-lg">
                                    <Icon name="play" animated size={24} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className={cn("flex flex-col p-5", isCompact && "flex-1 justify-center")}>
                        <div className="flex items-center gap-3 mb-2">
                            {category && <Badge variant="muted">{category}</Badge>}
                            {duration && (
                                <div className="flex items-center gap-1.5 text-muted-foreground">
                                    <Icon name="clock" size={14}  />
                                    <span className="text-[10px] font-mono tracking-tighter">{duration}</span>
                                </div>
                            )}
                        </div>

                        <Heading
                            level="h3"
                            variant="card"
                            className="line-clamp-2 group-hover:text-accent transition-colors"
                        >
                            {episodeTitle}
                        </Heading>

                        {guestName && (
                            <Text variant="muted" className="mt-1 line-clamp-1 italic text-xs font-bold">
                                with {guestName}
                            </Text>
                        )}

                        {shortDescription && isCompact && (
                            <Text variant="small" className="mt-2 line-clamp-2 text-muted-foreground opacity-70">
                                {shortDescription}
                            </Text>
                        )}

                        {publishedAt && (
                            <div className="mt-auto pt-3">
                                <DateStamp date={publishedAt} />
                            </div>
                        )}
                    </div>
                </Card>
            </Link>
        </m.div>
    );
}

function PodcastTeaserSkeleton({ variant = "grid" }: { variant?: string }) {
    const isCompact = variant === "compact";

    return (
        <Card className={cn("h-full overflow-hidden", isCompact && "flex flex-row gap-4")}>
            <Skeleton
                className={cn(isCompact ? "w-32 aspect-square shrink-0" : "w-full aspect-[4/3]")}
            />

            <div className={cn("flex flex-col p-5", isCompact && "flex-1 justify-center")}>
                <div className="flex gap-2 mb-2">
                    <Skeleton variant="text" className="w-20" />
                    <Skeleton variant="text" className="w-16" />
                </div>

                <Skeleton variant="headline" className="h-6" />
                <Skeleton variant="text" className="mt-1 w-3/4" />

                {isCompact && <Skeleton variant="text" className="mt-2" />}

                <div className="mt-auto pt-3">
                    <Skeleton variant="text" className="w-32" />
                </div>
            </div>
        </Card>
    );
}