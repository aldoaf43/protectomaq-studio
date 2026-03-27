import { defineField, defineType } from 'sanity'
import { ComponentIcon } from 'lucide-react'

export default defineType({
  name: 'footerConfig',
  title: 'Configuración del Footer',
  type: 'object',
  icon: ComponentIcon as any,
  fields: [
    defineField({
      name: 'description',
      title: 'Descripción de la Empresa',
      type: 'text',
      rows: 3,
      description: 'Texto breve que aparece debajo del logo en la primera columna (menor a 100 caracteres).',
      validation: (Rule) => Rule.max(100).required(),
    }),
    
    defineField({
      name: 'socialLinks',
      title: 'Redes Sociales',
      type: 'array',
      description: 'Iconos y enlaces a tus perfiles sociales.',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({
              name: 'platform',
              title: 'Plataforma (Icono)',
              type: 'lucide-icon',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'url', media: 'platform' },
          }
        },
      ],
    }),

    defineField({
      name: 'schedule',
      title: 'Horario de Atención',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'scheduleItem',
          fields: [
            defineField({
              name: 'text',
              title: 'Texto del Horario',
              type: 'string',
              description: 'Ej. "Lun - Vie: 9:00 AM - 6:00 PM"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'isHighlighted',
              title: 'Resaltado (Texto Primario)',
              type: 'boolean',
              description: 'Activa esto para que el texto aparezca en color Neón/Primario.',
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: 'text', highlighted: 'isHighlighted' },
            prepare({ title, highlighted }) {
              return { title, subtitle: highlighted ? 'Resaltado' : 'Normal' }
            }
          }
        },
      ],
    }),

    defineField({
      name: 'contactInfo',
      title: 'Información de Contacto',
      type: 'object',
      fields: [
        defineField({ name: 'address', title: 'Ubicación / Dirección', type: 'string' }),
        defineField({ name: 'email', title: 'Correo Electrónico', type: 'string' }),
        defineField({ name: 'phone', title: 'Teléfono', type: 'string' }),
      ],
    }),

    defineField({
      name: 'copyright',
      title: 'Texto de Copyright',
      type: 'string',
      description: 'Ej. "PROTECTOMAQ - ALTA GESTIÓN DE RIESGOS". (El año y el símbolo © se añaden por código).',
    }),

    defineField({
      name: 'legalLinks',
      title: 'Enlaces Legales',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'legalLink',
          fields: [
            defineField({ name: 'label', title: 'Etiqueta', type: 'string', description: 'Ej. "Aviso de Privacidad"' }),
            defineField({ name: 'url', title: 'URL', type: 'string' }),
          ],
        },
      ],
    }),
  ],
})