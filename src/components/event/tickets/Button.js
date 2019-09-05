import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { MdArrowForward } from 'react-icons/md';

export default ({ url }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className="btn btn-info">
        Koop ticket <MdArrowForward size={32} />
      </Button>
      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tickets kopen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe title="koop tickets" width="100%" height="800px" frameBorder="0" src={url}></iframe>
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