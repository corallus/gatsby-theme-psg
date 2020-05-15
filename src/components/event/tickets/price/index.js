import React from 'react'
import { Col, Row, Badge } from 'react-bootstrap';

const EarlyBirdPrice = ({price}) => {
    return (
        <>
            <Badge variant="danger" className="text-uppercase">Early bird</Badge>
            <div className="regular-price">
                €{price.toFixed(2)}
            </div>
        </>
    )
}

const Price = ({ticket, earlyBird}) => {
    return (
        <Row className={'price my-2 ' + (earlyBird ? 'early' : 'regular')}>
            {earlyBird &&
            <Col className="col-auto">
                <EarlyBirdPrice price={ticket.frontmatter.price_early} />
            </Col>
            }
            {ticket.frontmatter.price &&
            <Col>
                {earlyBird ?
                <del>
                    <RegularPrice price={ticket.frontmatter.price}/>
                </del>
                :
                <RegularPrice price={ticket.frontmatter.price}/>
                }
            </Col>
            }
        </Row>
    )
}

const RegularPrice = ({price}) => {
    return (
        <span className={`current-price`}><small>€</small> {price.toFixed(2)}</span>
    )
}

export default Price

