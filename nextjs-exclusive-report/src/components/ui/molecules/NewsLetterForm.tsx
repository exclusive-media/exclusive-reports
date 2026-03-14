"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Input } from "@heroui/react";
import { Loader2 } from "lucide-react";

import { Heading } from "@/components/ui/atoms/typography/Heading";
import { Text } from "@/components/ui/atoms/typography/Text";
import { Button } from "@/components/ui/atoms/buttons/Button";
import { Skeleton } from "@/components/ui/atoms/Layout/Skeleton";

interface NewsletterFormProps {
    title?: string;
    description?: string;
    buttonText?: string;
    successMessage?: string;
    errorMessage?: string;
    className?: string;
}

export function NewsletterForm({
    title = "Stay Informed",
    description = "Get weekly analysis on business, politics, technology, and Africa's transformation.",
    buttonText = "Subscribe",
    successMessage = "Thank you! Check your inbox.",
    errorMessage = "Something went wrong. Please try again.",
    className,
}: NewsletterFormProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        if (email.includes("@")) {
            setStatus("success");
            setEmail("");
        } else {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <div className={cn("w-full max-w-lg mx-auto space-y-8 p-8 rounded-2xl bg-default/5 border border-border/50", className)}>
            <div className="text-center space-y-3">
                <Heading level="h3" variant="section">
                    {title}
                </Heading>
                <Text variant="muted" className="max-w-md mx-auto">{description}</Text>
            </div>

            <AnimatePresence mode="wait">
                {status === "success" ? (
                    <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center p-4 rounded-xl bg-success/10 text-success font-medium border border-success/20"
                    >
                        {successMessage}
                    </motion.div>
                ) : (
                    <motion.div
                        key="form-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-3"
                        >
                            <Input
                                type="email"
                                placeholder="your.email@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                disabled={status === "loading"}
                                className="flex-1"
                                variant="primary"
                                {...({
                                    classNames: {
                                        input: "bg-transparent",
                                        inputWrapper: "border-border/60 hover:border-accent focus-within:border-accent transition-colors h-12"
                                    }
                                } as any)}
                            />

                            <Button
                                type="submit"
                                variant="gold"
                                size="lg"
                                isDisabled={status === "loading"}
                                className="min-w-[140px]"
                            >
                                {status === "loading" ? (
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="h-4 w-4 animate-spin" />
                                        <span>...</span>
                                    </div>
                                ) : (
                                    buttonText
                                )}
                            </Button>
                        </form>

                        {status === "error" && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xs text-danger mt-2 text-center"
                            >
                                {errorMessage}
                            </motion.p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <Text variant="small" className="text-center opacity-40">
                We respect your privacy. Unsubscribe at any time.
            </Text>
        </div>
    );
}

export function NewsletterSkeleton() {
    return (
        <div className="w-full max-w-lg mx-auto space-y-8 p-8 rounded-2xl bg-default/5 border border-border/50 animate-pulse">
            <div className="space-y-3 flex flex-col items-center">
                <Skeleton variant="headline" className="w-48 h-8" />
                <Skeleton variant="text" className="w-full h-4" />
                <Skeleton variant="text" className="w-3/4 h-4" />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
                <Skeleton className="h-12 flex-1 rounded-xl" />
                <Skeleton className="h-12 w-32 rounded-xl" />
            </div>
        </div>
    );
}