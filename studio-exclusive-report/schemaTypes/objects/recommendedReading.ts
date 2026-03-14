import { BookIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'recommendedReading',
    title: 'Recommended Reading',
    type: 'object',
    icon: BookIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Recommended Reading',
        }),
        defineField({
            name: 'articles',
            title: 'Articles',
            type: 'array',
            of: [
                defineField({
                    type: 'reference',
                    to: [{ type: 'article' }],
                    name: 'article'
                }),
            ],
            validation: (Rule) => Rule.required().min(1).max(5),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            count: 'articles.length',
        },
        prepare({ title, count }) {
            return {
                title: title || `Recommended Reading (${count} articles)`,
                media: BookIcon,
            }
        },
    },
})