import { defineField, defineType } from 'sanity'
import { StarIcon } from '@sanity/icons'

export default defineType({
  name: 'hero',
  title: 'Sección Hero',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Etiqueta de la Sección',
      type: 'string',
      description: 'Texto pequeño sobre el título principal (ej: "Soluciones Industriales")',
    }),
    defineField({
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      description: 'Titular principal de la página de destino.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      description: 'Texto de apoyo debajo del titular principal.',
    }),
    defineField({
      name: 'primaryCta',
      title: 'Texto del CTA Primario',
      type: 'cta',
      description: 'Botón principal.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Texto del CTA Secundario',
      type: 'cta',
      description: 'Texto para el botón secundario.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'image',
      title: 'Imagen Hero',
      type: 'image',
      options: { hotspot: true },
      description: 'Imagen visual industrial de alta calidad.',
    }),
    defineField({
      name: 'insuranceBrands',
      title: 'Marcas de Aseguradoras',
      type: 'array',
      of: [
        {
          type: 'string',
          options: { hotspot: true },
        },
      ],
      description: 'Nombres de las aseguradoras (opcional).',
    }),
  ],
})
