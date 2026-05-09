// src/components/templates/SpotlightLayout.tsx
"use client";

import { PageContainer } from "@/components/layouts/PageContainer";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { CategoryHeroServer } from "@/components/containers/category/CategoryHeroServer";
import { LatestCategoryFeedServer } from "@/components/containers/category/LatestCategoryFeedServer";
import { AnalysisGridServer } from "@/components/containers/category/AnalysisGridServer";
import { CategoryNewsletterCTA } from "@/components/ui/organisms/CategoryNewsletterCTA";
import { PageHeader } from "@/components/ui/molecules/PageHeader";
import { CategoryPageProps } from "./types";

/**
 * Spotlight Layout
 * 
 * Target Categories: Africa Spotlight, Special Impact Reports
 * Style: Visual, centered, immersive "hero-first" experience.
 * Features: A more stylized PageHeader with a focus on imagery and masonry layouts.
 */
export function SpotlightLayout({
  categoryName,
  description,
  layoutType,
  slug,
  subcategories,
  articles
}: CategoryPageProps) {
  return (
    <article className="min-h-screen bg-background-secondary/20">
      {/* Forbes-style two-phase sticky header with horizontal sub-nav */}
      <PageHeader
        title={categoryName}
        description={description}
        parentSlug={slug}
        subcategories={subcategories}
      />

      {/* Immersive Category Hero */}
      {/* Note: Passing layoutType="SPOTLIGHT" to CategoryHeroServer tells it to render the "spotlight" layout variant. */}
      <CategoryHeroServer 
        categoryName={categoryName} 
        description={description} 
        layoutType={layoutType}
      />

      {/* Main Experience Layer */}
      <SectionContainer paddingY="lg">
        <PageContainer maxWidth="lg">
          <div className="space-y-16">
            {/* Spotlight Latest Stories */}
            <LatestCategoryFeedServer categorySlug={slug} categoryName={categoryName} variant="grid" />

            {/* Immersive Cinematic Grid */}
             <div className="pt-12 border-t border-border/20">
                <AnalysisGridServer categoryName={categoryName} variant="equal-grid" />
             </div>
          </div>
        </PageContainer>
      </SectionContainer>
      {/* Support Section: Newsletter or Membership */}
      {/* Deep-dive Newsletter Block Focus */}
      <SectionContainer className="bg-zinc-950 py-24 border-t border-white/5">
        <PageContainer maxWidth="md">
            <CategoryNewsletterCTA categoryName={categoryName} variant="boxed" />
        </PageContainer>
      </SectionContainer>

    </article>
  );
}
