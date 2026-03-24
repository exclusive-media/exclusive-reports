"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { m } from "framer-motion";
import { urlForImage } from "@/sanity/client";
import { Card } from "@/components/ui/atoms/Layout/Card";
import { fadeInUp } from "@/lib/motion/variants/entryVariants";
import { staggerContainer } from "@/lib/motion/variants/containerVariants";
import { useSafeVariants } from "@/lib/motion/use-reduced-motion";

interface GalleryImage {
    _key: string;
    image?: any;
    caption?: string;
    alt?: string;
}

interface GalleryEmbedProps {
    images?: GalleryImage[];
    layout?: "carousel" | "grid" | "stacked";
}

export function GalleryEmbed({ images = [], layout = "carousel" }: GalleryEmbedProps) {
    const entry = useSafeVariants(fadeInUp);
    const stagger = useSafeVariants(staggerContainer);
    const itemVariant = useSafeVariants(fadeInUp);

    if (!images || images.length === 0) return null;

    if (layout === "stacked") {
        return (
            <div className="my-12 space-y-12">
                {images.map((img) => {
                    const imageUrl = urlForImage(img.image);
                    if (!imageUrl) return null;

                    return (
                        <m.figure
                            key={img._key}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={entry}
                            className="w-full"
                        >
                            <Card className="overflow-hidden shadow-sm border border-border/40">
                                <Image
                                    src={imageUrl}
                                    alt={img.alt || img.caption || "Gallery image"}
                                    width={1200}
                                    height={675}
                                    className="w-full h-auto object-cover"
                                />
                            </Card>
                            {img.caption && (
                                <figcaption className="text-center text-sm text-muted-foreground mt-3">
                                    {img.caption}
                                </figcaption>
                            )}
                        </m.figure>
                    );
                })}
            </div>
        );
    }

    if (layout === "grid") {
        return (
            <m.div
                className="my-12"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img) => {
                        const imageUrl = urlForImage(img.image || img);
                        if (!imageUrl) return null;

                        return (
                            <m.figure
                                key={img._key}
                                variants={itemVariant}
                                className="w-full"
                            >
                                <Card className="overflow-hidden shadow-sm border border-border/40 h-full group">
                                    <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                                        <Image
                                            src={imageUrl}
                                            alt={img.alt || img.caption || "Gallery image"}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </Card>
                                {img.caption && (
                                    <figcaption className="text-sm text-muted-foreground mt-2 line-clamp-2">
                                        {img.caption}
                                    </figcaption>
                                )}
                            </m.figure>
                        );
                    })}
                </div>
            </m.div>
        );
    }

    // Carousel Layout (Default)
    return (
        <m.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            variants={entry}
            className="my-12 relative w-full overflow-hidden"
        >
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 scrollbar-hide">
                {images.map((img) => {
                    const imageUrl = urlForImage(img.image);
                    if (!imageUrl) return null;

                    return (
                        <figure
                            key={img._key}
                            className="snap-center shrink-0 w-[85%] sm:w-[60%] md:w-[50%]"
                        >
                            <Card className="overflow-hidden shadow-sm border border-border/40 group">
                                <div className="aspect-[4/3] relative overflow-hidden bg-muted">
                                    <Image
                                        src={imageUrl}
                                        alt={img.alt || img.caption || "Gallery image"}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </Card>
                            {img.caption && (
                                <figcaption className="text-sm text-muted-foreground mt-3 line-clamp-2 px-1">
                                    {img.caption}
                                </figcaption>
                            )}
                        </figure>
                    );
                })}
            </div>
            {/* Simple gradient hint for scrollability */}
            <div className="absolute top-0 right-0 bottom-6 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </m.div>
    );
}

