export default {
    name: 'tag',
    title: 'Tag',
    type: 'document',
    fields: [
        { name: 'name', type: 'string', validation: (Rule: { required: () => any; }) => Rule.required() },
        { name: 'slug', type: 'slug', options: { source: 'name' } },
    ],
}