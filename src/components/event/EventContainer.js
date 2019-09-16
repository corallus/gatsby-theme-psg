import React, { useEffect, useState, useContext } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import EventContext from '../EventContext';
import { useEventsQuery } from './Query';

const EventButton = ({event }) => {
  const [isActive, setIsActive] = useState(false)
  const { state, dispatch } = useContext(EventContext)
  useEffect(() => {
    setIsActive(state.event.id === event.id);
  }, [])
  useEffect(() => {
    setIsActive(state.event.id === event.id)
  }, [state.event.id, event.id])
  return (
    <Button
      variant="event-selector"
      className={isActive && 'active'}
      onClick={() => dispatch({ type: 'changeEvent', payload: event })}
    >
      {event.frontmatter.dateShort} <span className="d-none d-sm-inline">{event.frontmatter.name}</span>
    </Button>
  )
}

export default () => {
  const events = useEventsQuery()
  return (
    <ButtonGroup aria-label="Events" size="sm" className="text-uppercase mx-auto">
      {events.map(({ node: post}) => (
        <EventButton event={post} key={post.id} />
      ))}
    </ButtonGroup>
  )
}