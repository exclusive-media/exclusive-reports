// src/mocks/technologyAndInnovation.mock.ts
import { type TechnologyAndInnovationProps } from "@/components/ui/organism/Home/TechnologyAndInnovation";

export const technologyAndInnovationMock: TechnologyAndInnovationProps = {
    featuredStory: {
        title: "Digital ID & The New Social Contract in East Africa",
        slug: "digital-id-new-social-contract-east-africa",
        dek: "How biometric systems are streamlining governance while sparking vital debates on privacy and data sovereignty.",
        mainImage: { url: "/sample.jpg", alt: "Digital ID concept" },
        format: "POLICY REVIEW",
        categories: ["Digital Governance"],
        author: { name: "Dr. Alula Tesfaye" },
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5),
        readingTime: 11,
    },
    supportingStories: [
        {
            title: "Africa’s AI Policy Dilemma Between Growth and Control",
            slug: "africa-ai-policy-dilemma",
            categories: ["AI"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 18),
        },
        {
            title: "Cybersecurity Risks Rise with Digital Infrastructure Expansion",
            slug: "cybersecurity-risks-digital-infrastructure",
            categories: ["Cybersecurity"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 32),
        },
        {
            title: "Telecom Reform Reshapes Market Competition",
            slug: "telecom-reform-market-competition",
            categories: ["Telecom"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
        },
    ],
};