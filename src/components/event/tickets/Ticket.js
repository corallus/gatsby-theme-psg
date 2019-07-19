import React from 'react'
import { Card } from 'react-bootstrap';
import { MdArrowForward } from 'react-icons/md';
import { Link } from 'gatsby';

export default ({ ticket, early_bird }) => {
  const { name, price, price_early, url } = ticket
  const early_bird_price = early_bird && price_early !== undefined
  const currentPrice = early_bird_price ? price_early : price

  return (
    <Card className="ticket">
      <Card.Body>
        <h3>{name}</h3>
        <div className="row">
          {early_bird_price ?
            <React.Fragment>
              <div className="col-auto">
                <div className="badge badge-danger text-uppercase">
                  Early bird
                </div>
                <div>
                  <strike>{price}</strike>
                </div>
              </div>
              <div className="col">
                <span>{price_early}</span>
              </div>
            </React.Fragment>
            :
            <span>{price}</span>
          }
        </div>
        <Link to={url} className="btn btn-secundary">
          TICKETS <MdArrowForward size={32} />
        </Link>
      </Card.Body>
    </Card>
  )
}