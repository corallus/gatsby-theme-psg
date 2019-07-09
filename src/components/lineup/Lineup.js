import React from 'react'
import Artist from '../Artist';
import { useLineupQuery } from './Query'

export default ({highlighted=2, numItems=-1, event=null}) => {
  const posts = useLineupQuery()
  console.log(numItems)

  return (
    <React.Fragment>
      {posts && posts.length
        ?
        <div className="row">
          {posts.filter(item => item.node.frontmatter.event.id === event.id).slice(0, highlighted).map(({ node: post }) => (
            <div className="col-md-6" key={post.id}>
              <Artist act={post} tag="h3" />
            </div>
          ))}
          {posts.filter(item => item.node.frontmatter.event.id === event.id).slice(highlighted, numItems+1).map(({ node: post }) => (
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

