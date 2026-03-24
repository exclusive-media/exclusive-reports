// src/mocks/latestAndBreaking.mock.ts
import { type LatestAndBreakingProps } from "@/components/ui/organism/Home/LatestAndBreaking";

export const latestAndBreakingMock: LatestAndBreakingProps = {
    items: [
        {
            title: "Ethiopia activates third turbine at GERD, increasing grid capacity by 15%",
            slug: "ethiopia-gerd-third-turbine",
            categories: ["ENERGY"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2),
        },
        {
            title: "Yen strengthens as BOJ hints at institutional rate normalization",
            slug: "yen-strengthens-boj-rate",
            categories: ["FINANCE"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 4),
        },
        {
            title: "New maritime corridor proposed between Berbera and Mumbai",
            slug: "new-maritime-corridor-berbera-mumbai",
            categories: ["TRADE"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
        },
        {
            title: "Proposed 'Critical Minerals' framework for AU partnership",
            slug: "critical-minerals-au-framework",
            categories: ["BRUSSELS"],
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 9),
        },
    ],
};