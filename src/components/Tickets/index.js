import React, {useContext, useEffect, useState} from 'react'
import Context from '../Events/Context'
import Ticket from './Ticket'
import moment from 'moment'
import { Link } from 'gatsby'
import {Col, Row} from 'react-bootstrap'
import {ticketParams} from '../../params'
import './style.scss'
import TicketButton from "./Ticket/Button"

const Tickets = () => {
    const {state} = useContext(Context)
    const {event} = state
    const tickets = event.frontmatter.tickets

    const [earlyBird, setEarlyBird] = useState(false)
    useEffect(() => {
        setEarlyBird(moment().isBefore(moment(event.frontmatter.early_bird)))
    }, [event.frontmatter.early_bird])

    return (
        <>
            <Row className="row justify-content-center tickets">
                {tickets ? tickets.map((ticket, index) => (
                    <Col {...ticketParams.colProps} key={index} className={"mb-4 ticket-col"}>
                        <Ticket ticket={ticket} early_bird={earlyBird && ticket.price_early}>
                            <TicketButton as={Link} to={'/tickets'}/>
                        </Ticket>
                    </Col>
                ))
                :
                    <h3 className="text-center">{ticketParams.emptyText}</h3>
                }
            </Row>
        </>
    )
}

export default Tickets