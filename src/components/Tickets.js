import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MdArrowForward } from 'react-icons/md';

class TicketModal extends React.Component {
    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Tickets
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Regular ticket € 34,50 ex fee
                    </p>
                    <p>
                        VIP tickets € 150 ex fee
                    </p>
                    <Button href="https://queue.paylogic.com/129830/19714/?" target="_blank" className="mr-4 mb-4">
                        Buy tickets
                        </Button>
                    <Button href="https://hotel.gigiinconcert.com/nl/20-years-gigi-dagostino.html" target="_blank" className="mr-4 mb-4">
                        Full Experience Hotel
                        </Button>
                    <Button href="https://hotel.gigiinconcert.com/nl/20-years-gigi-dagostino.html" target="_blank">
                        Ticket + Hotel
                        </Button>
                </Modal.Body>
            </Modal>
        );
    }
}

class Tickets extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = { modalShow: false };
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <React.Fragment>
                <Button
                    size={this.props.size}
                    onClick={() => this.setState({ modalShow: true })}
                    className="btn-tickets"
                >
                    TICKETS <MdArrowForward size={32} />
                </Button>

                <TicketModal show={this.state.modalShow} onHide={modalClose} />
            </React.Fragment>
        );
    }
}

export default Tickets;