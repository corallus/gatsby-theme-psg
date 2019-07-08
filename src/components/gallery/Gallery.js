import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './style.scss'

class Gallery extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);
    this.handleOpen = this.handleOpen.bind(this);

    this.state = {
      index: 0,
      direction: null,
      imagesPerPage: props.itemsPerPage,
      photoIndex: 0,
      isOpen: false,
    };
  }

  handleOpen(key) {
    const { index, imagesPerPage } = this.state
    return this.setState({ photoIndex: key + (index * imagesPerPage), isOpen: true })
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction, imagesPerPage, photoIndex, isOpen } = this.state;
    const images = this.props.images;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.images.length / imagesPerPage); i++) {
      let indexOfLastImage = i * imagesPerPage;
      let indexOfFirstImage = indexOfLastImage - imagesPerPage;
      let images = this.props.images.slice(indexOfFirstImage, indexOfLastImage);
      pageNumbers.push(images);
    }
    return (
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          nextIcon={<FaArrowCircleRight color="black" />}
          prevIcon={<FaArrowCircleLeft color="black" />}
        >

          {pageNumbers.map((page, i) => (
            <Slide images={page} />
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
      name: PropTypes.string,
    })
  ),
}

export default Gallery
