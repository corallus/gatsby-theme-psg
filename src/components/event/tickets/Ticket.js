import React from 'react'
import { Card } from 'react-bootstrap';
import Content from '../../Content'
import { graphql } from 'gatsby';
import Price from './price'

export default ({ ticket, early_bird, children }) => {
    const { title} = ticket.frontmatter

    return (
        <Card className="ticket h-100">
            <Card.Body className="d-flex flex-column">
                <h3>{title}</h3>
                <Price ticket={ticket} earlyBird={early_bird} />
                <div className="mb-auto">
                    <Content content={ticket.html} />
                </div>
                {children}
            </Card.Body>
        </Card>
    )
}

export const query = graphql`
    fragment Ticket on MarkdownRemark {
        html
        excerpt(pruneLength: 400)
        id
        fields {
            slug
        }
        frontmatter {
            order
            title
            url
            price
            price_early
            event {
                id
            }
        }
    }
`