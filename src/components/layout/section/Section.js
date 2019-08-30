import React from 'react'
import Heading from './Heading';
import './style.scss'
import Button from './Button'

export default ({title, linkName, className, children, link}) => {
  return (
    <section className={'section '+className}>
      <header>
        <Heading title={title} />
      </header>
      <div className="container">
        <div className="mb-5">
          {children}
        </div>
        {link !== undefined && linkName !== undefined &&
          <footer className="section-footer">
            <Button link={link} text={linkName} />
          </footer>
        }
      </div>
    </section>
  )
}