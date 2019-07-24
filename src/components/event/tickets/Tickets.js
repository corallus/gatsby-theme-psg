import React, { useContext } from 'react'
import { EventContext } from '../../layout/Layout';
import Ticket from './Ticket';
import moment from 'moment';

export default () => {
  const { event } = useContext(EventContext)
  const earlyBird = moment().isBefore(moment(event.frontmatter.early_bird))

  return (
    <div className="row">
      {event.frontmatter.tickets.map((ticket, i) => (
        <div className="col-md-4" key={i}>
          <Ticket ticket={ticket} early_bird={earlyBird} />
        </div>
      ))}
    </div>
  )
}

