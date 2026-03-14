// schemas/objects/imageWithHotspots.ts
import { PinIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'imageWithHotspots',
    title: 'Image with Hotspots',
    type: 'object',
    icon: PinIcon,
    fields: [
        defineField({
            name: 'image',
            title: 'Main Image',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'hotspots',
            title: 'Hotspots',
            type: 'array',
            of: [
                defineField({
                    name: 'hotspot',
                    title: 'Hotspot',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'x',
                            title: 'X position (%)',
                            type: 'number',
                            validation: Rule => Rule.required().min(0).max(100),
                        }),
                        defineField({
                            name: 'y',
                            title: 'Y position (%)',
                            type: 'number',
                            validation: Rule => Rule.required().min(0).max(100),
                        }),
                        defineField({
                            name: 'tooltip',
                            title: 'Tooltip / Label',
                            type: 'text',
                            validation: Rule => Rule.required(),
                        }),
                    ],
                    preview: {
                        select: {
                            x: 'x',
                            y: 'y',
                            tooltip: 'tooltip',
                        },
                        prepare({ x, y, tooltip }) {
                            return {
                                title: tooltip?.substring(0, 30) || 'Hotspot',
                                subtitle: `x: ${x}%, y: ${y}%`,
                            }
                        },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: {
            image: 'image',
            count: 'hotspots.length',
        },
        prepare({ image, count }) {
            return {
                title: `Annotated Image (${count} hotspots)`,
                media: image,
            }
        },
    },
})