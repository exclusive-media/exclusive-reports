// src/components/ui/atoms/DateStamp.tsx
import { format, isValid } from "date-fns";
import { cn } from "@/lib/utils";

interface DateStampProps {
    date: string | Date;
    readingTime?: number;
    className?: string;
}

export function DateStamp({ date, readingTime, className }: DateStampProps) {
    const d = new Date(date);
    
    if (!isValid(d)) {
        return null; // Don't render anything for invalid dates
    }

    const formattedDate = format(d, "MMM d, yyyy");

    return (
        <div className={cn("flex items-center gap-2 text-sm text-muted", className)}>
            <time dateTime={d.toISOString()}>{formattedDate}</time>
            {readingTime && (
                <>
                    <span aria-hidden="true">•</span>
                    <span>{readingTime} min read</span>
                </>
            )}
        </div>
    );
}