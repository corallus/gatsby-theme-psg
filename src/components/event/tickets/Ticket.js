import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { MdArrowForward } from 'react-icons/md';

export default ({ ticket, early_bird }) => {
  const { name, price, price_early, url } = ticket
  const early_bird_price = early_bird && (price_early !== null)
  const currentPrice = (early_bird_price ? price_early : price).toFixed(2).split('.')

  return (
    <Card className="ticket">
      <Card.Body>
        <h3>{name}</h3>
        <div className={'row price my-2 ' + (early_bird_price ? 'early' : 'regular')}>
          {early_bird_price &&
            <React.Fragment>
              <div className="col-auto">
                <div className="badge badge-danger text-uppercase">
                  Early bird
                </div>
                <div className="regular-price">
                  {price.toFixed(2)}
                </div>
              </div>
            </React.Fragment>
          }
          <div className="col">
            <span className="current-price">{currentPrice[0]}<span className="decimals">{currentPrice[1]}</span></span>
          </div>
        </div>
        {url !== null &&
        <Button href={url} className="btn btn-secundary">
          Koop ticket <MdArrowForward size={32} />
        </Button>
        }
      </Card.Body>
    </Card>
  )
}