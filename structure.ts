import type {StructureResolver} from 'sanity/structure'
import {HomeIcon, CogIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .title('Páginas')
        .icon(HomeIcon)
        .child(S.documentTypeList('page').title('Páginas')),

      S.divider(),

      S.listItem()
        .title('Ajustes del Sitio')
        .icon(CogIcon)
        .child(S.documentTypeList('settings').title('Ajustes del Sitio')),

      ...S.documentTypeListItems().filter(
        (listItem) => !['page', 'settings'].includes(listItem.getId() as string),
      ),
    ])
