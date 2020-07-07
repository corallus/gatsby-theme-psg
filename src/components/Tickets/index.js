import React, {useContext, useEffect, useState} from 'react'
import Context from '../Events/Context'
import Ticket from './Ticket'
import moment from 'moment'
import {Button, Col, Modal, Row} from 'react-bootstrap'
import {Helmet} from 'react-helmet'
import TicketButton from './Ticket/Button'
import {cols} from './params'
import './style.scss'

const Tickets = () => {
    const {state} = useContext(Context)
    const {event} = state
    const tickets = event.frontmatter.tickets

    const [earlyBird, setEarlyBird] = useState(false)
    useEffect(() => {
        setEarlyBird(moment().isBefore(moment(event.frontmatter.early_bird)))
    }, [event.frontmatter.early_bird])

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
            {event.frontmatter.eventbrite &&
            <Helmet>
                <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js"/>
                <script>
                    {`
                        var exampleCallback = function() { console.log("Order complete!")};
                      
                        window.EBWidgets.createWidget({
                          widgetType: "checkout",
                          eventId: "${event.frontmatter.eventbrite}",
                          modal: true,
                          modalTriggerElementId: "widget-trigger",
                          onOrderComplete: exampleCallback
                        });
                        `}
                </script>
            </Helmet>
            }
            <Row className="row justify-content-center tickets">
                {tickets && tickets.map((ticket, index) => (
                    <Col {...cols} key={index} className={"mb-4 ticket-col"}>
                        <Ticket ticket={ticket} early_bird={earlyBird && ticket.price_early}>
                            {ticket.url ?
                                <TicketButton as={"a"} href={ticket.url} target="_blank" rel="noopener noreferrer" />
                                :
                                event.frontmatter.eventbrite ?
                                    <TicketButton id="widget-trigger" type="button" />
                                    :
                                    <TicketButton onClick={() => handleShow()} />
                            }
                        </Ticket>
                    </Col>
                ))}
            </Row>
            {event.frontmatter.url &&
            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Tickets kopen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe title="koop tickets" width="100%" height="800px" frameBorder="0"
                            src={event.frontmatter.url}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Sluiten
                    </Button>
                </Modal.Footer>
            </Modal>
            }
        </>
    )
}

export default Tickets