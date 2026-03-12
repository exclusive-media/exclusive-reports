// sanity/lib/presentation/resolve.ts
import { defineDocuments, defineLocations } from 'sanity/presentation'

export const mainDocuments = defineDocuments([
    {
        route: '/articles/:slug',
        filter: `_type == "article" && slug.current == $slug`,
    },
    {
        route: '/podcasts/:slug',
        filter: `_type == "podcastEpisode" && slug.current == $slug`,
    },
    {
        route: '/category/:slug',
        filter: `_type == "category" && slug.current == $slug`,
    },
])

export const locations = {
    article: defineLocations({
        select: {
            title: 'title',
            slug: 'slug.current',
        },
        resolve: (doc) => doc?.slug ? ({
            locations: [
                {
                    title: doc.title || 'Untitled Article',
                    href: `/articles/${doc.slug}?preview=true`,
                },
            ],
        }) : null,
    }),

    podcastEpisode: defineLocations({
        select: {
            title: 'title',
            slug: 'slug.current',
        },
        resolve: (doc) => doc?.slug ? ({
            locations: [
                {
                    title: doc.title || 'Untitled Episode',
                    href: `/podcasts/${doc.slug}?preview=true`,
                },
            ],
        }) : null,
    }),
}