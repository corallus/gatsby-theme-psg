import React from 'react'
import { Link } from 'gatsby';
import { MdArrowForward } from 'react-icons/md';
import { EventContext } from '../layout/Layout';
import Content from '../Content';

export default () => {
    return (
        <EventContext.Consumer>
            {({ event }) => (
                event &&
                <div className="event">
                    <span className="h2">
                        {event.frontmatter.location}
                    </span>
                    <Content content={event.html} className="lead" />
                    <Link to='/tickets' className="btn btn-tickets">Koop je tickets <MdArrowForward size={32} /></Link>
                </div>
            )}
        </EventContext.Consumer> 
    )
}