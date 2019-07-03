import React from 'react'

const Lead = (props) => (
  <div className="container bg-primary text-white shadow position-relative lead"
    style={{
      marginTop: '-106px',
      minHeight: '213px',
      padding: '45px',
      display: 'table'
    }}
  >
    <div style={{
      display: 'table-cell',
      verticalAlign: 'middle'
    }}>
      {props.children}
    </div>
  </div>
)

export default Lead