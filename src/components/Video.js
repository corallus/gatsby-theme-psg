import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MdPlayCircleOutline } from 'react-icons/md';

export const Video = ({src}) => {
    return (
        <video width="100%" controls>
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export class VideoModal extends React.Component {
    constructor(...args) {
        super(...args);

        this.state = { modalShow: false };
    }

    render() {
        let modalClose = () => this.setState({ modalShow: false });

        return (
            <React.Fragment>
                <Button
                    variant="dark"
                    size={this.props.size}
                    onClick={() => this.setState({ modalShow: true })}
                    className="btn-transparent"
                    style={{ backgroundColor: 'gba(0, 0, 0, 0.5)' }}
                >
                    <MdPlayCircleOutline /> Watch promo
                </Button>

                <Modal size="lg" show={this.state.modalShow} onHide={modalClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Video src={this.props.src} />
                </Modal>
            </React.Fragment>
        );
    }
}

export default Video;