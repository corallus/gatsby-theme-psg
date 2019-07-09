import React from 'react'
import { Tab, ButtonGroup, Nav } from 'react-bootstrap'
import { useEventsQuery } from './Query'

export default (props) => {
  const posts = useEventsQuery()
  const ChildComponent = props.childComponent

  return (
    <React.Fragment>
      {posts.length
        ?
        <Tab.Container id="event-tabs" defaultActiveKey={posts[0].node.id}>
          <ButtonGroup aria-label="Events" size="sm" className="text-uppercase">
            {posts.map(({ node: post }) => (
              <Nav.Link as="button" className="btn btn-outline-primary" key={post.id} eventKey={post.id}>{post.frontmatter.name}</Nav.Link>
            ))}
          </ButtonGroup>
          <Tab.Content className="py-3">
            {posts.map(({ node: post }) => (
              <Tab.Pane eventKey={post.id} key={post.id}>
                <ChildComponent event={post} {...props} />
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
        :
        <h3 className="text-center">To be announced</h3>
      }
    </React.Fragment>
  )
}