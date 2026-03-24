// src/components/containers/homepage/BusinessAndMarketsServer.tsx
// Placeholder – Back-end team will replace with real Sanity fetch + mapper

import { BusinessAndMarkets } from "@/components/ui/organism/Home/BusinessAndMarkets";
import { businessAndMarketsMock } from "@/mocks/businessAndMarkets.mock";

export async function BusinessAndMarketsServer() {
    // TODO: Replace with real Sanity query
    // const data = await getBusinessSection();
    // const props = mapSanityBusinessSectionToProps(data);

    const props = businessAndMarketsMock;

    return <BusinessAndMarkets {...props} />;
}