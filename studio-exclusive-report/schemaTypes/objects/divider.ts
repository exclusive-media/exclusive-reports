import { SplitHorizontalIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'divider',
    title: 'Divider',
    type: 'object',
    icon: SplitHorizontalIcon,
    fields: [
        defineField({
            name: 'style',
            title: 'Style',
            type: 'string',
            options: {
                list: [
                    { title: 'Line', value: 'line' },
                    { title: 'Whitespace', value: 'whitespace' },
                ],
            },
            initialValue: 'line',
        }),
    ],
    preview: { prepare: () => ({ title: '─ Divider ─', media: SplitHorizontalIcon }) },
})