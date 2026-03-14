"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SummaryItem } from "@/sanity/types/article";
import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Text } from "@/components/ui/atoms/typography/Text";
import { Badge } from "@/components/ui/atoms/Metadata/Badge";
import { Icon } from "@/components/ui/atoms/Icons/Icon";

interface SummaryListEmbedProps {
    title?: string;
    items?: SummaryItem[];
    className?: string;
}

export function SummaryListEmbed({ title, items = [], className }: SummaryListEmbedProps) {
    if (!items || items.length === 0) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={cn(
                "my-12 p-6 sm:p-8 rounded-2xl bg-accent/5 border border-accent/10 shadow-sm relative overflow-hidden",
                className
            )}
        >
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                <Icon name="List" size={160} />
            </div>

            <div className="relative z-10">
                {title && (
                    <Heading
                        level="h3"
                        className="mb-6 pb-4 border-b border-border/40 text-foreground flex items-center gap-3 text-xl"
                    >
                        <Badge variant="gold" className="rounded-md px-2 shadow-sm">
                            <Icon name="Info" size={14} className="mr-1" />
                            Summary
                        </Badge>
                        {title}
                    </Heading>
                )}

                <ul className="space-y-4">
                    {items.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start gap-4"
                        >
                            <div className="flex-shrink-0 mt-0.5">
                                {item.icon ? (
                                    <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center text-sm shadow-sm">
                                        {item.icon}
                                    </div>
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                        <Icon name="Check" size={14} />
                                    </div>
                                )}
                            </div>

                            <Text className="text-neutral-700 dark:text-neutral-300 leading-relaxed pt-1">
                                {item.text}
                            </Text>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
