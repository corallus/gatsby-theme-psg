import React, {useContext, useEffect, useState} from 'react'
import Context from '../Events/Context'
import Ticket from './Ticket'
import moment from 'moment'
import {Button, Col, Modal, Row} from 'react-bootstrap'
import {Helmet} from 'react-helmet'
import Knop from '../Button'
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
                {tickets.map((ticket, index) => (
                    <Col sm={6} lg={4} className={"py-3"} key={index}>
                        <Ticket ticket={ticket} early_bird={earlyBird && ticket.price_early}>
                            {ticket.url ?
                                <Knop as={"a"} variant="ticket" href={ticket.url} target="_blank"
                                      rel="noopener noreferrer">
                                    Koop ticket
                                </Knop>
                                :
                                event.frontmatter.eventbrite ?
                                    <Knop id="widget-trigger" variant="ticket" type="button">
                                        Koop ticket
                                    </Knop>
                                    :
                                    <Knop variant="ticket" onClick={() => handleShow()}>
                                        Koop ticket
                                    </Knop>
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