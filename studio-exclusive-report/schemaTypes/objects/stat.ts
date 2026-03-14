import { BarChartIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'stats',
    title: 'Stats',
    type: 'object',
    icon: BarChartIcon,
    fields: [
        defineField({
            name: 'items',
            title: 'Statistics',
            type: 'array',
            of: [
                defineField({
                    name: 'stat',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'number',
                            title: 'Number',
                            type: 'string',           // e.g. "87", "2.3M", "42%"
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'suffix',
                            title: 'Suffix (optional)',
                            type: 'string',           // e.g. "%", "M", "Birr", "countries"
                        }),
                    ],
                    preview: {
                        select: {
                            number: 'number',
                            label: 'label',
                            suffix: 'suffix',
                        },
                        prepare({ number, label, suffix }) {
                            return {
                                title: `${number}${suffix ? ' ' + suffix : ''}`,
                                subtitle: label,
                            }
                        },
                    },
                }),
            ],
            validation: (Rule) => Rule.required().min(1).max(6),
        }),
    ],
    preview: {
        select: {
            count: 'items.length',
        },
        prepare({ count }) {
            return {
                title: `Stats Block (${count} items)`,
                media: BarChartIcon,
            }
        },
    },
})