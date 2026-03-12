import { UserIcon } from '@sanity/icons'

export default {
    name: 'author',
    title: 'Author / Guest',
    type: 'document',
    icon: UserIcon,
    fields: [
        {
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (Rule: { required: () => any }) => Rule.required(),
            group: 'content',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' },
            validation: (Rule: { required: () => any }) => Rule.required(),
            group: 'settings',
        },
        {
            name: 'image',
            title: 'Profile Photo',
            type: 'image',
            options: { hotspot: true },
            group: 'content',
        },
        {
            name: 'bio',
            title: 'Bio',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'content',
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string',
            options: {
                list: ['Editor', 'Contributor', 'Podcast Producer',
                    'Managing Editor', 'Deputy Editor', 'Business Editor',
                    'Political Editor', 'Analyst', 'Author', 'Researcher'],
            },
            group: 'content',
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [{ type: 'socialLink' }],
            group: 'content',
            fieldset: 'social',
        },
    ],
    fieldsets: [
        { name: 'social', title: 'Social Media Links' },
    ],
    groups: [
        { name: 'content', title: 'Content', default: true },
        { name: 'settings', title: 'Settings' },
    ],
    preview: {
        select: { title: 'name', media: 'image', role: 'role' },
        prepare({ title, media, role }: { title: string, media: any, role: string }) {
            return { title, subtitle: role, media }
        },
    },
}