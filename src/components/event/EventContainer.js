import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { EventContext } from '../layout/Layout';

export default () => {

  return (
    <React.Fragment>
      <EventContext.Consumer>
        {({ event, updateEvent, events }) => (
            events.length > 1 &&
            <ButtonGroup aria-label="Events" size="sm" className="text-uppercase mx-auto">
              {events.map(({ node: post }) => (
                <Button
                  variant="event-selector"
                  className={(event.id === post.id ? ' active' : '')}
                  key={post.id} onClick={() => updateEvent(post.id)}
                >
                  {post.frontmatter.dateShort} <span className="d-none d-sm-inline">{post.frontmatter.name}</span>
                </Button>
              ))}
            </ButtonGroup>
        )}
      </EventContext.Consumer>
    </React.Fragment>
  )
}