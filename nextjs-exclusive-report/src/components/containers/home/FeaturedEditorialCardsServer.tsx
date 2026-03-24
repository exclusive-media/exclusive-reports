// src/components/containers/homepage/FeaturedEditorialCardsServer.tsx
// Placeholder – Back-end team will replace with real Sanity query + mapper

import { FeaturedEditorialCards } from "@/components/ui/organism/FeaturedEditorialCards";
import { featuredEditorialCardsMock } from "@/mocks/featuredEditorialCards.mock";

export async function FeaturedEditorialCardsServer() {
    // TODO: Replace with real Sanity fetch
    // const data = await getFeaturedEditorialCards();
    // const props = mapSanityFeaturedCards(data);

    const props = featuredEditorialCardsMock;

    return <FeaturedEditorialCards {...props} />;
}