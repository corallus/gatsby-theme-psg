import React from 'react'
import {Col, Row} from 'react-bootstrap';
import RegularPrice from "./Regular";
import EarlyBirdPrice from "./EarlyBird";

const Price = ({ticket, earlyBird}) => {
    return (
        <Row className={'price my-2 ' + (earlyBird ? 'early' : 'regular')}>
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

