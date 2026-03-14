"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { urlForImage } from "@/sanity/client";
import { Icon } from "@/components/ui/atoms/Icons/Icon";

interface Hotspot {
    _key: string;
    x?: number;
    y?: number;
    tooltip?: string;
}

interface ImageWithHotspotsEmbedProps {
    image?: any;
    hotspots?: Hotspot[];
}

export function ImageWithHotspotsEmbed({ image, hotspots = [] }: ImageWithHotspotsEmbedProps) {
    const [activeKey, setActiveKey] = useState<string | null>(null);

    const imageUrl = urlForImage(image);
    if (!imageUrl) return null;

    return (
        <motion.figure
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="my-12 w-full relative group"
        >
            <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-muted shadow-sm">
                <Image
                    src={imageUrl}
                    alt="Annotated image"
                    width={1200}
                    height={800} // rough aspect ratio fallback
                    className="w-full h-auto object-cover"
                />

                {/* Hotspots Overlay */}
                {hotspots.map((hotspot) => {
                    // Safety check on coords
                    if (hotspot.x === undefined || hotspot.y === undefined) return null;

                    const isActive = activeKey === hotspot._key;

                    return (
                        <div
                            key={hotspot._key}
                            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                        >
                            {/* Custom Tooltip */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-max max-w-xs z-50"
                                    >
                                        <div className="bg-foreground text-background text-sm font-medium px-4 py-2.5 rounded-xl shadow-xl border border-border/20 relative">
                                            {hotspot.tooltip}
                                            {/* Downward pointing triangle/arrow */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-solid border-t-foreground border-t-[8px] border-x-transparent border-x-[8px] border-b-0" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <button
                                onClick={() => setActiveKey(isActive ? null : hotspot._key)}
                                className={cn(
                                    "relative flex items-center justify-center w-8 h-8 rounded-full focus:outline-none transition-transform",
                                    isActive ? "scale-110" : "hover:scale-110"
                                )}
                                aria-label={hotspot.tooltip || "View hotspot details"}
                                aria-expanded={isActive}
                            >
                                {/* Pulsing rings */}
                                <div className="absolute inset-0 rounded-full bg-accent/40 animate-ping opacity-75" />
                                <div className={cn(
                                    "absolute inset-0 rounded-full bg-accent shadow-lg shadow-accent/50 transition-colors border-2 border-background",
                                    isActive ? "bg-accent/80 border-accent/80" : ""
                                )} />

                                {/* Icon center */}
                                <Icon
                                    name={isActive ? "x" : "plus"}
                                    size={14}
                                    className="text-white relative z-10"
                                />
                            </button>
                        </div>
                    );
                })}
            </div>

            {/* Assistive text for screen readers or when JS is disabled */}
            <figcaption className="sr-only">
                Image with interactive hotspots. {hotspots.length > 0 && `Contains ${hotspots.length} annotations.`}
            </figcaption>
        </motion.figure>
    );
}
