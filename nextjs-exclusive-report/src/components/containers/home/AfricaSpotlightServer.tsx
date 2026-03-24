// src/components/containers/home/AfricaSpotlightServer.tsx
import { AfricaSpotlight } from "@/components/ui/organism/Home/AfricaSpotlight";
import { africaSpotlightMock } from "@/mocks/africaSpotlight.mock";

export async function AfricaSpotlightServer() {
    // Placeholder for actual data fetching from Sanity
    const props = africaSpotlightMock;

    return <AfricaSpotlight {...props} />;
}
