// schemas/documents/settings.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Ajustes del Sitio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del Sitio',
      type: 'string',
      initialValue: 'ProtectoMAQ',
      readOnly: true,
    }),
    defineField({
      name: 'logo',
      description: 'Logo que aparece en la barra de navegación.',
      type: 'image',
    }),
    defineField({
      name: 'mainNavigation',
      title: 'Navegación Principal (Header)',
      description: 'Los enlaces principales que aparecen en la parte superior del sitio.',
      type: 'array',
      of: [{type: 'navItem'}],
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'El ícono que aparece en la pestaña del navegador.',
    }),
    defineField({
      name: 'footer',
      title: 'Configuración del Footer',
      type: 'footerConfig',
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
  ],
})
