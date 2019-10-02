import React from 'react'
import Heading from './Heading';
import Button from './Button'

export default ({title, linkName = null, className, children, link = null}) => {
  return (
    <section className={'section '+className}>
      <header>
        <Heading title={title} />
      </header>
      <div className="container">
        {children}
        {link !== null && linkName !== null &&
          <footer className="section-footer">
            <Button link={link} text={linkName} />
          </footer>
        }
      </div>
    </section>
  )
}