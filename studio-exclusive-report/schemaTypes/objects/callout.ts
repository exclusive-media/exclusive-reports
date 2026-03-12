import { BugIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'callout',
    title: 'Callout / Tip Block',
    type: 'object',
    icon: BugIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Title (optional)',
            type: 'string',
        }),
        defineField({
            name: 'body',
            title: 'Content',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'variant',
            title: 'Style',
            type: 'string',
            options: {
                list: [
                    { title: 'Info (Blue)', value: 'info' },
                    { title: 'Success (Green)', value: 'success' },
                    { title: 'Warning (Orange)', value: 'warning' },
                ],
            },
            initialValue: 'info',
        }),
    ],
    preview: {
        select: { title: 'title', variant: 'variant' },
        prepare({ title, variant }) {
            return { title: title || `Callout (${variant})`, media: BugIcon }
        },
    },
})