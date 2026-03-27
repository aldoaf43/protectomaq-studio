import { defineField, defineType } from "sanity";

export default defineType({
  name: 'form',
  title: 'Formulario',
  type: 'object',
  fields: [
    defineField({
      name: 'formTitle',
      title: 'Título del Formulario',
      type: 'string',
    }),
    defineField({
      name: 'formDescription',
      title: 'Descripción del Formulario',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'formCta',
      title: 'Botón de acción del Formulario',
      type: 'cta',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'responseMessage',
      title: 'Mensaje de respuesta exitoso',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título del mensaje',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descripción del mensaje',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
    defineField({
      name: 'responseErrorMessage',
      title: 'Mensaje de respuesta de error',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Título del mensaje de error',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Descripción del mensaje de error',
          type: 'text',
          rows: 2,
        }),
      ],
    }),
    defineField({
      name: 'formFields',
      title: 'Campos del Formulario',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'formField',
          fields: [
            defineField({
              name: 'label',
              title: 'Etiqueta',
              type: 'string',
            }),
            defineField({
              name: 'type',
              title: 'Tipo de campo',
              type: 'string',
              options: {
                list: [
                  { title: 'Texto', value: 'text' },
                  { title: 'Email', value: 'email' },
                  { title: 'Número', value: 'number' },
                  { title: 'Teléfono', value: 'tel' },
                  { title: 'URL', value: 'url' },
                  { title: 'Área de texto', value: 'textarea' },
                ],
                layout: 'radio',
              },
              initialValue: 'text',
            }),
            defineField({
              name: 'required',
              title: 'Campo obligatorio',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'type',
            },
          },
        },
      ],
    }),
  ],
})
