import { MicrophoneIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'promo',
    title: 'Promo',
    type: 'object',
    icon: MicrophoneIcon,
    fields: [
        defineField({
            name: 'title',
            title: 'Promo Title',
            type: 'string',
            description: 'E.g. "Get the full EX Report"',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Short promotional text',
            validation: (Rule) => Rule.max(160),
        }),
        defineField({
            name: 'image',
            title: 'Promo Image (optional)',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'link',
            title: 'Link / CTA URL',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
            initialValue: 'Learn More',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'variant',
            title: 'Style Variant',
            type: 'string',
            options: {
                list: [
                    { title: 'Primary (Gold/Accent)', value: 'primary' },
                    { title: 'Secondary (Subtle)', value: 'secondary' },
                ],
            },
            initialValue: 'primary',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            button: 'buttonText',
            image: 'image',
        },
        prepare({ title, button, image }) {
            return {
                title: title || 'Promo Block',
                subtitle: button ? `→ ${button}` : '',
                media: image,
            }
        },
    },
})