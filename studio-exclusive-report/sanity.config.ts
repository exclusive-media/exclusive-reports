import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import deskStructure from './structure/deskStructure'   // ← this line was missing
export default defineConfig({
  name: 'default',
  title: 'exclusive-report',

  projectId: 'g9r0re28',
  dataset: 'production',

  plugins: [structureTool(
    { structure: deskStructure }
  ), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
