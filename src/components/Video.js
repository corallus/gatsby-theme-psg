import React, {useState} from 'react'
import {MdPlayCircleOutline} from 'react-icons/md';
import {Button, Dialog} from "@material-ui/core";

export const Video = (props) => {
    const [showText, setShowText] = useState(true);
    const video = React.createRef();

    function handleClick() {
        video.current.play();
        setShowText(false)
    }

    return (
        <div className="position-relative video">
            <video width="100%" controls ref={video} onClick={() => setShowText(false)}>
                <source src={props.src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            {showText &&
            <div onClick={handleClick} className="position-absolute text-white" style={{
                zIndex: 1,
                top: '50%',
                left: '50%',
                fontWeight: 'bold',
                transform: 'translate(-50%, -50%)'
            }}>
                {props.children}
            </div>
            }
        </div>
    )
}

export class VideoModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {modalShow: false};
    }

    render() {
        let modalClose = () => this.setState({modalShow: false});

        return (
            <React.Fragment>
                <Button
                    onClick={() => this.setState({modalShow: true})}
                >
                    <MdPlayCircleOutline/> Watch promo
                </Button>

                <Dialog size="lg" open={this.state.modalShow} onClose={modalClose}>
                    <Video src={this.props.src}/>
                </Dialog>
            </React.Fragment>
        );
    }
}

export default Video;