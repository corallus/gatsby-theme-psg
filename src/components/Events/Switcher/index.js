import React, {useContext} from 'react'
import Context from '../Context';
import {Button, ButtonGroup, Hidden} from "@material-ui/core";

export default () => {
    const {state, dispatch} = useContext(Context)
    return (
        state.events.length > 1 &&

        <ButtonGroup color="primary" aria-label="event-selector">
            {state.events.map(post => (
                <Button
                    onClick={() => dispatch({type: 'changeEvent', payload: post})}
                    event={post}
                    key={post.id}
                >
                    {state.event.frontmatter.dateShort} <Hidden smDown>{state.event.frontmatter.name}</Hidden>
                </Button>
            ))}
        </ButtonGroup>
    )
}