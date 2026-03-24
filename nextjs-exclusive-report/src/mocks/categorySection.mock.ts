// src/mocks/categorySection.mock.ts
import { Article } from "@/sanity/types/article";

export const MOCK_CATEGORY_ARTICLES: any[] = [
    {
        _id: "cat-lead",
        title: "Sovereign Debt and the New Scramble for African Infrastructure",
        slug: "sovereign-debt-infrastructure-africa",
        dek: "How shifting geopolitical alliances are redefining the terms of mega-project financing from the EAC to the SADC region.",
        mainImage: {
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
            alt: "Aerial view of a developing port",
        },
        categories: ["Business", "Policy"],
        format: "ANALYSIS",
        author: { name: "Abinet Tesfaye", image: "https://i.pravatar.cc/150?u=abinet" },
        publishDate: new Date().toISOString(),
        readingTime: 15,
    },
    {
        _id: "cat-2",
        title: "The Rise of Ethiopian Fintech",
        slug: "ethiopian-fintech-rise",
        dek: "Telebirr's expansion and the entry of Safaricom's M-Pesa are creating a new digital economy.",
        mainImage: {
            url: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070",
        },
        categories: ["Business"],
        format: "FEATURE",
        publishDate: new Date().toISOString(),
        readingTime: 8,
    },
    {
        _id: "cat-3",
        title: "Mining Reform in DRC",
        slug: "mining-reform-drc",
        dek: "Kinshasa signals a tougher stance on critical mineral contracts.",
        mainImage: {
            url: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=2070",
        },
        categories: ["Politics"],
        format: "EX REPORT",
        publishDate: new Date().toISOString(),
        readingTime: 20,
    },
    {
        _id: "cat-4",
        title: "Venture Capital Trends",
        slug: "vc-trends-africa-2026",
        dek: "Why seed-stage funding remains resilient despite global headwinds.",
        mainImage: {
            url: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070",
        },
        categories: ["Business"],
        format: "ANALYSIS",
        publishDate: new Date().toISOString(),
        readingTime: 6,
    }
];