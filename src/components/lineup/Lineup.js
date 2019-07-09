import React from 'react'
import Artist from '../Artist';
import { useLineupQuery } from './Query'

export default ({highlighted=2, numItems=-1, eventId}) => {
  const posts = useLineupQuery()

  return (
    <React.Fragment>
      {posts && posts.length
        ?
        <div className="row">
          {posts.slice(0, highlighted).filter(item => item.node.frontmatter.event.frontmatter.date === eventId).map(({ node: post }) => (
            <div className="col-md-6" key={post.id}>
              <Artist act={post} tag="h3" />
            </div>
          ))}
          {posts.slice(highlighted, numItems+1).filter(item => item.node.frontmatter.event.frontmatter.date === eventId).map(({ node: post }) => (
            <div className="col-md-4" key={post.id}>
              <Artist act={post} tag="h3" />
            </div>
          ))}
        </div>
        :
        <h3 className="text-center">To be announced</h3>
      }

    </React.Fragment>
  )
}

