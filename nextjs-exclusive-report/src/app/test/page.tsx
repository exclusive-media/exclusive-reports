// app/test/page.tsx — Atom preview page for design system verification
import { Button } from '@/components/ui/atoms/buttons/Button';
import { IconButton } from '@/components/ui/atoms/buttons/IconButton';
import { SubscribeButton } from '@/components/ui/atoms/buttons/SubscribeButton';
import { DateStamp } from '@/components/ui/atoms/typography/Datestamp';
import { Dek } from '@/components/ui/atoms/typography/Dek';
import { Heading } from '@/components/ui/atoms/typography/Heading';
import { Label } from '@/components/ui/atoms/typography/Label';
import { Text } from '@/components/ui/atoms/typography/Text';
import { Card, CardFooter } from '@/components/ui/atoms/Layout/Card';
import { Separator } from '@/components/ui/atoms/Layout/Separator';
import { Skeleton } from '@/components/ui/atoms/Layout/Skeleton';
import { Icon } from '@/components/ui/atoms/Icons/Icon';

import { Badge } from '@/components/ui/atoms/Metadata/Badge';
import { AuthorMeta } from '@/components/ui/atoms/Metadata/AuthorMeta';

import { ArticleCard } from '@/components/ui/molecules/ArticleCard';
import { PodcastTeaser } from '@/components/ui/molecules/PodcastTeaser';
import { HeroMeta } from '@/components/ui/molecules/HeroMeta';
import { NewsletterForm } from '@/components/ui/molecules/NewsLetterForm';
import { ShareButtons } from '@/components/ui/molecules/ShareButtons';
import { RelatedArticlesList } from '@/components/ui/molecules/RelatedArticlesList';

