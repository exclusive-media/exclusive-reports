// src/components/templates/StandardEditorialLayout.tsx


import { m } from "framer-motion"
import { PageContainer } from "@/components/layouts/PageContainer";
import { TwoColumnSplit } from "@/components/layouts/TwoColumnSplit";
import { SectionContainer } from "@/components/layouts/SectionContainer";
import { CategoryHeroServer } from "@/components/containers/category/CategoryHeroServer";
import { SubcategoryHighlightsServer } from "@/components/containers/category/SubcategoryHighlightsServer";
import { LatestCategoryFeedServer } from "@/components/containers/category/LatestCategoryFeedServer";
import { AnalysisGridServer } from "@/components/containers/category/AnalysisGridServer";
import { TrendingSidebarServer } from "@/components/containers/category/TrendingSidebarServer";
import { CategoryNewsletterCTA } from "@/components/ui/organisms/CategoryNewsletterCTA";
import { SidebarLayout } from "@/components/layouts/SidebarLayout";
import { PageHeader } from "@/components/ui/molecules/PageHeader";
import { CategoryPageProps } from "./types";

/**
 * Standard Editorial Layout
 * 
 * Target Categories: Business, Politics, Markets, Technology
 * Style: Dense, analytical, 70/30 sidebar layout.
 * Features: High-authority PageHeader followed by a dual-column editorial feed.
 */
export function StandardEditorialLayout({
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

      {/* Category Hero & Featured Story */}
      <CategoryHeroServer
        categoryName={categoryName}
        description={description}
        layoutType={layoutType}
      />

      <SectionContainer paddingY="lg">
        <PageContainer maxWidth="lg">
          <SubcategoryHighlightsServer categorySlug="business" categoryName={categoryName} variant="pills" />

          <div className="mt-12">
            <TwoColumnSplit leftWidth="7/10" rightWidth="3/10" gap="xl">
              {/* Main Editorial Feed (70%) */}
              <div className="space-y-16">
                <LatestCategoryFeedServer categorySlug={slug} categoryName={categoryName} variant="grid" />

                <CategoryNewsletterCTA categoryName={categoryName} variant="inline" />

                <AnalysisGridServer categoryName={categoryName} variant="featured-left" />
              </div>

              {/* Institutional Sidebar (30%) */}
              <aside className="hidden lg:block">
                <div className="sticky top-32 space-y-12">
                  <TrendingSidebarServer categoryName={categoryName} variant="numbered" />

                  {/* Secondary Ad Placement Space */}
                  <div className="border border-dashed border-border/40 bg-zinc-50 dark:bg-zinc-900/50 h-[250px] flex items-center justify-center text-center p-6">
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground/60 block">Advertisement</span>
                  </div>
                </div>
              </aside>
            </TwoColumnSplit>
          </div>
        </PageContainer>
      </SectionContainer>
    </article>
  );
}
