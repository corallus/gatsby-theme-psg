import React, {useContext, useEffect, useState} from 'react'
import Context from '../Events/Context'
import Ticket from './Ticket'
import moment from 'moment'
import {ticketParams} from '../../params'
import {Grid} from "@material-ui/core";

const Tickets = () => {
    const {state} = useContext(Context)
    const {event} = state
    const tickets = event.frontmatter.tickets

    const [earlyBird, setEarlyBird] = useState(false)
    useEffect(() => {
        setEarlyBird(moment().isBefore(moment(event.frontmatter.early_bird)))
    }, [event.frontmatter.early_bird])

    return (
        <Grid
            container
            justify="center"
            alignItems="stretch"
            spacing={3}
        >
            {tickets ? tickets.map((ticket, index) => (
                    <Grid item xs={3} {...ticketParams.colProps} key={index}>
                        <Ticket ticket={ticket} early_bird={earlyBird && ticket.price_early}>
                        </Ticket>
                    </Grid>
                ))
                :
                <h3 className="text-center">{ticketParams.emptyText}</h3>
            }
        </Grid>
    )
}

export default Tickets