// src/components/ui/molecules/AdPlacement.tsx
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/atoms/Layout/Card";
import { Badge } from "@/components/ui/atoms/Metadata/Badge";
import { Heading } from "@/components/ui/atoms/typography/Heading";

type AdVariant = "box" | "horizontal" | "vertical" | "leaderboard";

interface AdPlacementProps {
    variant?: AdVariant;
    className?: string;
    // Later: real ad props (provider, slotId, etc.)
}

export function AdPlacement({ variant = "box", className }: AdPlacementProps) {
    const sizes = {
        box: "w-full aspect-square md:aspect-auto md:h-[300px]",
        horizontal: "w-full h-[90px] md:h-[120px]",
        vertical: "w-[160px] h-[600px]",
        leaderboard: "w-full h-[250px] md:h-[90px]",
    }[variant];

    const label = {
        box: "SPONSORED CONTENT",
        horizontal: "ADVERTISEMENT",
        vertical: "SKYSCRAPER",
        leaderboard: "LEADERBOARD",
    }[variant];

    return (
        <Card
            className={cn(
                "overflow-hidden bg-accent/5 border border-accent/20 flex flex-col items-center justify-center p-8",
                sizes,
                className
            )}
        >
            <div className="space-y-4 text-center">
                <Badge variant="gold" className="px-3">{label}</Badge>
                <Heading level="h4" variant="card" className="max-w-[180px] mx-auto opacity-40 italic">
                    Exclusive Advertising Space
                </Heading>
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/50">
                    Direct Partnership Inquiries: info@exclusiveauthors.com
                </div>
            </div>
        </Card>
    );
}