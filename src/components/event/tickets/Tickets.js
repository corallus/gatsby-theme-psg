import React, { useContext, useState, useEffect } from 'react'
import EventContext from '../../EventContext';
import Ticket from './Ticket';
import moment from 'moment';
import { Button, Modal } from 'react-bootstrap';
import { MdArrowForward } from 'react-icons/md';
import EventbriteButton from './Button'
import { useTicketsQuery } from './Query';

export default () => {
  const { state } = useContext(EventContext)
  const { event } = state
  const data = useTicketsQuery()
  const tickets = (event !== null ? data.filter(item => item.node.frontmatter.event.id === event.id): data)

  const [earlyBird, setEarlyBird] = useState(false)
  useEffect(() => {
    setEarlyBird(moment().isBefore(moment(event.frontmatter.early_bird)))
  }, [event.frontmatter.early_bird])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="row justify-content-center">
        {tickets.map(({ node: post }) => (
          <div className="col-sm-6 col-lg-4" key={post.id}>
            <Ticket ticket={post} early_bird={earlyBird && post.frontmatter.price !== post.frontmatter.price_early}>
              {post.frontmatter.url ? 
                <Button href={post.frontmatter.url} target="_blank" className="btn-ticket">
                  Koop ticket <MdArrowForward size={32} />
                </Button>
                :
                event.frontmatter.eventbrite ?
                  <EventbriteButton ebEventId={event.frontmatter.eventbrite} className="btn btn-ticket">
                    Koop ticket <MdArrowForward size={32} />
                  </EventbriteButton>
                :
                <Button className="btn-ticket" onClick={() => handleShow()}>
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