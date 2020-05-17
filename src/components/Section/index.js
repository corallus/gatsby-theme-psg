import React from 'react'
import Heading from './Heading';
import Button from './Button'
import Container from "react-bootstrap/Container";
import './style.scss'

const Section = ({title, linkName = null, children, link = null, ...props}) => {
    return (
        <section {...props}>
            <header>
                <Heading title={title}/>
            </header>
            <Container>
                {children}
                {link && linkName &&
                <footer className="section-footer">
                    <Button link={link} text={linkName}/>
                </footer>
                }
            </Container>
        </section>
    )
}

export default Section