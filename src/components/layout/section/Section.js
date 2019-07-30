import React from 'react'
import Heading from './Heading';
import './style.scss'
import Button from './Button'

export default (props) => {
  const {style, className} = props
  return (
    <section style={style} className={'section'+(className ? ' '+className: '')}>
      <header>
        <Heading title={props.title} />
      </header>
      <div className="container">
        <div className="mb-5">
          {props.children}
        </div>
        {props.link !== undefined &&
          <footer className="section-footer">
            <Button link={props.link} text={props.linkName} />
          </footer>
        }
      </div>
    </section>
  )
}