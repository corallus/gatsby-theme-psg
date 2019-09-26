import React, { useEffect, useReducer } from "react"
import { useEventsQuery } from "./event/Query";
import moment from 'moment';

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeEvent':
      return { ...state, event: action.payload }

    default:
      return state;
  }
};

const EventContext = React.createContext(null)

function EventProvider ({ children }) {
  const events = useEventsQuery()
  const futureEvents = events.filter(event => moment().isBefore(moment(event.node.frontmatter.date)))

  const eventId = (typeof window !== 'undefined' && localStorage.getItem('ev')) || futureEvents[0].node.id

  const findEvent = (item) => {
    return item.node.id === eventId;
  }

  const initialState = {
    event: (events.find(findEvent) || futureEvents[0]).node,
    events: futureEvents
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(
    () => {
      window.localStorage.setItem("ev", state.event.id)
    },
    [state.event.id]
  );

  return (
    <EventContext.Provider value={{
      state, dispatch
    }}>
      {children}
    </EventContext.Provider>
  )
}

export default EventContext
export { EventProvider }