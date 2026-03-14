'use client'

import { PortableText, PortableTextReactComponents } from '@portabletext/react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, Separator, Alert, Link } from '@heroui/react'
import { urlForImage } from '@/sanity/client'
import { GalleryEmbed } from './ui/molecules/embeds/GalleryEmbed'
import { ImageWithHotspotsEmbed } from './ui/molecules/embeds/ImageWithHotspotsEmbed'
import { StatsEmbed } from './ui/molecules/embeds/StatsEmbed'
import { SummaryListEmbed } from './ui/molecules/embeds/SummaryListEmbed'
import { PromoEmbed } from './ui/molecules/embeds/PromoEmbed'
import { AdPlaceholderEmbed } from './ui/molecules/embeds/AdPlaceholderEmbed'
import { RecommendedReadingEmbed } from './ui/molecules/embeds/RecommendedReadingEmbed'
import { Text } from './ui/atoms/typography/Text'

// HeroUI v3 components we will use for rich rendering
const components: Partial<PortableTextReactComponents> = {
    block: {
        // Default styles + Sharon-style editorial typography
        normal: ({ children }) => <p className="text-base leading-relaxed text-neutral-800 dark:text-neutral-200 mb-6">{children}</p>,
        h1: ({ children }) => <h1 className="text-4xl font-semibold tracking-tight mt-12 mb-6 text-neutral-900 dark:text-white">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-5 text-neutral-900 dark:text-white">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-medium mt-8 mb-4 text-neutral-900 dark:text-white">{children}</h3>,
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary-500 pl-6 italic text-lg my-8 text-neutral-700 dark:text-neutral-300">
                {children}
            </blockquote>
        ),
    },

    // Inline marks
    marks: {
        strong: ({ children }) => <strong className="font-semibold text-neutral-900 dark:text-white">{children}</strong>,
        em: ({ children }) => <em className="italic text-neutral-700 dark:text-neutral-300">{children}</em>,
        link: ({ children, value }) => (
            <Link href={value?.href} className="text-primary-600 hover:text-primary-700 underline decoration-primary-300">
                {children}
            </Link>
        ),
    },

    // Custom object blocks (from the editor enhancements we did)
    types: {
        // 1. Image
        image: ({ value }) => {
            const imageUrl = urlForImage(value)
            if (!imageUrl) return null

            return (
                <motion.figure
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="my-10"
                >
                    <Card className="overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-800">
                        <Image
                            src={imageUrl}
                            alt={value.alt || ''}
                            width={1200}
                            height={675}
                            className="w-full object-cover"
                            priority={false}
                        />
                    </Card>
                    {value.caption && (
                        <figcaption className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-3">
                            {value.caption}
                        </figcaption>
                    )}
                </motion.figure>
            )
        },

        // 2. YouTube
        youtube: ({ value }) => {
            const videoId = value.url?.split('v=')[1] || value.url?.split('/').pop()
            return (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="my-10 aspect-video rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm"
                >
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={value.title || 'YouTube video'}
                        allowFullScreen
                        className="w-full h-full"
                    />
                    {value.caption && <p className="text-center text-sm text-neutral-500 mt-3">{value.caption}</p>}
                </motion.div>
            )
        },

        // 3. Callout / Tip Block
        callout: ({ value }) => {
            const variantMap: Record<string, { color: string }> = {
                info: { color: 'primary' },
                success: { color: 'success' },
                warning: { color: 'warning' },
            }

            const variant = variantMap[value.variant || 'info'] ?? variantMap.info

            return (
                <Text
                    color={variant.color as any}
                    className="text-lg text-neutral-600 dark:text-white border-l-4"
                    title={value.title || undefined}
                >
                    {/* This is the important fix */}
                    <ArticlePortableText value={value.body} className="text-sm prose dark:prose-invert text-neutral-600 dark:text-white" />
                </Text>
            )
        },
        // 4. Pull Quote
        quote: ({ value }) => (
            <motion.blockquote
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="my-12 border-l-4 border-primary-500 pl-8 italic text-xl text-neutral-700 dark:text-neutral-300"
            >
                “{value.quote}”
                {(value.author || value.source) && (
                    <footer className="mt-4 text-base not-italic text-neutral-500 dark:text-neutral-400">
                        — {value.author} {value.source && `, ${value.source}`}
                    </footer>
                )}
            </motion.blockquote>
        ),
        // 5. Divider
        divider: () => <Separator className="my-12" />,

        // 6. Gallery
        gallery: ({ value }) => <GalleryEmbed {...value} />,

        // 7. Image With Hotspots
        imageWithHotspots: ({ value }) => <ImageWithHotspotsEmbed {...value} />,

        // 8. Stats
        stats: ({ value }) => <StatsEmbed {...value} />,

        // 9. Summary List
        summaryList: ({ value }) => <SummaryListEmbed {...value} />,

        // 10. Promo
        promo: ({ value }) => <PromoEmbed {...value} />,

        // 11. Ad Placeholder
        adPlaceholder: ({ value }) => <AdPlaceholderEmbed {...value} />,

        // 12. Recommended Reading
        recommendedReading: ({ value }) => <RecommendedReadingEmbed {...value} />,
    },

    // List styles (HeroUI friendly)
    // List item renderer (required by TypeScript in newer versions)
    listItem: {
        bullet: ({ children }) => <li className="mb-2">{children}</li>,
        number: ({ children }) => <li className="mb-2">{children}</li>,
    },
}

interface Props {
    value: any // the `body` array from Sanity
    className?: string
}

export default function ArticlePortableText({ value, className = '' }: Props) {
    return (
        <div className={`prose prose-neutral dark:prose-invert max-w-none ${className}`}>
            <PortableText value={value} components={components} />
        </div>
    )
}