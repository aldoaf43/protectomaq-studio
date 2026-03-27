import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Botón (Call to Action)',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Texto del Botón',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Enlace (URL)',
      description: 'Un enlace interno (ej: /contacto) o externo (ej: https://...)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color del botón',
      type: 'string',
      options: {
        list: [
          {title: 'Primario', value: 'default'},
          {title: 'Secundario', value: 'outline'},
          {title: 'Borde primario', value: 'primaryOutline'},
          {title: 'Transparente', value: 'ghost'},
          {title: 'Rojo', value: 'destructive'},
          {title: 'Whatsapp', value: 'cta'},
          {title: 'Borde Whatsapp', value: 'ctaOutline'},
          {title: 'Sin color', value: 'link'},
        ],
        layout: 'radio',
      },
      initialValue: 'default',
    }),
    defineField({
      name: 'icon',
      title: 'Icono',
      type: 'lucide-icon',
      description: 'Nombre del icono de Lucide Icons (opcional)',
    }),
    defineField({
      name: 'codeConversion',
      title: 'Código de Conversión',
      type: 'string',
      description: 'Código para rastrear conversiones (opcional)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
