import React, { useContext, useState, useEffect } from 'react'
import EventContext from '../../EventContext'
import Ticket from './Ticket'
import moment from 'moment'
import { Button, Modal, Row, Col } from 'react-bootstrap'
import { useTicketsQuery } from './Query'
import { Helmet } from 'react-helmet'
import Knop from '../../Button'

export default () => {
  const { state } = useContext(EventContext)
  const { event } = state
  const data = useTicketsQuery()
  const tickets = (event !== null ? data.filter(item => item.node.frontmatter.event.id === event.id) : data)

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
          {tickets.map(({ node: post }) => (
              <Col sm={6} lg={4} className={"py-3"} key={post.id}>
                <Ticket ticket={post} early_bird={earlyBird && post.price_early}>
                  {post.frontmatter.url ?
                      <Knop as={"a"} variant="ticket" href={post.frontmatter.url} target="_blank" rel="noopener noreferrer">
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
            <iframe title="koop tickets" width="100%" height="800px" frameBorder="0" src={event.frontmatter.url}/>
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