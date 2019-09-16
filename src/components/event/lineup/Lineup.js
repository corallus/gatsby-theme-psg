import React, {useContext} from 'react'
import Act from './Act';
import { useLineupQuery } from './Query'
import EventContext from '../../EventContext';

export default ({highlighted=2, numItems=null}) => {
  const data = useLineupQuery()
  const { state } = useContext(EventContext)
  const { event } = state
  const acts = (event !== null ? data.filter(item => item.node.frontmatter.event.id === event.id): data)


  return (
    <React.Fragment>
      {acts && acts.length
        ?
        <div className="row">
          {acts.slice(0, highlighted).map(({ node: post }) => (
            <div className="col-md-6 artist-highlighted" key={post.id}>
              <Act act={post} />
            </div>
          ))}
          {acts.slice(highlighted, numItems ? numItems : acts.length ).map(({ node: post }) => (
            <div className="col-md-4" key={post.id}>
              <Act act={post} />
            </div>
          ))}
        </div>
        :
        <h3 className="text-center">To be announced</h3>
      }

    </React.Fragment>
  )
}

