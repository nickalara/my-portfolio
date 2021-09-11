export default {
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    {
      name: "course",
      title: "Course",
      type: "string"
    },
    {
      name: "semester",
      title: "Semester",
      type: "string"
    },
    {
      name: "college",
      title: "College",
      type: "string"
    },
    {
      name: "topics",
      title: "Topics covered",
      type: "blockContent"
    },
  ],
};