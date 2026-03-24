// src/components/containers/home/HeroEditorialZoneServer.tsx
// Placeholder — back-end team will implement real fetch + mapping

import { HeroEditorialZone } from "@/components/ui/organism/Home/HeroEditorialZone";
import { heroEditorialZoneMock } from "@/mocks/heroEditorialZone.mock";

export async function HeroEditorialZoneServer() {
    // TODO: Replace with real Sanity fetch
    // const data = await getHomepageHero();
    // const props = mapSanityHeroToProps(data);

    const props = heroEditorialZoneMock; // temporary mock

    if (!props.leadStory) return null;

    return <HeroEditorialZone {...props} />;
}