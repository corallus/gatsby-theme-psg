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
        identifier_field: 'name',
        slug: '{{slug}}',
        fields: [
          { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'artist' },
          { label: 'Naam', name: 'name', widget: 'string' },
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
        summary: "{{title}} ({{event}})",
        fields: [
          { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'act' },
          { label: 'Naam', name: 'title', widget: 'string' },
          { label: 'Tekst', name: 'body', widget: 'markdown', required: false },
          { label: 'Artiest', name: 'artist', widget: 'relation', collection: 'artists', searchFields: ['name'], valueField: 'name' },
          { label: 'Event', name: 'event', widget: 'relation', collection: 'events', searchFields: ['name'], valueField: 'date', required: true },
          { label: 'Tijd', name: 'time', widget: 'datetime', default: '', format: 'hh:mm', required: false },
          { label: 'Aangekondigd', name: 'announced', widget: 'boolean', default: false },
          { label: 'In lineup', name: 'lineup', widget: 'boolean', default: true },
          { label: 'Volgorde', name: 'order', widget: 'number', valueType: 'int' }
        ]
      },
      {
        name: 'events',
        label: 'Evenementen',
        folder: 'src/content/events',
        create: true,
        identifier_field: 'date',
        slug: '{{date}}',
        summary: "{{name}} ({{date}})",
        fields: [
          { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'event' },
          { label: 'Naam', name: 'name', widget: 'string' },
          { label: 'Locatie', name: 'location', widget: 'string' },
          { label: 'Datum', name: 'date', widget: 'date', required: true },
          {
            label: 'Tickets', name: 'tickets', widget: 'list', required: false, fields: [
              { label: 'Naam', name: 'name', widget: 'string' },
              { label: 'Prijs', name: 'price', widget: 'number', valueType: 'float' },
              { label: 'Url', name: 'url', widget: 'string', required: false },
            ]
          },
        ]
      },
      {
        name: 'info',
        label: 'Info',
        folder: 'src/content/info',
        create: true,
        identifier_field: 'title',
        slug: '{{slug}}',
        fields: [
          { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'info' },
          { label: 'Titel', name: 'title', widget: 'string', required: true },
          { label: 'Tekst', name: 'body', widget: 'markdown', required: true },
          { label: 'Categorie', name: 'category', widget: 'select', options: ['Tickets', 'Algemene info', 'Vervoer'], required: false },
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
              { label: 'Plaatje', name: 'image', widget: 'image' },
              { label: 'Tekst', name: 'body', widget: 'markdown' },
              { label: 'Info 1', name: 'info1', widget: 'relation', collection: 'info', searchFields: ['title'], valueField: 'title' },
              { label: 'Info 2', name: 'info2', widget: 'relation', collection: 'info', searchFields: ['title'], valueField: 'title' },
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
              { label: 'Image', name: 'image', widget: 'image' },
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
              { label: 'Plaatje', name: 'image', widget: 'image' },
              { label: 'Tekst', name: 'body', widget: 'markdown' },
            ]
          },
          /*
          {
            file: 'src/pages/timetable/index.md',
            label: 'Timetable',
            name: 'timetable',
            fields: [
              { label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'timetable-page' },
              { label: 'Titel', name: 'title', widget: 'string' },
              { label: 'Plaatje', name: 'image', widget: 'image' },
              { label: 'Tekst', name: 'body', widget: 'markdown' },
            ]
          }
          */
        ]
      }
    ],
    ...config
  };
}