import { TagIcon } from '@sanity/icons'

export default {
    name: 'subcategory',
    title: 'Subcategory',
    type: 'document',
    icon: TagIcon,
    fields: [
        {
            name: 'title',
            title: 'Subcategory Title',
            type: 'string',
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
        {
            name: 'parent',
            title: 'Parent Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
    ],
    preview: {
        select: { title: 'title', subtitle: 'parent.title' },
        prepare({ title, subtitle }: { title: string, subtitle: string }) {
            return { title, subtitle: `under ${subtitle}` }
        },
    },
}