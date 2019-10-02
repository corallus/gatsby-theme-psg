import React, { useContext, useState, useEffect } from 'react'
import EventContext from '../../EventContext';
import Ticket from './Ticket';
import moment from 'moment';
import { Button, Modal } from 'react-bootstrap';
import { MdArrowForward } from 'react-icons/md';
import EventbriteButton from './Button'

export default () => {
  const { state } = useContext(EventContext)
  const { event } = state

  const [earlyBird, setEarlyBird] = useState(false)
  useEffect(() => {
      setEarlyBird(moment().isBefore(moment(event.frontmatter.early_bird)))
  }, [])
  useEffect(() => {
    setEarlyBird(moment().isBefore(moment(event.frontmatter.early_bird)))
  }, [state.event.id, event.frontmatter.early_bird])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row justify-content-center">
        {event.frontmatter.tickets.map((ticket, i) => (
          <div className="col-sm-6 col-lg-4" key={event.id+i}>
            <Ticket ticket={ticket} early_bird={earlyBird}>
              {ticket.url ? 
                <Button href={ticket.url} target="_blank" variant="ticket">
                  Koop ticket <MdArrowForward size={32} />
                </Button>
                :
                event.frontmatter.eventbrite ?
                  <EventbriteButton ebEventId={event.frontmatter.eventbrite} className="btn btn-ticket">
                    Koop ticket <MdArrowForward size={32} />
                  </EventbriteButton>
                :
                <Button variant="ticket" onClick={() => handleShow()}>
                  Koop ticket <MdArrowForward size={32} />
                </Button>
              }
            </Ticket>
          </div>
        ))}
      </div>
        <Modal size="xl" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Tickets kopen</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe title="koop tickets" width="100%" height="800px" frameBorder="0" src={event.frontmatter.url}></iframe>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Sluiten
          </Button>
          </Modal.Footer>
        </Modal>
    </>
  )
}