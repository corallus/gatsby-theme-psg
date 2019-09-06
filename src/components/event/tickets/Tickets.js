import React, { useContext, useState } from 'react'
import { EventContext } from '../../layout/Layout';
import Ticket from './Ticket';
import moment from 'moment';
import { Button, Modal } from 'react-bootstrap';
import { MdArrowForward } from 'react-icons/md';
import EventbriteButton from './Button'

export default () => {
  const { event } = useContext(EventContext)
  const earlyBird = moment().isBefore(moment(event.frontmatter.early_bird))

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row">
        {event.frontmatter.tickets.map((ticket, i) => (
          <div className="col-md-4" key={i}>
            <Ticket ticket={ticket} early_bird={earlyBird}>
              {event.frontmatter.eventbrite ?
                <>
                  <EventbriteButton ebEventId={event.frontmatter.eventbrite} className="btn btn-ticket">
                    Koop ticket <MdArrowForward size={32} />
                  </EventbriteButton>
                </>
                :
                <Button variant="ticket" onClick={() => handleShow()}></Button>
              }
            </Ticket>
          </div>
        ))}
      </div>
      {!event.frontmatter.eventbrite && event.frontmatter.url &&
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
      }
    </>
  )
}