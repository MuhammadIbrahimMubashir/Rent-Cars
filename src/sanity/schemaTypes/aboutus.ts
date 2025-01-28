import { defineField, defineType } from 'sanity';

export const aboutus = defineType({
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
});
