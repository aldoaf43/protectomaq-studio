import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { lucideIconPicker } from 'sanity-plugin-lucide-icon-picker'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'ProtectoMAQ Studio',

  projectId: 'sxzstqgq',
  dataset: 'production',

  plugins: [
    structureTool({ structure }),
    visionTool(),
    lucideIconPicker(),
  ],

  schema: {
    types: schemaTypes,
  },
})
