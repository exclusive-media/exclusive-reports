import { PlayIcon } from '@sanity/icons'

export default {
    name: 'podcastEpisode',
    title: 'Podcast Episode',
    type: 'document',
    icon: PlayIcon,
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'settings', title: 'Settings' },
        { name: 'metadata', title: 'Metadata & Relations' },
    ],
    fields: [
        {
            name: 'title',
            title: 'Episode Title',
            type: 'string',
            validation: (Rule: { required: () => any }) => Rule.required(),
            group: 'content',
        },
        {
            name: 'dek',
            title: 'Short Description',
            type: 'text',
            group: 'content',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (Rule: { required: () => any }) => Rule.required(),
            group: 'settings',
        },
        {
            name: 'coverImage',
            title: 'Cover Art',
            type: 'image',
            options: { hotspot: true },
            group: 'content',
        },
        {
            name: 'description',
            title: 'Full Episode Description',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'content',
        },
        {
            name: 'guest',
            title: 'Guest',
            type: 'reference',
            to: [{ type: 'author' }],
            group: 'content',
        },
        {
            name: 'duration',
            title: 'Duration',
            type: 'string',
            description: 'e.g. 42 min',
            group: 'settings',
        },
        {
            name: 'youTubeUrl',
            title: 'YouTube URL',
            type: 'url',
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
            name: 'relatedArticles',
            title: 'Related Articles',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'article' }] }],
            group: 'metadata',
        },
    ],
    preview: {
        select: { title: 'title', subtitle: 'guest.name', media: 'coverImage' },
    },
}