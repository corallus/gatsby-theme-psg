import React, { useEffect, useState, useContext } from 'react'
import { EventContext } from '../../layout/Layout';
import Ticket from './Ticket';
import moment from 'moment';

export default () => {
  const { event } = useContext(EventContext)

  const [earlyBird, setEarlyBird] = useState(moment().isBefore(moment(event.early_bird)))

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setEarlyBird(moment().isBefore(moment(event.early_bird)))
  }

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

