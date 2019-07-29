import React from 'react'
import Heading from './Heading';
import { MdArrowForward } from 'react-icons/md'
import { Link } from 'gatsby'
import './style.scss'

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
            <Link to={props.link} className="btn btn-section">{props.linkName} <MdArrowForward size={32} /></Link>
          </footer>
        }
      </div>
    </section>
  )
}