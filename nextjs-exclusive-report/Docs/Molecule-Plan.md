**Phase 2: Molecules – Plan Overview**

We're now entering **Phase 2: Molecules** — the reusable combinations of atoms that form meaningful UI blocks (e.g. a full article teaser card with image, headline, dek, badge, author meta, date, and play icon for podcast-related content).

**Guiding Principles for All Molecules**
- Built exclusively from **Group 1–5 atoms** (Heading, Text, Dek, Label, DateStamp, Button, IconButton, Badge, AuthorMeta, ReadingProgress, Card, Separator, Skeleton, Icon, PlayButton).
- TypeScript interfaces for props (matching future Sanity schema: title, slug, excerpt/dek, mainImage, categories, author, publishedAt, readingTime, format: 'EX REPORT' | 'ANALYSIS' | etc.).
- Responsive: mobile-first (stack on small screens, grid/multi-column on md+).
- Framer Motion: subtle scroll reveals (fade-in-up on whileInView), hover lifts on interactive cards, staggerChildren on lists/grids.
- Accessibility: semantic roles, aria-labels, keyboard focus within cards/lists.
- Dark/light mode via ocean theme.
- Performance: Next.js Image for media, lazy loading, no heavy effects.
- SEO: proper heading hierarchy, alt texts, schema-friendly markup where applicable.
- Variants: standard vs featured/large vs compact/horizontal (for homepage vs category grids).
- Infinite scroll / pagination hook readiness (props for isLoading, hasMore).

**Proposed Molecules List (Prioritized for MVP – Homepage + Core Flows)**  
We'll implement in batches (e.g. 4–5 per response), starting with homepage-focused ones. Each has a short description, key atoms used, variants, props outline, and notes.

1. **ArticleCard**  
   - Purpose: Teaser for articles on homepage, category pages, related sidebar.  
   - Variants: standard (vertical), featured (larger image/headline), horizontal (for sidebars/recommendations).  
   - Key atoms: Card, Heading, Dek, Badge (EX REPORT etc.), AuthorMeta, DateStamp, Image (Next.js), PlayButton (if podcast-related tag).  
   - Props: { title, slug, dek, mainImage, categories[], author, publishedAt, readingTime, format, isFeatured? }  
   - Motion: hover lift + scale on image, fade-in on scroll.  
   - Notes: Infinite scroll compatible (last card shows skeleton if loading).
   Skeleton: full card layout with shimmering placeholders for image, 2 title lines, dek line, meta row (badge + author + date)
2. **PodcastTeaser** / **EpisodeCard**  
   - Purpose: Grid item on /podcasts page or homepage teaser.  
   - Variants: grid (square-ish), list (horizontal for related).  
   - Key atoms: Card, Heading (episode title), Text (guest + duration), PlayButton (prominent), Badge (category: Leadership Talks etc.), Icon (mic / calendar).  
   - Props: { episodeTitle, slug, guestName, duration, coverImage, descriptionShort, category, publishedAt, youtubeUrl? }  
   - Motion: play button pulse on hover, card scale + image zoom subtle.  
   - Notes: Inline play trigger → opens modal or navigates to episode detail.
   - Skeleton: cover placeholder, title lines, guest/duration placeholders, play button skeleton
3. **HeroMeta**  
   - Purpose: Article metadata line (category • format • author • date • reading time).  
   - Variants: large (homepage hero), compact (card footer).  
   - Key atoms: Badge/Label, AuthorMeta (small), DateStamp, Separator (dot).  
   - Props: { category, format, author, date, readingTime }  
   - Motion: none (static, but can stagger in parent).  
   - Notes: Used in Article page top and hero section.

4. **NewsletterForm**  
   - Purpose: Signup block (homepage footer, sidebar, article bottom).  
   - Key atoms: Heading, Text, Button (Subscribe), Input (shadcn if needed), Icon (mail).  
   - Variants: inline, stacked, minimal.  
   - Props: { title?, description?, buttonText? } + form handling readiness.  
   - Motion: button hover scale, success state fade-in.  
   - Notes: Placeholder for real form (e.g. Sanity or Mailchimp embed later).

5. **RelatedArticlesList**  
   - Purpose: Sidebar or bottom section "More in this category".  
   - Key atoms: Heading, ArticleCard (horizontal variant), Separator.  
   - Props: { articles: ArticleCardProps[], title? }  
   - Motion: staggerChildren fade-in-up on scroll.  
   - Notes: Grid or vertical list, infinite scroll ready.

6. **ShareButtons**  
   - Purpose: Article share tools (X, email, link copy).  
   - Key atoms: IconButton (with animated icons: share, link, twitter/x), Tooltip (shadcn).  
   - Props: { url, title }  
   - Motion: icon animation on hover/click.  
   - Notes: Web Share API fallback.

**Batch Plan**  
- Batch 1: ArticleCard + PodcastTeaser (core content blocks).  
- Batch 2: HeroMeta + NewsletterForm.  
- Batch 3: RelatedArticlesList + ShareButtons.  
- Later batches (Phase 3 prep): NavLink/Dropdown, CategoryFilterChips, etc.

**Questions for Feedback Before Coding**
1. Priority order — agree with starting ArticleCard & PodcastTeaser? Or swap to NewsletterForm first?
2. Any missing molecule for MVP (e.g. PodcastEpisodeHeader, CategoryIntroBlock)?
3. Variants — enough (standard/featured/horizontal) or add more (e.g. podcast-hero)?
4. Motion level — keep subtle (scale 1.02–1.05 + fade) or reduce further?
5. Props — any specific Sanity fields to prioritize (e.g. tags for "Recommended for You")?

Provide feedback on this plan (approve, tweak, add/remove), then we'll lock it and start coding Batch 1 (full code + updated /dev/atoms or new /dev/molecules preview page).  

Ready when you are — let's make Exclusive feel like the premium Addis newsroom it is.