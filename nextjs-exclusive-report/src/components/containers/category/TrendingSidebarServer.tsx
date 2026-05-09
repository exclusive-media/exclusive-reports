// src/components/containers/category/TrendingSidebarServer.tsx
import { TrendingSidebar, type TrendingArticle } from "@/components/ui/organisms/TrendingSidebar";

const MOCK_TRENDING_ARTICLES: TrendingArticle[] = [
    {
        title: "Kenya's Eurobond Buyback: Relieving the Pressure Valve",
        slug: "kenya-eurobond-buyback",
        categories: ["Markets"]
    },
    {
        title: "Dangote Refinery: The Ripple Effect on West African Fuel Imports",
        slug: "dangote-refinery-ripple-effect",
        categories: ["Energy"]
    },
    {
        title: "Silicon Savannah's Next Act: Deep Tech Over E-Commerce",
        slug: "silicon-savannah-deep-tech",
        categories: ["Technology"]
    },
    {
        title: "The Geopolitics of Critical Minerals: A Race for the Copper Belt",
        slug: "geopolitics-critical-minerals",
        categories: ["Policy"]
    },
    {
        title: "Lagos to Kigali: The New African Aviation Routes",
        slug: "new-african-aviation-routes",
        categories: ["Business"]
    }
];

export interface TrendingSidebarServerProps {
    categoryName: string;
    variant?: "numbered" | "compact";
}

/**
 * Server Wrapper for TrendingSidebar
 * Fetches the most read/shared articles dynamically for the given category.
 */
export async function TrendingSidebarServer({ categoryName, variant }: TrendingSidebarServerProps) {
    // Simulate fetching trending data
    // const trendingData = await fetchTrendingArticles(categoryName, 5);

    return (
        <TrendingSidebar 
            categoryName={categoryName}
            articles={MOCK_TRENDING_ARTICLES}
            variant={variant}
        />
    );
}
