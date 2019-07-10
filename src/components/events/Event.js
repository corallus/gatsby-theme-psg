import React from 'react'
import { Link } from 'gatsby';

export default ({event}) => {
    return (
        <React.Fragment>
            <span className="h2 text-capitalize">
                {event.frontmatter.date}
            </span>
            <p className="lead">{event.frontmatter.location}</p>
            <Link to='/tickets' className="btn btn-secundary">Koop je tickets</Link>
        </React.Fragment>
    )
}