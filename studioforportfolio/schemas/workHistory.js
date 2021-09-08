export default {
  name: 'workHistory',
  title: 'Work History',
  type: 'document',
  fields: [
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'employer',
      title: 'Employer',
      type: 'string',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'companyURL',
      title: 'Company URL',
      type: 'url',
    },
    //removing images from work history listings
    // {
    //   name: 'mainImage',
    //   title: 'Main image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MM/YYYY',
      },
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'MM/YYYY',
      },
    },
    {
      name: 'duties',
      title: 'Duties',
      type: 'blockContent',
    },
  ],
};
