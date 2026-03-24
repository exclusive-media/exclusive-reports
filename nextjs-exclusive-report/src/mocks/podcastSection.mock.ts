// src/mocks/podcastSection.mock.ts
import { type PodcastSectionProps } from "@/components/ui/organism/Home/PodcastSection";

export const podcastSectionMock: PodcastSectionProps = {
    featuredEpisode: {
        episodeTitle: "Trade Policies and the New Economic Order",
        slug: "trade-policies-new-economic-order",
        guestName: "Ambassador Mesfin Ayele",
        duration: "45 MIN",
        coverImage: { url: "https://picsum.photos/id/1019/1200/800", alt: "Trade discussion" },
        shortDescription: "A deep-dive into how Ethiopia's new trade reforms are impacting regional competition and investment flows.",
        category: "DIPLOMACY",
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
    },
    recentEpisodes: [
        {
            episodeTitle: "Fintech Horizons: Sub-Saharan Expansion",
            slug: "fintech-horizons-sub-saharan-expansion",
            guestName: "Sara Berhanu",
            duration: "22 MIN",
            coverImage: { url: "https://picsum.photos/id/1015/400/400", alt: "Fintech" },
            category: "FINANCE",
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 48),
        },
        {
            episodeTitle: "The Cybersecurity Paradox in Emerging Markets",
            slug: "cybersecurity-paradox-emerging-markets",
            guestName: "Dawit Wolde",
            duration: "30 MIN",
            coverImage: { url: "https://picsum.photos/id/1020/400/400", alt: "Cybersecurity" },
            category: "TECH",
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 96),
        },
        {
            episodeTitle: "Reviving Local Manufacturing: A Policy View",
            slug: "reviving-local-manufacturing-policy",
            guestName: "Dr. Hana Tesfaye",
            duration: "38 MIN",
            coverImage: { url: "https://picsum.photos/id/1021/400/400", alt: "Manufacturing" },
            category: "INDUSTRY",
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 120),
        },
    ],
};
