import React from 'react'
import { Card, Col, Row, Badge } from 'react-bootstrap';
import Button from './Button'

export default ({ ticket, early_bird }) => {
  const { name, price, price_early, url } = ticket
  const early_bird_price = early_bird && (price_early !== null)
  const currentPrice = (early_bird_price ? price_early : price).toFixed(2).split('.')

  return (
    <Card className="ticket">
      <Card.Body>
        <h3>{name}</h3>
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
        {url !== null &&
          <Button url={url} />
        }
      </Card.Body>
    </Card>
  )
}