import React from 'react'
import Act from './Act';

export default ({highlighted=2, numItems=null, acts}) => {
  return (
    <React.Fragment>
      {acts && acts.length
        ?
        <div className="row">
          {acts.slice(0, highlighted).map(( act, index ) => (
            <div className="col-md-6 artist-highlighted" key={index}>
              <Act act={act} />
            </div>
          ))}
          {acts.slice(highlighted, numItems ? numItems : acts.length ).map(( act, index ) => (
            <div className="col-md-4" key={index}>
              <Act act={act} />
            </div>
          ))}
        </div>
        :
        <h3 className="text-center">To be announced</h3>
      }

    </React.Fragment>
  )
}

