import React, { useContext } from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import EventContext from '../EventContext';

const EventButton = ({ event }) => {
  const { state, dispatch } = useContext(EventContext)
  return (
    <Button
      // @ts-ignore
      variant="event-selector"
      active={state.event.id===event.id}
      onClick={() => dispatch({ type: 'changeEvent', payload: event })}
    >
      {event.frontmatter.dateShort} <span className="d-none d-sm-inline">{event.frontmatter.name}</span>
    </Button>
  )
}

export default () => {
  const { state } = useContext(EventContext)
  return (
    state.events.length > 1 &&
    <ButtonGroup aria-label="Events" size="sm" className="text-uppercase mx-auto">
      {state.events.map(({ node: post }) => (
        <EventButton event={post} key={post.id} />
      ))}
    </ButtonGroup>
  )
}