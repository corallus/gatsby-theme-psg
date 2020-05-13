import React from 'react'
import Heading from './Heading';
import Button from './Button'

export default ({title, linkName = null, children, link = null, ...props}) => {
  return (
    <section {...props}>
      <header>
        <Heading title={title} />
      </header>
      <Container>
        {children}
        {link && linkName &&
          <footer className="section-footer">
            <Button link={link} text={linkName} />
          </footer>
        }
      </Container>
    </section>
  )
}