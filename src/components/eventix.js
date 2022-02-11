import React, {useContext, useEffect, useState} from 'react'
import Context from 'gatsby-theme-psg/src/components/Events/Context'
import {ticketParams} from "gatsby-theme-psg/src/params";
import {Helmet} from "react-helmet";

const Tickets = () => {
    const {state} = useContext(Context)
    const {event} = state

    if (!event.frontmatter.eventix) return <h3 className="text-center">{ticketParams.emptyText}</h3>

    return (
            <>
                <Helmet>
                    <script src={`https://shop.eventix.io/build/integrate.js?event=${event.frontmatter.eventix}`}/>
                </Helmet>
                <Display event={event} />
            </>
    )
}

const Display = ({event}) => {
    return (
        <div id="shop-frame"
             data-url={`https://shop.eventix.io/${event.frontmatter.eventix}`}
             style={{maxWidth: '600px', margin: '0 auto'}}
        />
    )
}

export default Tickets
