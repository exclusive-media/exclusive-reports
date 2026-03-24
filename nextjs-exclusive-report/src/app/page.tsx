import { CategorySectionBlock } from "@/components/ui/organism/CategorySectionBlock";
import { HomepageHero } from "@/components/ui/organism/Homepagehero";
import { MOCK_CATEGORY_ARTICLES } from "@/mocks/categorySection.mock";
import { MOCK_AD_CONFIG, MOCK_HERO_STORY } from "@/mocks/homepageHero.mock";
import Image from "next/image";
import { HeroEditorialZoneServer } from "@/components/containers/home/HeroEditorialZoneServer";
import { PageContainer } from "@/components/layouts/PageContainer";
import { FeaturedEditorialCardsServer } from "@/components/containers/home/FeaturedEditorialCardsServer";
import { LatestAndBreakingServer } from "@/components/containers/home/LatestAndBreakingServer";
import { BusinessAndMarketsServer } from "@/components/containers/home/BusinessAndMarketsServer";
import { TechnologyAndInnovationServer } from "@/components/containers/home/TechnologyAndInnovationServer";
import { PoliticsAndGovernanceServer } from "@/components/containers/home/PoliticsAndGovernanceServer";
import { AfricaSpotlightServer } from "@/components/containers/home/AfricaSpotlightServer";
import { PodcastSectionServer } from "@/components/containers/home/PodcastSectionServer";
export default function Home() {
  return (
    <>

      <HeroEditorialZoneServer />
      <FeaturedEditorialCardsServer />
      <LatestAndBreakingServer />
      <BusinessAndMarketsServer />
      <TechnologyAndInnovationServer />
      <PoliticsAndGovernanceServer />
      <AfricaSpotlightServer />
      <PodcastSectionServer />
      <HomepageHero
        mainStory={MOCK_HERO_STORY}
        adConfig={MOCK_AD_CONFIG} />
      <CategorySectionBlock
        categoryTitle={MOCK_CATEGORY_ARTICLES[0].title}
        categorySlug={MOCK_CATEGORY_ARTICLES[0].slug}
        articles={MOCK_CATEGORY_ARTICLES} />
    </>
  );
}

