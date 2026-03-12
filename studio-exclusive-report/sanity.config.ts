import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { presentationTool } from 'sanity/presentation'

import { schemaTypes } from './schemaTypes'
import deskStructure from './structure/deskStructure'
import { mainDocuments, locations } from './lib/presentation/resolve'

const previewUrl =
  typeof document === 'undefined'
    ? 'https://exclusive-reports.vercel.app'
    : window.location.hostname === 'localhost'
      ? 'http://localhost:3000'
      : 'https://exclusive-reports.vercel.app'

export default defineConfig({
  name: 'default',
  title: 'Exclusive',

  projectId: 'g9r0re28',
  dataset: 'production',

  plugins: [
    structureTool({ structure: deskStructure }),
    presentationTool({
      previewUrl: {
        // Use dynamically determined local/prod base URL + let resolve handle the slug
        initial: previewUrl,
        previewMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
      resolve: {
        mainDocuments,
        locations,
      },
      allowOrigins: [
        'http://localhost:3000',
        'http://localhost:*',
        'https://exclusive-reports.vercel.app',
      ],
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})