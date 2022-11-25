export default {
    name: 'orders',
    title: 'Orders',
    type: 'document',
    fields: [
      {
        name: 'createdAt',
        title:'Created At',
        type:'text'
      },
      {
        name: 'customer',
        title: 'Customer Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'number',
      },
      {
        name: 'pickupDate',
        title: 'Pickup Date',
        type: 'text',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'size',
        title: 'Size',
        type: 'text',
      },
      {
        name: 'baseFlavor',
        title: 'Base Flavor',
        type: 'text',
      },
      {
        name: 'outerFlavor',
        title: 'Outer Flavor',
        type: 'text',
      },
      {
        name: 'fillingFlavor',
        title: 'Filling Flavor',
        type: 'text',
      },
      {
        name: 'imageUrl',
        title: 'Image URL',
        type: 'text',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [
          {
            type: 'image',
          },
        ],
        options: {hotspot: true}
      },
    ],
  }
  