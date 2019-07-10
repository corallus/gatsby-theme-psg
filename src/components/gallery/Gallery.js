import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Lightbox from 'react-image-lightbox'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import 'react-image-lightbox/style.css'
import './style.scss'

class Gallery extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleOpen = this.handleOpen.bind(this);

    this.state = {
      page: 0,
      direction: null,
      imageIndex: 0,
      isOpen: false,
    };
  }

  handleOpen(key) {
    const { page: index } = this.state
    this.setState({ photoIndex: key + (index * this.props.imagesPerPage), isOpen: true })
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      page: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { page, direction, imageIndex, isOpen } = this.state;
    const { images, imagesPerPage } = this.props;

    const pages = [];
    for (let i = 1; i <= Math.ceil(this.props.images.length / imagesPerPage); i++) {
      let indexOfLastImage = i * imagesPerPage;
      let indexOfFirstImage = indexOfLastImage - imagesPerPage;
      let page = this.props.images.slice(indexOfFirstImage, indexOfLastImage);
      pages.push(page);
    }
    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={images[imageIndex].image.childImageSharp.fluid.src}
            nextSrc={images[(imageIndex + 1) % images.length].image.childImageSharp.fluid.src}
            prevSrc={images[(imageIndex + images.length - 1) % images.length].image.childImageSharp.fluid.src}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (imageIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (imageIndex + 1) % images.length,
              })
            }
          />
        )}
        <Carousel
          activeIndex={page}
          direction={direction}
          onSelect={this.handleSelect}
          interval={null}
          nextIcon={<FaArrowCircleRight color="black" />}
          prevIcon={<FaArrowCircleLeft color="black" />}
        >

          {pages.map((page, i) => (
            <Carousel.Item key={i}>
              <div className="row">
                {page.map((image, j) => (
                  <div key={j} onClick={() => this.handleOpen(j)} className="col-md-4" style={{ padding: '15px' }}>
                    <PreviewCompatibleImage imageInfo={image} />
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      alt: PropTypes.string,
    })
  ),
}

export default Gallery
