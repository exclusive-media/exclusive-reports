import { LinkIcon } from '@sanity/icons'

export default {
    name: 'socialLink',
    title: 'Social Link',
    type: 'object',
    icon: LinkIcon,
    fields: [
        {
            name: 'platform',
            title: 'Platform',
            type: 'string',
            options: {
                list: ['Twitter', 'LinkedIn', 'Facebook', 'Instagram', 'YouTube'],
            },
            validation: (Rule: { required: () => any }) => Rule.required(),
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
            validation: (Rule: { required: () => { (): any; new(): any; uri: { (arg0: { scheme: string[] }): any; new(): any } } }) => Rule.required().uri({ scheme: ['http', 'https'] }),
        },
    ],
    preview: {
        select: { title: 'platform', subtitle: 'url' },
    },
}