// src/components/containers/category/CategoryHeroServer.tsx
import { CategoryHero } from "@/components/ui/organisms/CategoryHero";
import type { LayoutType } from "@/components/templates/types";

// Mock Data Source for Local Development Testing
const MOCK_FEATURED_ARTICLE = {
    title: "The Silent Expansion: How Sovereign Wealth Funds Are Redrawing Africa's Infrastructure Map",
    slug: "sovereign-wealth-infrastructure-map",
    dek: "A sweeping analysis of capital deployment revealing that state-backed megafunds out-invested private capital by 3-to-1 over the past quarter.",
    mainImage: {
        url: "https://images.unsplash.com/photo-1541888086225-ece81b9e8a55?q=80&w=2670&auto=format&fit=crop",
        alt: "Construction and Infrastructure",
    },
    categories: ["Investment", "Infrastructure"],
    format: "EX REPORT" as const,
    author: {
        name: "Dr. Amara Osei",
        role: "Senior Infrastructure Editor",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    publishedAt: new Date().toISOString(),
    readingTime: 12,
};

interface CategoryHeroServerProps {
    categoryName: string;
    description?: string;
    layoutType: LayoutType;
}

/**
 * Server Wrapper for CategoryHero Organism
 * 
 * In production, this wrapper will execute Sanity GROQ queries to fetch the
 * specific 'featured story' designated for the current category by the editors.
 */
export async function CategoryHeroServer({ 
    categoryName, 
    description, 
    layoutType 
}: CategoryHeroServerProps) {
    
    // Simulate server-side delay / data fetching
    // const sanityData = await fetchFeaturedArticleForCategory(categorySlug);
    
    // Map the layoutType to the CategoryHero variant
    const getHeroVariant = () => {
        if (layoutType === "SPOTLIGHT") return "spotlight";
        if (layoutType === "INDEX") return "minimal";
        return "standard"; // Default 70/30 split
    };

    return (
        <CategoryHero 
            categoryName={categoryName}
            description={description}
            featuredArticle={MOCK_FEATURED_ARTICLE}
            variant={getHeroVariant()}
        />
    );
}
