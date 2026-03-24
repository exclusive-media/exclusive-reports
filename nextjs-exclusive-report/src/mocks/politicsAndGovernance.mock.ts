// src/mocks/politicsAndGovernance.mock.ts
import { type PoliticsAndGovernanceProps } from "@/components/ui/organism/Home/PoliticsAndGovernance";

export const politicsAndGovernanceMock: PoliticsAndGovernanceProps = {
    leftColumnStories: [
        {
            title: "Ethiopia activates third turbine at GERD, increasing grid capacity by 15%",
            slug: "ethiopia-gerd-third-turbine",
            categories: ["ENERGY"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
        },
        {
            title: "Red Sea Diplomacy Reshapes Horn of Africa Power Balance",
            slug: "red-sea-diplomacy-horn-power",
            categories: ["GEOPOLITICS"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 7),
        },
        {
            title: "Ethiopia’s Federal Politics Enter a New Phase of Negotiation",
            slug: "ethiopia-federal-politics-negotiation",
            categories: ["GOVERNANCE"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 15),
        },
    ],
    middleFeatured: {
        title: "Digital ID & The New Social Contract in East Africa",
        slug: "digital-id-new-social-contract-east-africa",
        dek: "How biometric systems are streamlining governance while sparking vital debates on privacy and data sovereignty.",
        mainImage: { url: "https://picsum.photos/id/1015/800/600", alt: "Digital ID concept" },
        format: "EX REPORT",
        category: "Digital Governance",
        author: { name: "Dr. Alula Tesfaye" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
        readingTime: 11,
    },
    middleSupporting: [
        {
            title: "The Renaissance Dam: A Multi-Generational Shift in Power",
            slug: "renaissance-dam-multi-generational-shift",
            categories: ["GEOPOLITICS"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 22),
        },
        {
            title: "How Conflict Economics Reshape State Authority",
            slug: "conflict-economics-state-authority",
            categories: ["CONFLICT"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 30),
        },
    ],
};