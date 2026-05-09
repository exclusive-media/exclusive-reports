// src/components/containers/category/SubcategoryHighlightsServer.tsx
import { SubcategoryHighlights } from "@/components/ui/organisms/SubcategoryHighlights";

const MOCK_CATEGORIES: Record<string, { label: string, slug: string, description?: string, featuredHeadline?: string }[]> = {
    business: [
        { label: "Markets", slug: "markets", description: "Indices & Equities", featuredHeadline: "Nairobi All-Share hits 14-month peak" },
        { label: "Investment", slug: "investment", description: "FDI & Private Equity", featuredHeadline: "The $4B UAE Infrastructure Fund" },
        { label: "Trade", slug: "trade", description: "AfCFTA & Policy", featuredHeadline: "Border tariffs slashed by 15%" },
        { label: "Energy", slug: "energy", description: "Renewables & Oil", featuredHeadline: "West African Gas Pipeline expansion" },
    ],
    politics: [
        { label: "Diplomacy", slug: "diplomacy", featuredHeadline: "The new Sino-African Accord" },
        { label: "Elections", slug: "elections", featuredHeadline: "Senegal's critical poll" },
        { label: "Security", slug: "security", featuredHeadline: "Sahel realignment" },
        { label: "Geopolitics", slug: "geopolitics", featuredHeadline: "Horn of Africa maritime claims" },
    ]
};

export interface SubcategoryHighlightsServerProps {
    categorySlug: string;
    categoryName: string;
    variant?: "pills" | "cards";
}

/**
 * Server Wrapper for SubcategoryHighlights
 * Fetches the active sub-categories and their latest featured headlines.
 */
export async function SubcategoryHighlightsServer({ categorySlug, categoryName, variant }: SubcategoryHighlightsServerProps) {
    const subcategories = MOCK_CATEGORIES[categorySlug.toLowerCase()] || [];

    return (
        <SubcategoryHighlights 
            categoryName={categoryName}
            parentSlug={categorySlug}
            subcategories={subcategories}
            variant={variant}
        />
    );
}
