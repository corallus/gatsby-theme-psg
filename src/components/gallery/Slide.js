import PreviewCompatibleImage from '../shared/PreviewCompatibleImage'
import { Carousel } from 'react-bootstrap'

export default (images, handleOpen) => {
    return (
        <Carousel.Item key={i}>
            <div className="row">
                {images.slice(0, 3).map((item, j) => (
                    <div key={j} onClick={() => handleOpen(key)} className="col-md-4" style={{ padding: '15px' }}>
                        <PreviewCompatibleImage imageInfo={item} />
                    </div>
                ))}
            </div>
        </Carousel.Item>
    )
}