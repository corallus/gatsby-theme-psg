import React from 'react'

export default ({event}) => {
    return (
        <React.Fragment>
            <h1 className="text-capitalize">{event.frontmatter.date}</h1>
            <p className="lead">{event.frontmatter.location}</p>
        </React.Fragment>
    )
}