import { defineField, defineType } from 'sanity'
import { StarIcon } from '@sanity/icons'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'label',
      title: 'Section Label',
      type: 'string',
      description: 'Small text above the main title (e.g., "Industrial Solutions")',
    }),
    defineField({
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'Primary headline for the landing page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Supporting text below the main headline.',
    }),
    defineField({
      name: 'primaryCta',
      title: 'Primary CTA Text',
      type: 'cta',
      description: 'Main button.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'secondaryCta',
      title: 'Secondary CTA Text',
      type: 'cta',
      description: 'Text for the secondary button.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      description: 'High-quality industrial visual.',
    }),
    defineField({
      name: 'insuranceBrands',
      title: 'Insurance Brands',
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
