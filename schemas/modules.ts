import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'module',
  title: 'Module',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'sessions',
      title: 'Sessions',
      type: 'string',
    }),
  ],
})
