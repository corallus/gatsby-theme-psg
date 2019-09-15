import React, { useEffect, useReducer } from "react"
import { useEventsQuery } from "./event/Query";

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeEvent':
      return { event: action.payload }

    default:
      return state;
  }
};

const EventContext = React.createContext(null)

function EventProvider ({ children }) {
  const events = useEventsQuery()

  const eventId = (typeof window !== 'undefined' && localStorage.getItem('event')) || events[0].node.id

  const findEvent = (item) => {
    return item.node.id === eventId;
  }

  const initialState = {
    event: events.find(findEvent).node,
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(
    () => {
      window.localStorage.setItem("event", state.event.id)
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