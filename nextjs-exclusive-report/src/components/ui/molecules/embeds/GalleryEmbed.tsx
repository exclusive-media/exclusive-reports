"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlForImage } from "@/sanity/client";
import { Card } from "@/components/ui/atoms/Layout/Card";

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
    if (!images || images.length === 0) return null;

    if (layout === "stacked") {
        return (
            <div className="my-12 space-y-12">
                {images.map((img) => {
                    const imageUrl = urlForImage(img.image);
                    if (!imageUrl) return null;

                    return (
                        <motion.figure
                            key={img._key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
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
                        </motion.figure>
                    );
                })}
            </div>
        );
    }

    if (layout === "grid") {
        return (
            <motion.div
                className="my-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {images.map((img) => {
                        const imageUrl = urlForImage(img);
                        if (!imageUrl) return null;

                        return (
                            <motion.figure
                                key={img._key}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1 }
                                }}
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
                            </motion.figure>
                        );
                    })}
                </div>
            </motion.div>
        );
    }

    // Carousel Layout (Default)
    return (
        <div className="my-12 relative w-full overflow-hidden">
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
        </div>
    );
}
