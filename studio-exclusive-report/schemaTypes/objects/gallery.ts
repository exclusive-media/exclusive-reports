
// schemas/objects/gallery.ts
import { ImagesIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'gallery',
    title: 'Multiple Images',
    type: 'object',
    icon: ImagesIcon,
    fields: [
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
                defineField({
                    name: 'image',
                    type: 'image',
                    title: 'Image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'caption',
                            title: 'Caption',
                            type: 'string',
                        }),
                        defineField({
                            name: 'alt',
                            title: 'Alt text',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        }),
                    ],
                }),
            ],
            validation: Rule => Rule.required().min(2).max(6).error('Add 2–6 images'),
        }),
        defineField({
            name: 'layout',
            title: 'Display Layout',
            type: 'string',
            options: {
                list: [
                    { title: 'Carousel', value: 'carousel' },
                    { title: 'Grid', value: 'grid' },
                    { title: 'Stacked', value: 'stacked' },
                ],
            },
            initialValue: 'carousel',
        }),
    ],
    preview: {
        select: {
            image0: 'images.0.image',
            count: 'images.length',
        },
        prepare({ image0, count }) {
            return {
                title: `Gallery (${count} images)`,
                media: image0,
            }
        },
    },
})