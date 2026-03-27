import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'The title shown in search engine results (max 80 chars)',
      validation: (Rule) => Rule.max(80).warning('Keep it under 80 characters for best SEO'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'The summary shown in search engine results (max 160 chars)',
      validation: (Rule) => Rule.max(160).warning('Keep it under 160 characters for best SEO'),
    }),
  ],
})
