import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { Carousel } from 'react-bootstrap'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

class Gallery extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
      imagesPerPage: props.itemsPerPage
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction, imagesPerPage } = this.state;

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.images.length / imagesPerPage); i++) {
      let indexOfLastImage = i * imagesPerPage;
      let indexOfFirstImage = indexOfLastImage - imagesPerPage;
      let images = this.props.images.slice(indexOfFirstImage, indexOfLastImage);
      pageNumbers.push(images);
    }
    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        nextIcon={<FaArrowCircleRight color="black" />}
        prevIcon={<FaArrowCircleLeft color="black" />}
      >

        {pageNumbers.map((page, i) => (
          <Carousel.Item key={i}>
            <div className="row">
              {page.slice(0,3).map((item, j) => (
                <div key={j} className="col-md-4" style={{padding: '15px'}}>
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
              ))}
            </div>
            <div className="row">
              {page.slice(3,7).map((item, k) => (
                <div key={k} className="col-6 col-md-3" style={{padding: '15px'}}>
                  <PreviewCompatibleImage imageInfo={item} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
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
