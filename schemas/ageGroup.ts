import { defineField, defineType } from "sanity";

export default defineType({
  name: "ageGroup",
  title: "Age Group",
  type: "document",
  fields: [
    defineField({
      name: "age",
      title: "Age",
      type: "string",
    }),
  ],
});
