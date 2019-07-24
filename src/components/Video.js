import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { MdPlayCircleOutline, MdPlayArrow } from 'react-icons/md';

export const Video = ({ src }) => {
    const [showText, setShowText] = useState(true);
    const video = React.createRef();

    function handleClick() {
      video.current.play();
      setShowText(false)
    }

    return (
        <div className="position-relative">
            <video width="100%" controls className="video" ref={video} onClick={() => setShowText(false)}>
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {showText &&
                <div onClick={handleClick} className="position-absolute text-white" style={{
                    zIndex: 1,
                    top: '50%',
                    left: '50%',
                    fontSize: '32px',
                    fontWeight: 'bold',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <div className="rounded-circle bg-white text-primary mx-auto" style={{ width: '80px', height: '80px', lineHeight: '80px'}}>
                        <MdPlayArrow size="40" />
                    </div>
                    Bekijk de aftermovie<br />
                    van vorig jaar
                </div>
            }
        </div>
    )
}

export class VideoModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = { modalShow: false };
    }

    render () {
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