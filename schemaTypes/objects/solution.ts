import { defineField, defineType } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export default defineType({
  name: 'solution',
  title: 'Solution',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the solution.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'lucide-icon',
      description: 'Select an icon that represents this solution.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A detailed explanation of the solution.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stats',
      title: 'Stats',
      type: 'string',
      description: 'Key performance metric or highlight (e.g., "99% Efficiency").',
    }),
  ],
})
