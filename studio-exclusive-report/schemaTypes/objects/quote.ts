import { BlockquoteIcon } from '@sanity/icons'
import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'quote',
    title: 'Pull Quote',
    type: 'object',
    icon: BlockquoteIcon,
    fields: [
        defineField({ name: 'quote', title: 'Quote', type: 'text', validation: (Rule) => Rule.required() }),
        defineField({ name: 'author', title: 'Author', type: 'string' }),
        defineField({ name: 'source', title: 'Source (optional)', type: 'string' }),
    ],
    preview: {
        select: { quote: 'quote', author: 'author' },
        prepare({ quote, author }) {
            return { title: quote?.slice(0, 60) + '...', subtitle: author, media: BlockquoteIcon }
        },
    },
})