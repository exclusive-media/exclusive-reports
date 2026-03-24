// src/components/containers/home/PodcastSectionServer.tsx
import { PodcastSection } from "@/components/ui/organism/Home/PodcastSection";
import { podcastSectionMock } from "@/mocks/podcastSection.mock";

export async function PodcastSectionServer() {
    // Placeholder for actual data fetching from Sanity
    const props = podcastSectionMock;

    return <PodcastSection {...props} />;
}
