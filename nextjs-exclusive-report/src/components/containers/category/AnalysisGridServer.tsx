// src/components/containers/category/AnalysisGridServer.tsx
import { AnalysisGrid } from "@/components/ui/organisms/AnalysisGrid";

const MOCK_ANALYSIS_ARTICLES = [
    {
        title: "The Silent Expansion: Sovereign Wealth Funds Redrawing Infrastructure Maps",
        slug: "sovereign-wealth-infrastructure-analysis",
        dek: "State-backed megafunds out-invested private capital by 3-to-1 over the past quarter, fundamentally shifting long-term African growth engines.",
        mainImage: { url: "https://images.unsplash.com/photo-1541888086225-ece81b9e8a55?q=80&w=2670&auto=format&fit=crop" },
        categories: ["Investment", "Infrastructure"],
        format: "EX REPORT" as const,
        author: { name: "Dr. Amara Osei" },
        publishedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
        readingTime: 14,
    },
    {
        title: "Telecoms Pivot to Bank-Lite Models Ahead of Central Bank Rulings",
        slug: "telecoms-bank-lite-rulings",
        dek: "With new mobile money regulations on the horizon, Africa's telecom majors are divesting physical assets to focus purely on fintech plays.",
        mainImage: { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop" },
        categories: ["Fintech", "Telecom"],
        format: "ANALYSIS" as const,
        author: { name: "Sarah Mutemi" },
        publishedAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
        readingTime: 8,
    },
    {
        title: "Agritech's Series B Drought: Why Investors are Seeking Hard Assets",
        slug: "agritech-series-b-drought",
        dek: "Software-only agricultural startups are facing extreme down-rounds as VC sentiment shifts back to physical value chains and cold-storage logistics.",
        mainImage: { url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2670&auto=format&fit=crop" },
        categories: ["Agriculture", "Venture Capital"],
        format: "ANALYSIS" as const,
        author: { name: "David Ochieng" },
        publishedAt: new Date(Date.now() - 96 * 60 * 60 * 1000).toISOString(),
        readingTime: 11,
    },
    {
        title: "Energy Transition Bonds: Tracking the Green Premium",
        slug: "energy-transition-bonds-premium",
        dek: "Are African states actually seeing yield benefits from issuing green bonds, or is the compliance cost outweighing the spread?",
        mainImage: { url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2670&auto=format&fit=crop" },
        categories: ["Markets", "Energy"],
        format: "OPINION" as const,
        author: { name: "Elena Rostova" },
        publishedAt: new Date(Date.now() - 120 * 60 * 60 * 1000).toISOString(),
        readingTime: 6,
    }
];

export interface AnalysisGridServerProps {
    categoryName: string;
    variant?: "featured-left" | "equal-grid" | "featured-top";
}

/**
 * Server Wrapper for AnalysisGrid
 * Fetches deep-dive analytical content designated for the category.
 */
export async function AnalysisGridServer({ categoryName, variant }: AnalysisGridServerProps) {
    // Simulate server fetch for analysis pieces
    // const analysisArticles = await fetchAnalysisArticles(categoryName);

    return (
        <AnalysisGrid 
            categoryName={categoryName}
            articles={MOCK_ANALYSIS_ARTICLES}
            variant={variant}
        />
    );
}
