import React from 'react'
import { EventContext } from '../Layout';
import { Dropdown } from 'react-bootstrap';

export default () => (
    <EventContext.Consumer>
        {({ event, updateEvent, events }) => (
            events.length > 1 &&
            <Dropdown className="event-selector">
                <Dropdown.Toggle variant="link" size="sm" className="py-0" id="dropdown-basic">
                    {event.frontmatter.dateShort} <span className="d-none d-sm-inline">{event.frontmatter.name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {events.map((item, i) => (
                        <Dropdown.Item onClick={() => updateEvent(item.node.id)} key={i}>
                            {item.node.frontmatter.dateShort} {item.node.frontmatter.name}
                        </Dropdown.Item>
                    ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        )}
    </EventContext.Consumer>
)