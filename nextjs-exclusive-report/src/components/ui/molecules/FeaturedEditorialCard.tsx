// src/components/ui/molecules/FeaturedEditorialCard.tsx
"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Card, CardHeader, CardBody } from "@/components/ui/atoms/Layout/Card";
import { HeroMeta } from "@/components/ui/molecules/HeroMeta";
import { Badge, Heading } from "lucide-react";
import { Dek } from "../atoms/typography/Dek";
import { itemVariants } from "@/lib/motion/variants/containerVariants";

export interface FeaturedEditorialCardProps {
    title: string;
    slug: string;
    dek?: string;
    mainImage?: { url: string; alt?: string };
    format: "EX REPORT" | "FEATURE STORY" | "ANALYSIS";
    category?: string;
    author?: { name: string };
    publishedAt: string | Date;
    readingTime?: number;
}

export function FeaturedEditorialCard(props: FeaturedEditorialCardProps) {
    const { title, slug, dek, mainImage, format, category, author, publishedAt, readingTime } = props;

    return (
        <m.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="group h-full"
        >
            <Link href={`/articles/${slug}`} className="block h-full">
                <Card className="h-full overflow-hidden border-border/30 bg-surface shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-accent/30">
                    {/* Image */}
                    {mainImage?.url && (
                        <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                                src={mainImage.url}
                                alt={mainImage.alt || title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                            />
                        </div>
                    )}

                    <CardHeader className="pt-6 pb-4 px-6">
                        <Badge className="mb-3">
                            {format}
                        </Badge>

                        <Heading className="line-clamp-3 group-hover:text-accent transition-colors">
                            {title}
                        </Heading>

                        {dek && <Dek className="mt-3 line-clamp-2">{dek}</Dek>}
                    </CardHeader>

                    <div className="px-6 pb-6 mt-auto">
                        <HeroMeta
                            category={category}
                            author={author}
                            publishedAt={publishedAt}
                            readingTime={readingTime}
                            size="compact"
                        />
                    </div>
                </Card>
            </Link>
        </m.div>
    );
}