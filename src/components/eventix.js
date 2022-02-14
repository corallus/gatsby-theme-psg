import React, {useContext} from 'react'
import Context from 'gatsby-theme-psg/src/components/Events/Context'
import {ticketParams} from "gatsby-theme-psg/src/params";


const Tickets = () => {
    const {state} = useContext(Context)
    const {event} = state

    if (!event.frontmatter.eventix) return <h3 className="text-center">{ticketParams.emptyText}</h3>

    return (
        <iframe
            width={'100%'}
            frameBorder="0"
            className="ot-container__iframe"
            src={`https://shop.eventix.io/${event.frontmatter.eventix}`}
            style={{minHeight: '700px', height: '1500px', width: '100%'}}
        />
    )
}

export default Tickets
