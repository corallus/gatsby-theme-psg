import React from 'react'
import {Col, Row} from 'react-bootstrap';
import RegularPrice from "./Regular";
import EarlyBirdPrice from "./EarlyBird";
import './style.scss'

const Price = ({ticket, earlyBird}) => {
    return (
        <Row className={'Price my-2 ' + (earlyBird ? 'early' : 'regular')}>
            {earlyBird &&
            <Col className="col-auto">
                <EarlyBirdPrice price={ticket.price_early}/>
            </Col>
            }
            {ticket.price &&
            <Col>
                {earlyBird ?
                    <del>
                        <RegularPrice price={ticket.price}/>
                    </del>
                    :
                    <RegularPrice price={ticket.price}/>
                }
            </Col>
            }
        </Row>
    )
}

export default Price

