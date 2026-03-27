import {defineField, defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export default defineType({
  name: 'leadMagnet',
  title: 'Sección Lead Magnet',
  type: 'object',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'El titular principal de la sección de conversión.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
      description: 'Texto de apoyo debajo del titular.',
    }),
  ],
})
