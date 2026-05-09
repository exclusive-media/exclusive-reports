// src/components/templates/IndexLayout.tsx

import { PageContainer } from "@/components/layouts/PageContainer";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { CategoryHeroServer } from "@/components/containers/category/CategoryHeroServer";
import { SubcategoryHighlightsServer } from "@/components/containers/category/SubcategoryHighlightsServer";
import { LatestCategoryFeedServer } from "@/components/containers/category/LatestCategoryFeedServer";
import { CategoryNewsletterCTA } from "@/components/ui/organisms/CategoryNewsletterCTA";
import { PageHeader } from "@/components/ui/molecules/PageHeader";
import { CategoryPageProps } from "./types";

/**
 * Index Layout
 * 
 * Target Categories: Markets, Data-focused Sub-Categories
 * Style: Clean, minimal, efficient scanning.
 * Notes: Passing layoutType="INDEX" signals the CategoryHeroServer to render the "minimal" 
 * variant, which strips out large images in favor of precise typography and quick utility.
 */
export function IndexLayout({
  categoryName,
  description,
  layoutType,
  slug,
  subcategories,
  articles
}: CategoryPageProps) {
  return (
    <article className="min-h-screen">
      {/* Forbes-style two-phase sticky header with horizontal sub-nav */}
      <PageHeader
        title={categoryName}
        description={description}
        parentSlug={slug}
        subcategories={subcategories}
      />

      {/* Minimal Category Hero */}
      <CategoryHeroServer
        categoryName={categoryName}
        description={description}
        layoutType={layoutType}
      />

      <SectionContainer paddingY="lg">
        <PageContainer maxWidth="lg">
          <SubcategoryHighlightsServer categorySlug="markets" categoryName={categoryName} variant="cards" />

          <div className="mt-16 mb-16">
            <LatestCategoryFeedServer categorySlug={slug} categoryName={categoryName} variant="list" />
          </div>

          <CategoryNewsletterCTA categoryName={categoryName} variant="inline" />
        </PageContainer>
      </SectionContainer>

    </article>
  );
}
