import React from 'react'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import './style.scss'

const NewsFlash = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body dangerouslySetInnerHTML={{__html: props.html}}>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewsFlash