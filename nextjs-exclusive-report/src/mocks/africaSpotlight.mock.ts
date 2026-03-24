// src/mocks/africaSpotlight.mock.ts
import { type AfricaSpotlightProps } from "@/components/ui/organism/Home/AfricaSpotlight";

export const africaSpotlightMock: AfricaSpotlightProps = {
    featuredStory: {
        title: "The Great Green Wall: Reviving Africa’s Landscapes and Livelihoods",
        slug: "great-green-wall-reviving-africa-landscapes",
        dek: "A multi-national initiative stretching from Senegal to Djibouti is transforming degraded land into a mosaic of green and productive landscapes.",
        mainImage: { url: "https://picsum.photos/id/1018/1200/800", alt: "African landscape" },
        format: "EX REPORT",
        categories: ["Sustainability", "Agriculture"],
        author: { name: "Zewdu Kebede" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4),
        readingTime: 14,
    },
    listStories: [
        {
            title: "Fintech Boom: How Lagos Became the Silicon Lagoon",
            slug: "fintech-boom-lagos-silicon-lagoon",
            dek: "Nigerian startups are attracting record-breaking investments and reshaping the continent's financial architecture.",
            mainImage: { url: "https://picsum.photos/id/1016/800/600", alt: "Lagos skyline" },
            categories: ["Technology", "Economy"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
        },
        {
            title: "Nairobi's Geothermal Expansion Powers National Grid",
            slug: "nairobi-geothermal-expansion",
            dek: "Kenya solidifies its position as a global leader in renewable energy with new plant commissionings.",
            categories: ["Energy"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 25),
        },
        {
            title: "Pan-African Trade Pact: Challenges and Milestones",
            slug: "pan-african-trade-pact-challenges",
            dek: "Analyzing the first year of the AfCFTA implementation across key regional hubs.",
            categories: ["Trade", "Policy"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
        },
        {
            title: "Cultural Renaissance: West African Cinema Grabs Global Spotlight",
            slug: "west-african-cinema-global-spotlight",
            dek: "Local storytellers are leveraging streaming platforms to reach international audiences at scale.",
            categories: ["Culture"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 72),
        },
    ],
};
