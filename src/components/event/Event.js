import React from 'react'
import { Link } from 'gatsby';
import { MdArrowForward } from 'react-icons/md';
import { EventContext } from '../layout/Layout';

export default () => {
    return (
        <EventContext.Consumer>
            {({ event }) => (
                event &&
                <div>
                    <span className="h2 text-uppercase">
                        {event.frontmatter.date}
                    </span>
                    <p className="lead">{event.frontmatter.location}</p>
                    <Link to='/tickets' className="btn btn-secundary">Koop je tickets <MdArrowForward size={32} /></Link>
                </div>
            )}
        </EventContext.Consumer> 
    )
}