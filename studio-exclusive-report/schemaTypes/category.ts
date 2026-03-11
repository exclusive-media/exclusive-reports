import { FolderIcon } from '@sanity/icons'

export default {
    name: 'category',
    title: 'Category',
    type: 'document',
    icon: FolderIcon,
    fields: [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
            description: 'e.g. Business, Politics, Policy, Africa',
            validation: (Rule: { required: () => any }) => Rule.required(),
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
            name: 'description',
            title: 'Category Introduction',
            type: 'text',
            description: 'Short intro paragraph shown on the category page',
            group: 'content',
        },
        {
            name: 'order',
            title: 'Navigation Order',
            type: 'number',
            description: 'Lower number = appears first in main menu',
            group: 'settings',
        },
    ],
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'settings', title: 'Settings' },
    ],
    preview: {
        select: { title: 'title', subtitle: 'slug.current' },
    },
}