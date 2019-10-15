import React from 'react'
import { Card, Col, Row, Badge } from 'react-bootstrap';
import Content from '../../Content'
import { graphql } from 'gatsby';

export default ({ ticket, early_bird, children }) => {
  const { title, price, price_early } = ticket.frontmatter
  const early_bird_price = early_bird && (price_early !== null)
  const currentPrice = (price ? (early_bird_price ? price_early : price).toFixed(2).split('.') : null)

  return (
    <Card className="ticket h-100">
      <Card.Body className="d-flex flex-column">
        <h3 className="mb-auto">{title}</h3>
        {currentPrice &&
          <Row className={'price my-2 ' + (early_bird_price ? 'early' : 'regular')}>
            {early_bird_price &&
              <Col className="col-auto">
                <Badge variant="danger" className="text-uppercase">
                  Early bird
              </Badge>
                <div className="regular-price">
                  €{price.toFixed(2)}
                </div>
              </Col>
            }
            <Col>
              <span className="current-price">
                €{currentPrice[0]}
                <span className="decimals">
                  {currentPrice[1]}
                </span>
              </span>
            </Col>
          </Row>
        }
        <Content content={ticket.html} /> 
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