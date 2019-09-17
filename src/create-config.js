export default function (config = {}) {
  return {
    load_config_file: false,
    media_folder: 'static/media',
    public_folder: '/media',
    collections: [
      {
        name: 'artists',
        label: 'Artiesten',
        folder: 'src/content/artists',
        create: true,
        fields: [
          { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'artist' },
          { label: 'Naam', name: 'title', widget: 'string' },
          { label: 'Tekst', name: 'body', widget: 'markdown', required: false },
          { label: 'Plaatje', name: 'image', widget: 'image', required: false },
        ]
      },
      {
        name: 'acts',
        label: 'Acts',
        folder: 'src/content/acts',
        create: true,
        slug: '{{artist}}-{{event}}',
        identifier_field: 'artist',
        summary: "{{artist}} ({{event}})",
        fields: [
          { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'act' },
          { label: 'Artiest', name: 'artist', widget: 'relation', collection: 'artists', searchFields: ['title'], valueField: 'title' },
          { label: 'Event', name: 'event', widget: 'relation', collection: 'events', searchFields: ['title'], valueField: 'title', required: true },
          { label: 'Tijd', name: 'time', widget: 'datetime', default: '', format: 'hh:mm', required: false },
          { label: 'Aangekondigd', name: 'announced', widget: 'boolean', default: true },
          { label: 'In lineup', name: 'lineup', widget: 'boolean', default: true },
          { label: 'Volgorde', name: 'order', widget: 'number', valueType: 'int' },
          { label: 'Tekst', name: 'body', widget: 'markdown', required: false }
        ]
      },
      {
        name: 'events',
        label: 'Evenementen',
        folder: 'src/content/events',
        create: true,
        fields: [
          { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'event' },
          { label: 'Titel (unieke naam voor intern gebruik)', name: 'title', widget: 'string' },
          { label: 'Naam', name: 'name', widget: 'string', required: false },
          { label: 'EventbriteId', name: 'eventbrite', widget: 'string', required: false },
          { label: 'Url', name: 'url', widget: 'string', required: false },
          { label: 'Status', name: 'status', widget: 'select', default: "In verkoop", options: ["In verkoop", "Binnenkort te koop", "Uitverkocht"] },
          { label: 'Locatie', name: 'location', widget: 'string' },
          { label: 'Datum', name: 'date', widget: 'date', required: true },
          { label: 'Early bird', name: 'early_bird', widget: 'date', required: false },
          { label: 'Active', name: 'active', widget: 'boolean', default: true, required: false },
          { label: 'Tekst', name: 'body', widget: 'markdown', required: false },
          {
            label: 'Tickets', name: 'tickets', widget: 'list', required: false, fields: [
              { label: 'Naam', name: 'name', widget: 'string' },
              { label: 'Prijs', name: 'price', widget: 'number', valueType: 'float' },
              { label: 'Prijs early bird', name: 'price_early', widget: 'number', valueType: 'float', required: false },
            ]
          },
        ]
      },
      {
        name: 'info',
        label: 'Info',
        folder: 'src/content/info',
        create: true,
        fields: [
          { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'info' },
          { label: 'Titel', name: 'title', widget: 'string', required: true },
          { label: 'Tekst', name: 'body', widget: 'markdown', required: true },
          { label: 'Categorie', name: 'category', widget: 'select', options: ['Tickets', 'Algemene info', 'Vervoer'], required: false },
          { label: 'Events', name: 'events', widget: 'relation', collection: 'events', required: false, multiple: true, searchFields: ['title'], valueField: 'title' },
          { label: 'Volgorde', name: 'order', widget: 'number', valueType: 'int', required: false }
        ]
      },
      {
        name: 'content',
        label: 'Content',
        files: [
          {
            file: 'src/content/contact.md',
            label: 'Contact',
            name: 'contact',
            fields: [
              { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'contact' },
              { label: 'Titel', name: 'title', widget: 'string' },
              { label: 'Plaatje', name: 'image', widget: 'image' },
              { label: 'Tekst', name: 'body', widget: 'markdown' },
              { label: 'Locatie', name: 'location', widget: 'map' }
            ]
          }
        ]
      },
      {
        label: 'Pages',
        name: 'pages',
        files: [
          {
            label: 'Home',
            name: 'index',
            file: 'src/pages/index.md',
            fields: [
              {
                label: 'Template Key',
                name: 'templateKey',
                widget: 'hidden',
                default: 'index-page'
              },
              { label: 'Titel', name: 'title', widget: 'string' },
              { label: 'Description', name: 'description', widget: 'text' },
              { label: 'Plaatje', name: 'image', widget: 'image', required: false },
              { label: 'Tekst', name: 'body', widget: 'markdown' },
              { label: 'Info 1', name: 'info1', widget: 'relation', collection: 'info', searchFields: ['title'], valueField: 'title', required: false },
              { label: 'Info 2', name: 'info2', widget: 'relation', collection: 'info', searchFields: ['title'], valueField: 'title', required: false },
              {
                label: 'Fotos', name: 'images', widget: 'list', required: false, fields: [
                  { label: 'Plaatje', name: 'image', widget: 'image' },
                  { label: 'Alt', name: 'alt', widget: 'string' },
                ]
              },
            ]
          },
          {
            file: 'src/pages/info/index.md',
            label: 'Info',
            name: 'info',
            fields: [
              { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'info-page' },
              { label: 'Titel', name: 'title', widget: 'string' },
              { label: 'Description', name: 'description', widget: 'text' },
              { label: 'Image', name: 'image', widget: 'image', required: false },
              { label: 'Tekst', name: 'body', widget: 'markdown' },
            ]
          },
          {
            file: 'src/pages/lineup/index.md',
            label: 'Line-Up',
            name: 'lineup',
            fields: [
              { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'lineup-page' },
              { label: 'Titel', name: 'title', widget: 'string' },
              { label: 'Description', name: 'description', widget: 'text' },
              { label: 'Plaatje', name: 'image', widget: 'image', required: false },
              { label: 'Tekst', name: 'body', widget: 'markdown' },
            ]
          },
          {
            file: 'src/pages/timetable/index.md',
            label: 'Timetable',
            name: 'timetable',
            fields: [
              { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'lineup-page' },
              { label: 'Titel', name: 'title', widget: 'string' },
              { label: 'Description', name: 'description', widget: 'text' },
              { label: 'Tekst', name: 'body', widget: 'markdown' },
            ]
          },
        ]
      }
    ],
    ...config
  };
}