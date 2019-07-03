import React from 'react'

const Heading = (props) => (
  <div
    className="img-fluid text-center"
    style={{
      backgroundImage: `url(${
        props.background
        })`,
      backgroundPosition: `center center`,
      backgroundSize: `cover`,
      minHeight: '500px'
    }}
  >
      {props.children}
  </div>
)

export default Heading