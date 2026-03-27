import {defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons'

export default defineType({
  name: 'solutionsSection',
  title: 'Solutions Section',
  type: 'object',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'string',
      description: 'Small text above the section title.',
    }),
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'The main headline for the solutions area.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'solutions',
      title: 'Solutions Selection',
      type: 'array',
      description: 'Select the solutions to showcase in this section.',
      of: [{type: 'solution'}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
})
