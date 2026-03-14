import { DocumentTextIcon } from '@sanity/icons'

export default {
    name: 'article',
    title: 'Article',
    type: 'document',
    icon: DocumentTextIcon,
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'settings', title: 'Settings & Publishing' },
        { name: 'metadata', title: 'Metadata & Relations' },
    ],
    fields: [
        {
            name: 'title',
            title: 'Headline',
            type: 'string',
            description: 'Main article title',
            validation: (Rule: { required: () => any }) => Rule.required(),
            group: 'content',
        },
        {
            name: 'dek',
            title: 'Dek / Excerpt',
            type: 'text',
            description: 'Short analytical summary (used in cards and meta)',
            validation: (Rule: { max: (arg0: number) => any }) => Rule.max(160),
            group: 'content',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule: { required: () => any }) => Rule.required(),
            group: 'settings',
        },
        {
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Main image for hero and cards (16:9 recommended)',
            group: 'content',
        },
        {
            name: 'body',
            title: 'Article Body',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Caption',
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                        },
                    ],
                },
                { type: 'youtube' },
                { type: 'callout' },
                { type: 'quote' },
                { type: 'divider' },
                { type: 'gallery' },
                { type: 'imageWithHotspots' },
                { type: 'summaryList' },
                { type: 'stats' },
                { type: 'promo' },
                { type: 'adPlaceholder' },
                { type: 'recommendedReading' },



            ],
            group: 'content',
        },
        {
            name: 'category',
            title: 'Main Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (Rule: { required: () => any }) => Rule.required(),
            group: 'settings',
        },
        {
            name: 'subcategory',
            title: 'Subcategory',
            type: 'reference',
            to: [{ type: 'subcategory' }],
            group: 'settings',
        },
        {
            name: 'author',
            title: 'Primary Author',
            type: 'reference',
            to: [{ type: 'author' }],
            validation: (Rule: { required: () => any }) => Rule.required(),
            group: 'settings',
        },
        {
            name: 'publishDate',
            title: 'Publish Date',
            type: 'datetime',
            validation: (Rule: { required: () => any }) => Rule.required(),
            group: 'settings',
        },
        {
            name: 'readingTime',
            title: 'Reading Time (minutes)',
            type: 'number',
            group: 'metadata',
        },
        {
            name: 'format',
            title: 'Content Format',
            type: 'string',
            options: {
                list: ['News', 'Analysis', 'EX Report', 'Feature', 'Opinion'],
            },
            description: 'Shows as label (EX REPORT, ANALYSIS, etc.)',
            group: 'metadata',
        },
        {
            name: 'accessLevel',
            title: 'Access Level',
            type: 'string',
            options: {
                list: ['Free', 'Paid', 'Subscriber Only'],
            },
            group: 'metadata',
        },
        {
            name: 'relatedArticles',
            title: 'Related Articles',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'article' }] }],
            group: 'metadata',
        },
        {
            name: 'featured',
            title: 'Featured on Homepage',
            type: 'boolean',
            group: 'metadata',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'dek',
            media: 'featuredImage',
        },
    },
}