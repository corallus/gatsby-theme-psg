import React from 'react'
import Heading from './Heading';
import { MdArrowForward } from 'react-icons/md'
import { Link } from 'gatsby'

export default ( props ) => (
  <section className={"section section-"+props.name} style={{padding: '120px 0'}}>
    <header>
      <Heading title={props.title} />
    </header>
    <div className="container">
      <div className="mb-4">
      { props.children }
      </div>
      {props.link !== undefined &&
        <footer className="section-footer">
            <Link to={props.link} className="btn btn-section">{props.linkName} <MdArrowForward size={32} /></Link>
        </footer>
      }
    </div>
  </section>
)