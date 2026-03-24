// src/mocks/heroEditorialZone.mock.ts
import { type HeroEditorialZoneProps } from "@/components/ui/organism/Home/HeroEditorialZone";

export const heroEditorialZoneMock: HeroEditorialZoneProps = {
    leadStory: {
        title: "Nigeria's Starsight Secures $15mn Funding to Cut Diesel Dependence",
        slug: "nigerias-starsight-secures-15mn-bil-funding-to-cut-diesel-dependence",
        dek: "A landmark investment aims to accelerate clean energy transition in Africa's largest economy, with implications for regional power markets.",
        mainImage: {
            url: "https://images.unsplash.com/photo-1554224155-6726b3ffbdfe?auto=format&fit=crop&q=80",
            alt: "Fuel station with red container wall and no-diesel sign",
        },
        format: "EX REPORT",
        category: "Business",
        author: { name: "Ahmed Baulor", role: "Energy Correspondent" },
        publishedAt: new Date("2026-03-18"),
        readingTime: 9,
    },
    featuredPodcast: {
        episodeTitle: "Mark Bohlund on Risk Ratings and Reform in Frontier Markets",
        slug: "mark-bohlund-on-risk-ratings-and-reform",
        guestName: "Mark Bohlund",
        duration: "38 min",
        coverImage: {
            url: "https://images.unsplash.com/photo-1501523460185-5b911c0b8f09?auto=format&fit=crop&q=80",
            alt: "Podcast guest portrait",
        },
        category: "Market Conversations",
        publishedAt: new Date("2026-03-17"),
    },
    showAd: true,
};
