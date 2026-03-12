import { PlayIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'youtube',
    title: 'YouTube Video',
    type: 'object',
    icon: PlayIcon,
    fields: [
        defineField({
            name: 'url',
            title: 'YouTube URL',
            type: 'url',
            validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }),
        }),
        defineField({
            name: 'title',
            title: 'Video Title (for accessibility)',
            type: 'string',
        }),
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'text',
        }),
    ],
    preview: {
        select: { title: 'title', url: 'url' },
        prepare({ title, url }) {
            return {
                title: title || 'YouTube Video',
                subtitle: url,
                media: PlayIcon,
            }
        },
    },
})