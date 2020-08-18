import React from 'react'
import {Link} from 'gatsby'
import Heading from './Heading'
import Button from './Button'
import {Container} from 'react-bootstrap'
import './style.scss'

export default ({title, linkName = null, className, children, link = null}) => {
    return (
        <section className={'section py-5 ' + className}>
            <header>
                <Heading title={title}/>
            </header>
            <Container>
                {children}
                {link !== null && linkName !== null &&
                <footer className="text-center my-5">
                    <Button as={Link} to={link}>
                        {linkName}
                    </Button>
                </footer>
                }
            </Container>
        </section>
    )
}