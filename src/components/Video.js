import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MdPlayCircleOutline } from 'react-icons/md';

class VideoModal extends React.Component {
    render() {
        return (
            <Modal {...this.props} aria-labelledby="contained-modal-title-vcenter" centered>
                    <video width="100%" controls>
                        <source src="video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
            </Modal>
        );
    }
}

class Video extends React.Component {
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

                <VideoModal size="lg" show={this.state.modalShow} onHide={modalClose} />
            </React.Fragment>
        );
    }
}

export default Video;