import { BellIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'adPlaceholder',
    title: 'Ad Placeholder',
    type: 'object',
    icon: BellIcon,
    fields: [
        defineField({
            name: 'height',
            title: 'Height Variant',
            type: 'string',
            options: {
                list: [
                    { title: 'Small (160px)', value: 'small' },
                    { title: 'Medium (300px)', value: 'medium' },
                    { title: 'Large (400px)', value: 'large' },
                ],
            },
            initialValue: 'medium',
        }),
        defineField({
            name: 'label',
            title: 'Label (for internal use)',
            type: 'string',
            initialValue: 'Advertisement',
        }),
    ],
    preview: {
        select: {
            height: 'height',
            label: 'label',
        },
        prepare({ height, label }) {
            return {
                title: `Ad Placeholder (${height})`,
                subtitle: label,
                media: BellIcon,
            }
        },
    },
})