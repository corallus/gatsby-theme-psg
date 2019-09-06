import React, { useContext, useState, useEffect } from 'react'
import { EventContext } from '../../layout/Layout';
import Ticket from './Ticket';
import moment from 'moment';
import { Button, Modal } from 'react-bootstrap';
import { MdArrowForward } from 'react-icons/md';
import Helmet from 'react-helmet'

export default () => {
  const { event } = useContext(EventContext)
  const earlyBird = moment().isBefore(moment(event.frontmatter.early_bird))

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (event.frontmatter.eventbrite) {
      var exampleCallback = function () {
        console.log('Order complete!')
      };

      window.EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: event.frontmatter.eventbrite,
        modal: true,
        modalTriggerElementId: 'eventbrite-widget-modal-trigger-' + event.frontmatter.eventbrite,
        onOrderComplete: exampleCallback
      });
    }
  }, []);

  return (
    <>
      <div className="row">
        {event.frontmatter.tickets.map((ticket, i) => (
          <div className="col-md-4" key={i}>
            <Ticket ticket={ticket} early_bird={earlyBird}>
              {event.frontmatter.eventbrite ?
                <>
                  <Helmet>
                    <script src="https://www.eventbrite.nl/static/widgets/eb_widgets.js"></script>
                  </Helmet>
                  <Button variant="ticket" id={'eventbrite-widget-modal-trigger-' + event.frontmatter.eventbrite}>
                    Koop ticket <MdArrowForward size={32} />
                  </Button>
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