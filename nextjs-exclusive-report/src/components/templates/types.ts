// src/components/templates/types.ts

export type LayoutType = "STANDARD" | "SPOTLIGHT" | "INDEX";

export interface CategoryPageProps {
  /** Canonical name of the category (e.g. "Business") */
  categoryName: string;
  /** Primary description/manifesto of the category */
  description?: string;
  /** Primary Slug for routing */
  slug: string;
  /** Determining layout style */
  layoutType: LayoutType;
  /** Articles to render in the main feed or hero */
  articles: any[]; // Using any for now, to be mapped later
  /** Sub-sections for the sticky PageHeader nav strip */
  subcategories?: { label: string; slug: string }[];
}

