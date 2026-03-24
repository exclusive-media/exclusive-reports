// src/components/containers/homepage/TechnologyAndInnovationServer.tsx
// Placeholder – Back-end team will replace with real Sanity fetch + mapper

import { TechnologyAndInnovation } from "@/components/ui/organism/Home/TechnologyAndInnovation";
import { technologyAndInnovationMock } from "@/mocks/technologyAndinnovation.mock";

export async function TechnologyAndInnovationServer() {
    // TODO: Replace with real Sanity query
    // const data = await getTechnologySection();
    // const props = mapSanityTechnologySectionToProps(data);

    const props = technologyAndInnovationMock;

    return <TechnologyAndInnovation {...props} />;
}