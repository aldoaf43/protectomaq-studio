import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export default defineType({
  name: 'solutionsSection',
  title: 'Sección de Soluciones',
  type: 'object',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Etiqueta de la Sección',
      type: 'string',
      description: 'Texto pequeño sobre el título de la sección.',
    }),
    defineField({
      name: 'title',
      title: 'Título de la Sección',
      type: 'string',
      description: 'El titular principal del área de soluciones.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solutions',
      title: 'Selección de Soluciones',
      type: 'array',
      description: 'Selecciona las soluciones a mostrar en esta sección.',
      of: [{type: 'solution'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
