// src/components/containers/category/LatestCategoryFeedServer.tsx
import { InfiniteNewsFeed } from "@/components/ui/organisms/InfiniteNewsFeed";

// Initial page of articles — fetched server-side as the "above the fold" content.
// Subsequent pages are loaded client-side via the fetchMoreArticles Server Action.
const MOCK_INITIAL_ARTICLES = [
    {
        title: "Central Bank Digital Currencies: The Race for Africa's Financial Future",
        slug: "cbdc-africa-financial-future",
        dek: "As Nigeria revamps the eNaira and South Africa explores wholesale CBDCs, the continent is writing the playbook for sovereign digital money.",
        mainImage: { url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop" },
        categories: ["Fintech", "Policy"],
        format: "ANALYSIS" as const,
        author: { name: "Sarah Mutemi", role: "Financial Correspondent" },
        publishedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
        readingTime: 6,
    },
    {
        title: "The Copper Belt Renaissance: Tech's Hunger for Raw Materials",
        slug: "copper-belt-tech-materials",
        dek: "With global tech giants seeking alternatives to Asian supply chains, the Zambia-DRC copper belt is seeing unprecedented sovereign investment.",
        mainImage: { url: "https://images.unsplash.com/photo-1578589018445-5d1b7027af7e?q=80&w=2670&auto=format&fit=crop" },
        categories: ["Mining", "Global Trade"],
        format: "FEATURE" as const,
        author: { name: "David Ochieng", role: "Markets Editor" },
        publishedAt: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
        readingTime: 8,
    },
    {
        title: "Demographic Dividend or Deficit: Education Spending in the New Decade",
        slug: "education-spending-new-decade",
        dek: "A hard look at exactly how national budgets are preparing to transition the youth boom into an industrialized workforce.",
        mainImage: { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop" },
        categories: ["Demographics", "Policy"],
        author: { name: "Dr. Amara Osei" },
        publishedAt: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
        readingTime: 10,
    },
    {
        title: "Cross-Border Energy Grids: The Power Market's Next Frontier",
        slug: "cross-border-energy-grids",
        dek: "Multi-nation power exchange agreements are finally moving from concept to construction.",
        mainImage: { url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop" },
        categories: ["Energy", "Infrastructure"],
        format: "EX REPORT" as const,
        author: { name: "Elena Rostova" },
        publishedAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
        readingTime: 15,
    },
    {
        title: "AfCFTA at Five: Trade Corridors That Delivered and Those That Didn't",
        slug: "afcfta-five-year-review",
        dek: "A data-driven review of intra-continental freight flows, border wait times, and the corridors that have genuinely lowered barriers since ratification.",
        mainImage: { url: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?q=80&w=2670&auto=format&fit=crop" },
        categories: ["Trade", "Policy"],
        format: "EX REPORT" as const,
        author: { name: "Dr. Amara Osei" },
        publishedAt: new Date(Date.now() - 60 * 60 * 60 * 1000).toISOString(),
        readingTime: 13,
    },
    {
        title: "Private Equity's Pivot: From Consumer Apps to Hard Infrastructure",
        slug: "pe-pivot-hard-infrastructure",
        dek: "After years of deploying capital into e-commerce and mobility, the continent's largest PE shops are rotating back into logistics, ports, and cold-chain.",
        mainImage: { url: "https://images.unsplash.com/photo-1541888086225-ece81b9e8a55?q=80&w=2670&auto=format&fit=crop" },
        categories: ["Investment", "Infrastructure"],
        format: "ANALYSIS" as const,
        author: { name: "Elena Rostova" },
        publishedAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(),
        readingTime: 9,
    },
];

export interface LatestCategoryFeedServerProps {
    categorySlug: string;
    categoryName: string;
    variant?: "grid" | "list";
}

/**
 * Server Wrapper for InfiniteNewsFeed
 * 
 * Pre-fetches the initial page of articles server-side for fast first paint,
 * then hands control to the InfiniteNewsFeed client component which calls
 * the fetchMoreArticles Server Action for subsequent pages.
 */
export async function LatestCategoryFeedServer({ categorySlug, categoryName, variant }: LatestCategoryFeedServerProps) {
    // TODO: Replace with real Sanity fetch when ready:
    // const initialArticles = await fetchLatestCategoryArticles(categorySlug, 1, 6);

    return (
        <InfiniteNewsFeed
            categoryName={categoryName}
            categorySlug={categorySlug}
            initialArticles={MOCK_INITIAL_ARTICLES}
            variant={variant}
        />
    );
}
