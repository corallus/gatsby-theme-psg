import React from 'react'

export default (props) => (
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