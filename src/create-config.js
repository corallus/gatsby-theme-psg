export default function (config = {}) {
    const page = [
        {label: 'Titel', name: 'title', widget: 'string'},
        {label: 'Description', name: 'description', widget: 'string', pattern: ['^.{12,160}$', "Must have at between 12 and 160 characters"]},
        {label: 'Tekst', name: 'body', widget: 'markdown', required: false},
    ]
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
                    {label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'artist'},
                    {label: 'Naam', name: 'title', widget: 'string'},
                    {label: 'Tekst', name: 'body', widget: 'markdown', required: false},
                    {label: 'Plaatje', name: 'image', widget: 'image', required: false},
                ]
            },
            {
                name: 'events',
                label: 'Evenementen',
                folder: 'src/content/events',
                create: true,
                fields: [
                    {label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'event'},
                    {label: 'Titel (unieke naam voor intern gebruik)', name: 'title', widget: 'string'},
                    {label: 'Naam (weergave)', name: 'name', widget: 'string', required: false},
                    {label: 'Timetable', name: 'timetable', widget: 'image', required: false},
                    {label: 'Aftermovie', name: 'aftermovie', widget: 'string', required: false},
                    {label: 'EventixId', name: 'eventix', widget: 'string', required: false},
                    {
                        label: 'Links', name: 'links', widget: 'list', collapsed: false, fields: [
                            {label: 'Name', name: 'name', widget: 'string'},
                            {label: 'Url', name: 'url', widget: 'string'},
                        ]
                    },
                    {
                        label: 'Status',
                        name: 'status',
                        widget: 'select',
                        default: "In verkoop",
                        options: ["In verkoop", "Uitverkocht", "Afgelast", "Verplaatst"]
                    },
                    {label: 'Locatie', name: 'location', widget: 'string'},
                    {label: 'Datum', name: 'date', widget: 'date', required: true},
                    {label: 'Early bird', name: 'early_bird', widget: 'date', required: false},
                    {label: 'Active', name: 'active', widget: 'boolean', default: true, required: false},
                    {label: 'Tekst', name: 'body', widget: 'markdown', required: false},
                    {
                        label: 'Tickets', name: 'tickets', widget: 'list', required: false, fields: [
                            {label: 'Titel', name: 'title', widget: 'string', required: true},
                            {label: 'Tekst', name: 'body', widget: 'markdown', required: false},
                            {label: 'Url', name: 'url', widget: 'string', required: false},
                            {label: 'Prijs', name: 'price', widget: 'number', valueType: 'float', required: false},
                            {
                                label: 'Prijs early bird',
                                name: 'price_early',
                                widget: 'number',
                                valueType: 'float',
                                required: false
                            },
                        ]
                    },
                    {
                        label: 'Stages', name: 'stages', widget: 'list', required: false, fields: [
                            {label: 'Naam', name: 'name', widget: 'string', required: false},
                            {
                                label: 'Acts', name: 'acts', widget: 'list', required: false, fields: [
                                    {
                                        label: 'Artiest',
                                        name: 'artist',
                                        widget: 'relation',
                                        collection: 'artists',
                                        searchFields: ['title'],
                                        valueField: 'title',
                                        required: true
                                    },
                                    {label: 'Aangekondigd', name: 'announced', widget: 'boolean', default: true},
                                    {label: 'Plaatje', name: 'image', widget: 'image', required: false},
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                name: 'info',
                label: 'Info',
                folder: 'src/content/info',
                create: true,
                fields: [
                    {label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'info'},
                    {label: 'Titel', name: 'title', widget: 'string', required: true},
                    {label: 'Tekst', name: 'body', widget: 'markdown', required: true},
                    {
                        label: 'Categorie',
                        name: 'category',
                        widget: 'select',
                        options: ['Tickets', 'Algemene info', 'Vervoer'],
                        required: false
                    },
                    {
                        label: 'Events',
                        name: 'events',
                        widget: 'relation',
                        collection: 'events',
                        required: false,
                        multiple: true,
                        searchFields: ['title'],
                        valueField: 'title'
                    },
                    {label: 'Volgorde', name: 'order', widget: 'number', valueType: 'int', required: true}
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
                            {label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'contact'},
                            {label: 'Titel', name: 'title', widget: 'string'},
                            {label: 'Plaatje', name: 'image', widget: 'image'},
                            {label: 'Tekst', name: 'body', widget: 'markdown'},
                            {label: 'Locatie', name: 'location', widget: 'map'}
                        ]
                    }
                ]
            },
            {
                name: 'popup',
                label: 'Popup',
                files: [
                    {
                        file: 'src/content/popup.md',
                        label: 'Popup',
                        name: 'popup',
                        fields: [
                            {label: 'Template Key', name: 'templateKey', widget: 'hidden', default: 'popup'},
                            {label: 'Titel', name: 'title', widget: 'string'},
                            {label: 'Datetime', name: 'datetime', widget: 'datetime'},
                            {label: 'Active', name: 'active', widget: 'boolean'},
                            {label: 'Tekst', name: 'body', widget: 'markdown'},
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
                            ...page,
                            {
                                label: 'Fotos', name: 'images', widget: 'list', required: false, fields: [
                                    {label: 'Plaatje', name: 'image', widget: 'image'},
                                    {label: 'Alt', name: 'alt', widget: 'string'},
                                ]
                            },
                        ]
                    },
                    {
                        file: 'src/pages/info.md',
                        label: 'Info',
                        name: 'info',
                        fields: [
                            ...page
                        ]
                    },
                    {
                        file: 'src/pages/lineup.md',
                        label: 'Line-Up',
                        name: 'Lineup',
                        fields: [
                            ...page
                        ]
                    },
                    {
                        file: 'src/pages/timetable.md',
                        label: 'Timetable',
                        name: 'timetable',
                        fields: [
                            ...page
                        ]
                    },
                    {
                        file: 'src/pages/tickets.md',
                        label: 'Tickets',
                        name: 'Tickets',
                        fields: [
                            ...page
                        ]
                    },
                    {
                        file: 'src/pages/fotos.md',
                        label: 'Foto\'s',
                        name: 'Fotos',
                        fields: [
                            ...page,
                            {
                                label: 'Galleries', name: 'galleries', widget: 'list', required: false, fields: [
                                    {label: 'Naam', name: 'naam', widget: 'string', required: true},
                                    {label: 'Plaatje', name: 'image', widget: 'image', required: true},
                                    {label: 'Url', name: 'url', widget: 'string', required: true},
                                ]
                            },
                        ]
                    },
                ]
            }
        ],
        ...config
    };
}