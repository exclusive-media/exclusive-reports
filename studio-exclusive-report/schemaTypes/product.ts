import { PackageIcon } from '@sanity/icons'

export default {
    name: 'product',
    title: 'Product / Publication',
    type: 'document',
    icon: PackageIcon,
    fields: [
        {
            name: 'title',
            title: 'Product Title',
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
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: { hotspot: true },
        },
        {
            name: 'abstract',
            title: 'Abstract',
            type: 'text',
        },
        {
            name: 'description',
            title: 'Full Description',
            type: 'array',
            of: [{ type: 'block' }],
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'author' }],
        },
        {
            name: 'price',
            title: 'Price (ETB)',
            type: 'number',
        },
        {
            name: 'file',
            title: 'PDF Download',
            type: 'file',
        },
    ],
    preview: {
        select: { title: 'title', media: 'coverImage' },
    },
}