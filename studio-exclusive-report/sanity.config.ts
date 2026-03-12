import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'

import { schemaTypes } from './schemaTypes'
import deskStructure from './structure/deskStructure'
import { mainDocuments, locations } from './lib/presentation/resolve'

export default defineConfig({
  name: 'default',
  title: 'Exclusive',

  projectId: 'g9r0re28',
  dataset: 'production',

  plugins: [
    structureTool({ structure: deskStructure }),
    visionTool(),
    presentationTool({
      previewUrl: {
        initial: (context) => {
          const { document } = context;
          const slug = (document?.slug as { current?: string })?.current;
          if (document?._type === 'article' && slug) {
            return `/articles/${slug}`
          }
          if (document?._type === 'podcastEpisode' && slug) {
            return `/podcasts/${slug}`
          }
          return process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
        },
        previewMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
      resolve: {
        mainDocuments,
        locations,
      },
      allowOrigins: ['http://localhost:3000', 'http://localhost:*'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})