export default function Preview() {
    const sampleArticles = [
        {
            title: "The Geopolitics of the Red Sea: Ethiopia's Strategic Pivot",
            slug: "geopolitics-red-sea",
            dek: "A deep dive into the shifting alliances and maritime security implications.",
            format: "EX REPORT" as const,
            categories: ['Geopolitics'],
            author: { name: 'Elias Malede' },
            publishedAt: new Date(),
            readingTime: 12,
            mainImage: { url: 'https://images.unsplash.com/photo-1516733213501-8664157d6928?q=80&w=2070' }
        },
        {
            title: "Coffee Exports Jump 20% in Q3",
            slug: "coffee-exports-q3",
            format: "ANALYSIS" as const,
            categories: ['Economy'],
            author: { name: 'Sara Tekle' },
            publishedAt: new Date(),
            readingTime: 4,
            mainImage: { url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070' }
        },
        {
            title: "Digital ID Rollout: What You Need to Know",
            slug: "digital-id",
            format: "FEATURE" as const,
            categories: ['Tech'],
            publishedAt: new Date(),
            readingTime: 6,
            mainImage: { url: 'https://images.unsplash.com/photo-1526304640581-d334cd0bfaf5?q=80&w=2070' }
        }
    ];

    return (
        <div className="container mx-auto py-24 px-4 space-y-32 max-w-6xl">

            {/* ── PHASE 1: ATOMS ── */}

            <section className="space-y-12">
                <div className="space-y-4">
                    <Badge variant="gold" className="mb-4">Phase 1 — Atoms</Badge>
                    <Heading level="h1" variant="display">Typography & Labels</Heading>
                    <Text variant="lead">The fundamental building blocks of our editorial voice.</Text>
                </div>
                <div className="mt-8 space-y-8 border-t border-border pt-8">
                    <div className="space-y-4">
                        <Heading level="h1">Main Headline — Exclusive Report</Heading>
                        <Dek>This is a refined dek / subtitle with elegant italic serif — ideal for article intros.</Dek>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-4">
                            <Heading level="h2" variant="section">Section Title</Heading>
                            <Text variant="lead">Lead paragraph text. Sets the tone for long-form analysis pieces.</Text>
                            <Text>Regular body text with excellent readability. Used throughout article content for comfortable long reads.</Text>
                        </div>
                        <div className="space-y-4">
                            <Heading level="h3" variant="card">Metadata & Status</Heading>
                            <div className="flex flex-wrap items-center gap-3">
                                <Badge variant="gold">EX REPORT</Badge>
                                <Badge variant="muted">Analysis</Badge>
                                <Badge variant="soft">7 min read</Badge>
                            </div>
                            <AuthorMeta
                                name="Elias Malede"
                                role="Chief Editor, Addis Ababa"
                            />
                            <DateStamp date={new Date()} readingTime={12} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-y-12">
                <Heading level="h1" variant="display">Icons & Micro-animations</Heading>
                <div className="mt-8 border-t border-border pt-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        <div className="space-y-4">
                            <Label>Animated (Hover)</Label>
                            <div className="flex gap-6 items-center">
                                <div className="text-accent hover:text-accent-foreground transition-colors">
                                    <Icon name="play" animated size={32} />
                                </div>
                                <div className="text-secondary">
                                    <Icon name="mic" animated size={32} />
                                </div>
                                <div className="text-gold">
                                    <Icon name="bookmark" animated size={32} />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Label>Static Lucide</Label>
                            <div className="flex gap-6 items-center">
                                <Icon name="Newspaper" size={24} className="text-muted" />
                                <Icon name="Globe" size={24} className="text-accent" />
                                <Icon name="Shield" size={24} className="text-gold" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Label>Large Brand Icons</Label>
                            <div className="flex gap-6 items-center">
                                <Icon name="Zap" size={48} className="text-gold fill-gold/10" />
                                <Icon name="Flame" size={48} className="text-accent fill-accent/10" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <Label>Metadata UI</Label>
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-gold">
                                    <Icon name="Shield" size={14} className="fill-gold/10" /> EX REPORT
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-muted">
                                    <Icon name="Clock" size={14} animated /> 12 MIN
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-muted">
                                    <Icon name="Eye" size={14} /> 1.2K
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PHASE 2: MOLECULES ── */}
            <Separator variant="editorial" />

            <section className="space-y-32">
                <div className="space-y-4 text-center max-w-2xl mx-auto">
                    <Badge variant="gold">Phase 2 — Molecules</Badge>
                    <Heading level="h1" variant="display">Content Molecules</Heading>
                    <Text variant="lead">Complex, reusable structures built from our foundation atoms.</Text>
                </div>

                {/* Article Cards Grid */}
                <div className="space-y-12">
                    <Heading level="h2" variant="section">ArticleCard & Podcast Elements</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-8">
                            <ArticleCard
                                variant="featured"
                                {...sampleArticles[0]}
                            />
                        </div>
                        <div className="md:col-span-4 flex flex-col gap-8">
                            <ArticleCard {...sampleArticles[1]} />
                            <ArticleCard {...sampleArticles[2]} />
                        </div>
                    </div>
                </div>

                {/* Podcast & Compact Variants */}
                <div className="space-y-12">
                    <Heading level="h2" variant="section">Podcasts & Lists</Heading>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-4">
                            <PodcastTeaser
                                episodeTitle="The Future of Addis Tech Hub"
                                slug="addis-tech-hub"
                                guestName="Bethelhem Dessie"
                                duration="42 mins"
                                category="Innovation"
                                publishedAt={new Date()}
                                coverImage={{ url: 'https://images.unsplash.com/photo-1478737270239-2fccd2c08ac5?q=80&w=2070' }}
                            />
                        </div>
                        <div className="lg:col-span-8">
                            <RelatedArticlesList
                                title="Trending Headlines"
                                variant="compact"
                                articles={[...sampleArticles, ...sampleArticles]}
                                maxItems={4}
                            />
                        </div>
                    </div>
                </div>

                {/* Utility Molecules */}
                <div className="space-y-16">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-3">
                                <Heading level="h2" variant="section">Hero & Post Meta</Heading>
                                <Text variant="muted">Universal metadata lines for article headers and archives.</Text>
                            </div>
                            <div className="space-y-6 bg-default/5 p-6 rounded-2xl border border-border/40">
                                <div className="space-y-2">
                                    <Label>Default / Large Hero</Label>
                                    <HeroMeta
                                        size="large"
                                        format="EX REPORT"
                                        category="Geopolitics"
                                        author={{ name: 'Elias Malede', image: '/avatars/elias.jpg' }}
                                        publishedAt={new Date()}
                                        readingTime={12}
                                    />
                                </div>
                                <Separator />
                                <div className="space-y-2">
                                    <Label>Compact / Feed</Label>
                                    <HeroMeta
                                        size="compact"
                                        category="Economy"
                                        publishedAt={new Date()}
                                        readingTime={5}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3 pt-8">
                                <Heading level="h2" variant="section">Social Engagement</Heading>
                                <div className="flex items-center justify-between bg-default/5 p-6 rounded-2xl border border-border/40">
                                    <Text className="font-medium">Share this article</Text>
                                    <ShareButtons
                                        url="https://exclusive-report.com/articles/geopolitics"
                                        title="The Geopolitics of the Red Sea"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-3">
                                <Heading level="h2" variant="section">Newsletter Capture</Heading>
                                <Text variant="muted">High-converting signup block for article footers and sidebar.</Text>
                            </div>
                            <NewsletterForm />
                        </div>
                    </div>
                </div>

                <div className="space-y-12">
                    <Heading level="h2" variant="section">Related Content Grids</Heading>
                    <RelatedArticlesList
                        variant="grid"
                        articles={[...sampleArticles, ...sampleArticles, ...sampleArticles]}
                    />
                </div>

                {/* Loading States */}
                <div className="space-y-12">
                    <Heading level="h2" variant="section">Molecule Loading States</Heading>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ArticleCard isLoading title={''} slug={''} publishedAt={''} />
                        <PodcastTeaser isLoading variant="grid" episodeTitle={''} slug={''} />
                        <ArticleCard isLoading variant="horizontal" title={''} slug={''} publishedAt={''} />
                    </div>
                </div>
            </section>
        </div>
    );
}