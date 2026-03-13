"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconButton } from "@/components/ui/atoms/buttons/IconButton";
import { Icon } from "@/components/ui/atoms/Icons/Icon";
import { Tooltip } from "@heroui/react";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
    url: string;
    title: string;
    description?: string;
    className?: string;
}

export function ShareButtons({
    url,
    title,
    description = "",
    className,
}: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy link", err);
        }
    };

    const shareToX = () => {
        const text = encodeURIComponent(`${title}\n${url}`);
        window.open(`https://x.com/intent/tweet?text=${text}`, "_blank");
    };

    const shareToFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
    };

    return (
        <div className={cn("flex items-center gap-2", className)}>
            <Tooltip content="Share on X" closeDelay={0}>
                <IconButton
                    aria-label="Share on X"
                    onClick={shareToX}
                    className="text-muted hover:text-accent border-transparent hover:bg-accent/5"
                    size="md"
                >
                    <Icon name="Twitter" size={20} />
                </IconButton>
            </Tooltip>

            <Tooltip content="Share on Facebook" closeDelay={0}>
                <IconButton
                    aria-label="Share on Facebook"
                    onClick={shareToFacebook}
                    className="text-muted hover:text-accent border-transparent hover:bg-accent/5"
                    size="md"
                >
                    <Icon name="Facebook" size={20} />
                </IconButton>
            </Tooltip>

            <Tooltip content={copied ? "Copied!" : "Copy Link"} closeDelay={0}>
                <IconButton
                    aria-label="Copy link"
                    onClick={handleCopyLink}
                    className={cn(
                        "text-muted hover:text-accent border-transparent transition-colors",
                        copied && "text-gold bg-gold/5"
                    )}
                    size="md"
                >
                    <AnimatePresence mode="wait">
                        {copied ? (
                            <motion.span
                                key="check"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                            >
                                <Icon name="Check" size={20} className="text-gold" />
                            </motion.span>
                        ) : (
                            <motion.span
                                key="link"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                            >
                                <Icon name="Link" size={20} />
                            </motion.span>
                        )}
                    </AnimatePresence>
                </IconButton>
            </Tooltip>

            <Tooltip content="More sharing options" closeDelay={0}>
                <IconButton
                    aria-label="Native Share"
                    onClick={() => {
                         if (navigator.share) {
                             navigator.share({ title, url }).catch(console.error);
                         } else {
                             handleCopyLink();
                         }
                    }}
                    className="text-muted hover:text-accent border-transparent hover:bg-accent/5 md:hidden"
                    size="md"
                >
                    <Icon name="Share2" size={20} />
                </IconButton>
            </Tooltip>
        </div>
    );
}