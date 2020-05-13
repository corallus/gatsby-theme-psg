import React, { useContext, useState, useEffect } from 'react'
import EventContext from '../../../EventContext';
import { Dropdown } from 'react-bootstrap';
import Button from './Button'

const EventButton = ({ event }) => {
    const [isActive, setIsActive] = useState(false)
    const { state, dispatch } = useContext(EventContext)

    useEffect(() => {
        setIsActive(state.event.id === event.id);
    }, [state.event.id, event.id])

    return (
        <Dropdown.Item className={isActive && 'active'} onClick={() => dispatch({ type: 'changeEvent', payload: event })}>
            {event.frontmatter.dateShort} {event.frontmatter.name}
        </Dropdown.Item>
    )
}


export default () => {
    const { state } = useContext(EventContext)
    const { event, events } = state
    return (
        events.length > 1 &&
        <Dropdown className="event-selector">
            <Button event={event} />
            <Dropdown.Menu>
                {events.map(({ node: post }) => (
                    <EventButton event={post} key={post.id} />
                ))
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}