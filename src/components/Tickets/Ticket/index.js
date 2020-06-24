import React from 'react'
import {Card} from 'react-bootstrap'
import Content from '../../Content'
import Price from './Price'
import showdown from 'showdown'

const converter = new showdown.Converter()

const Ticket = ({ticket, early_bird, children}) => {
    return (
        <Card className={"h-100 ticket"}>
            <Card.Body className="d-flex flex-column">
                <h3>{ticket.title}</h3>
                <Price ticket={ticket} earlyBird={early_bird}/>
                <div className="mb-auto">
                    <Content content={converter.makeHtml(ticket.body)}/>
                </div>
                {children}
            </Card.Body>
        </Card>
    )
}

export default Ticket
