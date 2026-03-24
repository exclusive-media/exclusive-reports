// src/mocks/businessAndMarkets.mock.ts
import { type BusinessAndMarketsProps } from "@/components/ui/organism/Home/BusinessAndMarkets";

export const businessAndMarketsMock: BusinessAndMarketsProps = {
    featuredStory: {
        title: "Post-Privatization: What’s Next for Ethio Telecom?",
        slug: "post-privatization-ethio-telecom",
        dek: "A deep dive into the valuation and strategic roadmap following the historic partial divestment.",
        mainImage: { url: "/sample.jpg", alt: "Telecom tower" },
        format: "EX REPORT",
        categories: ["INVESTMENT TRENDS"],
        author: { name: "Dr. Alula Tekle" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 8),
        readingTime: 12,
    },
    supportingStories: [
        {
            title: "Green Hydrogen: The Namibia-EU Corridor",
            slug: "green-hydrogen-namibia-eu-corridor",
            dek: "European investment banks commit €2.5bn to massive hydrogen hubs along the coast.",
            format: "ANALYSIS",
            categories: ["ENERGY"],
            author: { name: "Negalign Mequanint" },
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 14),
        },
        {
            title: "BRICS+ Currency: Myth or Market Reality?",
            slug: "brics-currency-myth-reality",
            dek: "How central banks are diversifying reserves ahead of the Johannesburg summit update.",
            format: "ANALYSIS",
            categories: ["FINANCE"],
            author: { name: "Ahmed Baulor" },
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 24),
        }
    ],
    marketWatch: {
        items: [
            { name: "Brent Crude", price: "$84.22", change: "-1.24%", changePercent: "-1.24%" },
            { name: "Gold (Spot)", price: "$2,342.10", change: "+0.45%", changePercent: "+0.45%" },
            { name: "Coffee Arabica", price: "$2.14", change: "+2.88%", changePercent: "+2.88%" },
        ],
        chartImage: {
            url: "/sample.jpg",
            alt: "Market chart",
        },
    },
};