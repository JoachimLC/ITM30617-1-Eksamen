export default {
    name: 'logItem',
    title: 'Loggoppføring',
    type: 'document',
    fields: [
      {
        name: 'date',
        title: 'Dato',
        type: 'datetime'
      },
      {
        name: 'action',
        title: 'Handling',
        type: 'string',
        description: 'Beskrivelse av hva medlemmet har gjort'
      },
      {
        name: 'hoursSpent',
        title: 'Antall timer',
        type: 'number',
        description: 'Antall timer brukt'
      },
      {
        name: 'member',
        title: 'Medlem',
        type: 'reference',
        to: [{ type: 'groupMember' }]
      }
    ]
  }
  