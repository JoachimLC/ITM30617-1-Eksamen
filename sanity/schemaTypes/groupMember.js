export default {
    name: 'groupMember',
    title: 'Gruppemedlem',
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
        name: 'log',
        title: 'Loggføringer',
        type: 'array',
        of: [{type: 'reference', to: [{type: 'logItem'}]}]
      }
    ]
  }
  