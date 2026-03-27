import { defineField, defineType } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export default defineType({
  name: 'solution',
  title: 'Solución',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      description: 'El nombre de la solución.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icono',
      type: 'lucide-icon',
      description: 'Selecciona un icono que represente esta solución.',
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      description: 'Una explicación detallada de la solución.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stats',
      title: 'Estadísticas / Destacado',
      type: 'string',
      description: 'Métrica de rendimiento clave o texto destacado (ej: "99% de Eficiencia").',
    }),
  ],
})
