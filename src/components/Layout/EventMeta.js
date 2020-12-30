import React, {useContext} from 'react'
import {Helmet} from 'react-helmet'
import Context from "../Events/Context";

const EventMeta = () => {
    const {state} = useContext(Context)
    const {event} = state
    return (
        <Helmet>
            <script type="application/ld+json">{`
                {
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "${event.frontmatter.title}",
                    "startDate": "${event.frontmatter.date}",
                    "endDate": "${event.frontmatter.date}",
                    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                    "eventStatus": "https://schema.org/EventScheduled",
                    "location": {
                        "@type": "Place",
                        "name": "${event.frontmatter.location}",
                    },
                    "image": [
                    ],
                    "description": "${event.frontmatter.description}",
                    "organizer": {
                        "@type": "Organization",
                        "name": "PSG Concerts B.V.",
                    }
                }
            `}</script>
        </Helmet>
    )
}

export default EventMeta