// src/components/containers/homepage/PoliticsAndGovernanceServer.tsx
// Placeholder – Back-end team will replace with real Sanity fetch + mapper

import { PoliticsAndGovernance } from "@/components/ui/organism/Home/PoliticsAndGovernance";
import { politicsAndGovernanceMock } from "@/mocks/politicsAndGovernance.mock";

export async function PoliticsAndGovernanceServer() {
    // TODO: Replace with real Sanity query
    // const data = await getPoliticsSection();
    // const props = mapSanityPoliticsSectionToProps(data);

    const props = politicsAndGovernanceMock;

    return <PoliticsAndGovernance {...props} />;
}