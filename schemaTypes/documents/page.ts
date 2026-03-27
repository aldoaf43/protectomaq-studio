import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Páginas',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la Página (Interno)',
      description: 'Este título es solo para referencia interna en Sanity.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      description: 'La parte de la URL (ej: /seguros).',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.skip()
    }),
    defineField({
      name: 'seo',
      title: 'SEO (Meta Título y Descripción)',
      type: 'seo',
    }),
    defineField({
      name: 'formDialog',
      title: 'Formulario',
      type: 'form',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'sections',
      title: 'Secciones de la Página',
      type: 'array',
      description: 'Añade y organiza las secciones para construir tu página de destino.',
      of: [
        defineArrayMember({ type: 'hero' }),
        defineArrayMember({ type: 'solutionsSection' }),
        defineArrayMember({ type: 'leadMagnet' }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({title, slug}) {
      return {
        title: title,
        subtitle: slug ? `/${slug}` : 'Sin slug',
      }
    },
  },
})
