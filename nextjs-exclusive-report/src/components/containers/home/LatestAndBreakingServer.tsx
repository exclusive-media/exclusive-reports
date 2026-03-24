// src/components/containers/home/LatestAndBreakingServer.tsx
// Placeholder – Back-end team will implement real Sanity query

import { LatestAndBreaking } from "@/components/ui/organism/Home/LatestAndBreaking";
import { latestAndBreakingMock } from "@/mocks/latestAndBreaking.mock";

export async function LatestAndBreakingServer() {
    // TODO: Replace with real Sanity fetch + mapper
    // const data = await getLatestArticles(6);
    // const props = mapSanityLatestToProps(data);s

    const props = latestAndBreakingMock;

    return <LatestAndBreaking {...props} />;
}