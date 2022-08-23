export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    // {
    //   title: 'Tags',
    //   name: 'tags',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'string',
    //     },
    //   ],
    //   options: {
    //     layout: 'tags',
    //   },
    // },
    // {
    //   name: 'vendor',
    //   title: 'Vendor',
    //   type: 'reference',
    //   to: {type: 'vendor'},
    // },
    // {
    //   name: 'blurb',
    //   title: 'Blurb',
    //   type: 'localeString',
    // },
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: {type: 'category'},
    //     },
    //   ],
    // },
    // {
    //   name: 'body',
    //   title: 'Body',
    //   type: 'localeBlockContent',
    // },
  ],

}
