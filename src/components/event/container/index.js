import React, { useContext } from 'react'
import { ButtonGroup} from 'react-bootstrap'
import EventContext from '../../EventContext';
import Button from './Button'


export default () => {
  const { state, dispatch } = useContext(EventContext)
  return (
    state.events.length > 1 &&
    <ButtonGroup aria-label="Events" size="sm" className="mx-auto">
      {state.events.map(({ node: post }) => (
        <Button
            active={state.event.id===post.id}
            onClick={() => dispatch({ type: 'changeEvent', payload: post })}
            event={post} key={post.id}
        />
      ))}
    </ButtonGroup>
  )
}