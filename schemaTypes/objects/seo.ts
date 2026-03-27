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
      title: 'Meta Título',
      type: 'string',
      description: 'El título que se muestra en los resultados de los motores de búsqueda (máx. 80 caracteres)',
      validation: (Rule) => Rule.max(80).warning('Manténgalo por debajo de 80 caracteres para un mejor SEO'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Descripción',
      type: 'text',
      description: 'El resumen que se muestra en los resultados de los motores de búsqueda (máx. 160 caracteres)',
      validation: (Rule) => Rule.max(160).warning('Manténgalo por debajo de 160 caracteres para un mejor SEO'),
    }),
  ],
})
