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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sessions',
      title: 'Sessions',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
