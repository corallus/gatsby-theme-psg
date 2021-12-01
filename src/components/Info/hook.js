import React, {useContext} from 'react'
import Context from "../Events/Context";

const useInfo = (items) => {
    const {state} = useContext(Context)
    const {event} = state

    return items.filter(post =>
        !post.frontmatter.events ||
        post.frontmatter.events.length === 0 ||
        post.frontmatter.events.some(ev => ev.id === event.id)
    )
}

export default useInfo