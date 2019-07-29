import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import { EventContext } from '../layout/Layout';

export default () => {

  return (
    <React.Fragment>
      <EventContext.Consumer>
        {({ event, updateEvent, events }) => (
          events.length > 1 ?
            <ButtonGroup aria-label="Events" size="sm" className="text-uppercase mx-auto">
              {events.map(({ node: post }) => (
                <Button
                  variant="outline-primary"
                  className={(event.id === post.id ? ' active' : '')}
                  key={post.id} onClick={() => updateEvent(post)}
                >
                  {post.frontmatter.name} {post.frontmatter.dateShort}
                </Button>
              ))}
            </ButtonGroup>
            :
            <h3 className="text-center">To be announced</h3>
        )}
      </EventContext.Consumer>
    </React.Fragment>
  )
}