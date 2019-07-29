import React from 'react'
import { EventContext } from '../Layout';
import { Form } from 'react-bootstrap';

export default () => (
    <EventContext.Consumer>
        {({ event, updateEvent, events }) => (
            events.length > 1 &&
            <Form className="event-selector d-none d-md-flex">
                <Form.Group controlId="eventSelector" className="mb-0">
                    <Form.Control size="sm" as="select" onChange={e => updateEvent(JSON.parse(e.target.value))} value={JSON.stringify(event)}>
                        {events.map((item, i) => (
                            <option key={item.node.id} value={JSON.stringify(item.node)}>
                                {item.node.frontmatter.dateShort} {item.node.frontmatter.name}
                            </option>
                        ))
                        }
                    </Form.Control>
                </Form.Group>
            </Form>
        )}
    </EventContext.Consumer>
)