// src/mocks/homepageHero.mock.ts
export const MOCK_HERO_STORY = {
    _id: "hero-1",
    title: "The Great Liberalization: Ethiopia's Banking Sector Braces for Foreign Entry",
    slug: "ethiopia-banking-sector-liberalization",
    dek: "As the central bank finalizes directives for foreign lenders, local institutions are racing to digitize and recapitalize. We analyze the winners and losers of the upcoming transition.",
    // Matching your Sanity Query structure
    mainImage: {
        url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070",
        alt: "Modern banking building in Addis Ababa",
    },
    categories: ["Economy", "Policy"],
    format: "EX REPORT",
    author: {
        name: "Elias Gebreselassie",
        role: "Senior Economics Editor",
        image: "https://i.pravatar.cc/150?u=elias"
    },
    publishDate: new Date().toISOString(), // Matches your Sanity Type
    readingTime: 12,
    featured: true,
};

export const MOCK_AD_CONFIG = {
    title: "Annual Market Outlook 2026",
    description: "Download our 120-page deep dive into East African infrastructure and sovereign debt trends.",
    link: "/sales/reports/2026-outlook",
    buttonText: "Access Report"
};