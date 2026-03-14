import { OlistIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'summaryList',
    title: 'Summary List',
    type: 'object',
    icon: OlistIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title (optional)',
            type: 'string',
        }),
        defineField({
            name: 'items',
            title: 'List Items',
            type: 'array',
            of: [
                defineField({
                    name: 'item',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'icon',
                            title: 'Icon (emoji or short text)',
                            type: 'string',
                        }),
                        defineField({
                            name: 'text',
                            title: 'Text',
                            type: 'text',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                }),
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            count: 'items.length',
        },
        prepare({ title, count }) {
            return {
                title: title || `Summary List (${count} items)`,
                media: OlistIcon,
            }
        },
    },
})