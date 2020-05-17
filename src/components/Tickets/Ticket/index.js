import React from 'react'
import {Card} from 'react-bootstrap'
import Content from '../../Content'
import Price from './Price'
import './style.scss'

const Ticket = ({ticket, early_bird, children}) => {

    return (
        <Card className="ticket h-100">
            <Card.Body className="d-flex flex-column">
                <h3>{ticket.title}</h3>
                <Price ticket={ticket} earlyBird={early_bird}/>
                <div className="mb-auto">
                    <Content content={ticket.html}/>
                </div>
                {children}
            </Card.Body>
        </Card>
    )
}

export default Ticket
