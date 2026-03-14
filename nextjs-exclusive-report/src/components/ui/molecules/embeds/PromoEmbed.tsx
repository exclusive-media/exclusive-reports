"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlForImage } from "@/sanity/client";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Text } from "@/components/ui/atoms/typography/Text";
import { Button } from "@heroui/react";
import { Icon } from "@/components/ui/atoms/Icons/Icon";
import Link from "next/link";
import { PromoBlock } from "@/sanity/types/article";

export function PromoEmbed({ title, description, image, link, buttonText, variant = 'primary' }: PromoBlock) {
    const imageUrl = image ? urlForImage(image) : null;

    const isPrimary = variant === 'primary';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={cn(
                "my-12 overflow-hidden rounded-2xl border shadow-sm transition-shadow hover:shadow-md",
                isPrimary 
                    ? "bg-accent/5 border-accent/20" 
                    : "bg-muted/30 border-border"
            )}
        >
            <div className={cn(
                "flex flex-col",
                imageUrl ? "md:flex-row items-center" : "items-center text-center p-8 sm:p-12"
            )}>
                <div className={cn(
                    "flex-1 flex flex-col justify-center",
                    imageUrl ? "p-8 sm:p-10 order-2 md:order-1" : "max-w-2xl mx-auto items-center"
                )}>
                    {/* Optional flair */}
                    <div className={cn(
                        "inline-flex items-center justify-center w-12 h-12 rounded-full mb-6",
                        isPrimary ? "bg-accent/10 text-accent" : "bg-background border shadow-sm text-foreground"
                    )}>
                        <Icon name="Mic" size={24} />
                    </div>

                    <Heading 
                        level="h3" 
                        className={cn("mb-3 text-2xl md:text-3xl", isPrimary ? "text-accent font-bold" : "text-foreground")}
                    >
                        {title}
                    </Heading>
                    
                    {description && (
                         <Text className="text-muted-foreground mb-8 text-lg">
                            {description}
                         </Text>
                    )}

                    <Link href={link || "#"} className="w-full sm:w-auto block">
                        <Button
                            size="lg"
                            className={cn(
                                "font-semibold tracking-wide w-full flex items-center justify-center gap-2",
                                isPrimary ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20" : "bg-transparent border-2 border-foreground/20 text-foreground hover:bg-muted"
                            )}
                        >
                            {buttonText}
                            <Icon name="ArrowRight" size={18} />
                        </Button>
                    </Link>
                </div>

                {imageUrl && (
                    <div className="w-full md:w-2/5 aspect-[16/9] md:aspect-auto md:h-full relative overflow-hidden order-1 md:order-2 bg-muted min-h-[250px]">
                        <Image
                            src={imageUrl}
                            alt={title || "Promo"}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
            </div>
        </motion.div>
    );
}
