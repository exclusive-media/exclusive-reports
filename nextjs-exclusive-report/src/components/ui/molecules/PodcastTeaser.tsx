"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, CardFooter } from "@/components/ui/atoms/Layout/Card";
import { Skeleton } from "@/components/ui/atoms/Layout/Skeleton";
import { Icon } from "@/components/ui/atoms/Icons/Icon";
import { Badge } from "@/components/ui/atoms/Metadata/Badge";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Text } from "@/components/ui/atoms/typography/Text";
import { DateStamp } from "@/components/ui/atoms/typography/Datestamp";

interface PodcastTeaserProps {
    episodeTitle: string;
    slug: string;
    guestName?: string;
    duration?: string;
    coverImage?: { url: string; alt?: string };
    shortDescription?: string;
    category?: string;
    publishedAt?: string | Date;
    variant?: "grid" | "compact";
    isLoading?: boolean;
}

const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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

    const isCompact = variant === "compact";

    return (
        <motion.div
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
                    <div className={cn("relative overflow-hidden", isCompact ? "w-32 shrink-0" : "w-full")}>
                        <div className={cn("relative aspect-square", isCompact ? "aspect-square" : "aspect-[4/3]")}>
                            {coverImage?.url ? (
                                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-full w-full">
                                    <Image
                                        src={coverImage.url}
                                        alt={coverImage.alt || episodeTitle}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </motion.div>
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
                                    <Icon name="mic" size={14} animated />
                                    <span className="text-xs font-mono">{duration}</span>
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
                            <Text variant="muted" className="mt-1 line-clamp-1 italic">
                                with {guestName}
                            </Text>
                        )}

                        {shortDescription && isCompact && (
                            <Text variant="small" className="mt-2 line-clamp-2 text-muted-foreground">
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
        </motion.div>
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