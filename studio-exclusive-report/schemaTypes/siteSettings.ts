import { CogIcon } from '@sanity/icons'

export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon: CogIcon,
    __experimental_actions: ['update', 'publish'], // singleton – no delete/create
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string',
            description: 'Main brand name (EXCLUSIVE or Micheal News)',
            validation: (Rule: { required: () => any }) => Rule.required(),
            group: 'content',
        },
        {
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: 'Short tagline shown in header (e.g. "Power. Markets. Africa.")',
            group: 'content',
        },
        {
            name: 'aboutShort',
            title: 'About – Short Version',
            type: 'text',
            description: 'Used in footer and meta',
            group: 'content',
        },
        {
            name: 'aboutLong',
            title: 'About – Long Version',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'content',
        },
        {
            name: 'newsletterCopy',
            title: 'Newsletter Call-to-Action Text',
            type: 'text',
            group: 'content',
        },
    ],
    groups: [
        { name: 'content', title: 'Content', default: true },
    ],
    preview: {
        prepare() {
            return { title: 'Site Settings (Global)' }
        },
    },
}