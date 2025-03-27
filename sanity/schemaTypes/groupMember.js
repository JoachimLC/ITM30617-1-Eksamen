export default {
    name: 'groupMember',
    title: 'Gruppe Medlem',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Navn',
        type: 'string'
      },
      {
        name: 'email',
        title: 'E-post',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Bilde',
        type: 'image'
      },
      {
        name: 'interests',
        title: 'Interesser',
        type: 'array',
        of: [{type: 'string'}]
      },
      {
        name: 'biography',
        title: 'Biografi',
        type: 'text'
      },
      {
        name: 'logs',
        title: 'Loggføringer',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'logItem'}]}]
      }
    ]
  }
  