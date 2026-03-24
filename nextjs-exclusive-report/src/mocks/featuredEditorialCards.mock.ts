// src/mocks/featuredEditorialCards.mock.ts
import { type FeaturedEditorialCardsProps } from "@/components/ui/organism/FeaturedEditorialCards";

export const featuredEditorialCardsMock: FeaturedEditorialCardsProps = {
    cards: [
        {
            title: "The Invisible Architect: How Sovereign Funds are Reshaping Cities",
            slug: "sovereign-funds-reshaping-cities",
            dek: "Analysis of the top 10 sovereign funds and their transition from liquid assets to mega-infrastructure projects.",
            mainImage: { url: "/sample.jpg", alt: "Vault corridor" },
            format: "EX REPORT",
            category: "FINANCE",
            author: { name: "Metadel Eshetu" },
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
            readingTime: 14,
        },
        {
            title: "Data as the New Hegemon: The Race for Submarine Cables",
            slug: "data-new-hegemon-submarine-cables",
            dek: "Why the Red Sea floor has become the world's most contested digital real estate for telecommunications giants.",
            mainImage: { url: "/sample.jpg", alt: "Golden data columns" },
            format: "FEATURE STORY",
            category: "TECHNOLOGY",
            author: { name: "Negalign Mequanint" },
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 36),
            readingTime: 11,
        },
        {
            title: "Satellite Diplomacy: The New African Space Agency",
            slug: "satellite-diplomacy-african-space-agency",
            dek: "Intelligence report on the upcoming launch of independent African satellite clusters for telecommunications.",
            mainImage: { url: "/sample.jpg", alt: "Earth from space" },
            format: "ANALYSIS",
            category: "SPACE POLICY",
            author: { name: "Ahmed Baulor" },
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
            readingTime: 8,
        },
    ],
};