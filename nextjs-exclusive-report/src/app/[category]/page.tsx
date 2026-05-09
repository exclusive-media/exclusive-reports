// src/app/[category]/page.tsx
import { notFound } from "next/navigation";
import { StandardEditorialLayout } from "@/components/templates/StandardEditorialLayout";
import { SpotlightLayout } from "@/components/templates/SpotlightLayout";
import { IndexLayout } from "@/components/templates/IndexLayout";
import { CategoryPageProps, LayoutType } from "@/components/templates/types";
import { JSX } from "react";

/**
 * Category Layout Mapper
 *
 * Determines which visual template to use based on the category's layoutType.
 */
const LAYOUT_TEMPLATES: Record<LayoutType, (props: CategoryPageProps) => JSX.Element> = {
  STANDARD: (props) => <StandardEditorialLayout {...props} />,
  SPOTLIGHT: (props) => <SpotlightLayout {...props} />,
  INDEX: (props) => <IndexLayout {...props} />,
};

/**
 * Category Route Mapping Configuration
 *
 * Defines the layout, metadata, and sub-section links for each primary section.
 * Later, this will migrate to a Sanity CMS query.
 */
const CATEGORY_MAP: Record<
  string,
  {
    label: string;
    layout: LayoutType;
    description: string;
    subcategories: { label: string; slug: string }[];
  }
> = {
  business: {
    label: "Business",
    layout: "STANDARD",
    description: "Intelligence on conglomerates, trade routes, and regulatory shifts shaping African growth.",
    subcategories: [
      { label: "Markets", slug: "markets" },
      { label: "Investment", slug: "investment" },
      { label: "Trade", slug: "trade" },
      { label: "Energy", slug: "energy" },
      { label: "Banking", slug: "banking" },
      { label: "Real Estate", slug: "real-estate" },
    ],
  },
  politics: {
    label: "Politics",
    layout: "INDEX",
    description: "Deep-dives into geopolitical maneuvers and policy decisions inside the continent's power rooms.",
    subcategories: [
      { label: "Diplomacy", slug: "diplomacy" },
      { label: "Elections", slug: "elections" },
      { label: "Security", slug: "security" },
      { label: "Geopolitics", slug: "geopolitics" },
      { label: "Policy", slug: "policy" },
    ],
  },
  technology: {
    label: "Technology",
    layout: "STANDARD",
    description: "The digital leap: tracking fintech innovation, connectivity breakthroughs, and the ecosystem's future.",
    subcategories: [
      { label: "Fintech", slug: "fintech" },
      { label: "Startups", slug: "startups" },
      { label: "Infrastructure", slug: "infrastructure" },
      { label: "AI & Data", slug: "ai-data" },
      { label: "Policy", slug: "policy" },
    ],
  },
  africa: {
    label: "Africa",
    layout: "SPOTLIGHT",
    description: "Immersive visual reports on the culture, people, and movements defining modern African identity.",
    subcategories: [
      { label: "Culture", slug: "culture" },
      { label: "Society", slug: "society" },
      { label: "Development", slug: "development" },
      { label: "Climate", slug: "climate" },
      { label: "Sport", slug: "sport" },
    ],
  },
};

/**
 * Category Master Controller
 *
 * Dynamic engine handling all primary category routes.
 * 1. Reads [category] slug from route params.
 * 2. Looks up metadata including subcategory nav links.
 * 3. Selects the visual Layout Template.
 * 4. Renders with typed props.
 */
export default async function CategoryMasterController({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category;

  const config = CATEGORY_MAP[categorySlug.toLowerCase()];
  if (!config) return notFound();

  const pageProps: CategoryPageProps = {
    categoryName: config.label,
    description: config.description,
    slug: categorySlug,
    layoutType: config.layout,
    subcategories: config.subcategories,
    articles: [],
  };

  const SelectedLayout = LAYOUT_TEMPLATES[config.layout] || LAYOUT_TEMPLATES.STANDARD;

  return (
    <main className="pt-20">
      <SelectedLayout {...pageProps} />
    </main>
  );
}
