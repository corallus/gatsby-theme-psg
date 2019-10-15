import React, { useEffect, useReducer } from "react"
import { useEventsQuery } from "./event/Query";
import moment from 'moment';

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeEvent':
      window.localStorage.setItem("ev", action.payload.id)
      return { ...state, event: action.payload }

    default:
      return state;
  }
};

const EventContext = React.createContext(null)

function EventProvider ({ children }) {
  const events = useEventsQuery()
  const futureEvents = events.filter(event => moment().isBefore(moment(event.node.frontmatter.date)))

  const initialState = {
    event: futureEvents[0].node,
    events: futureEvents
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('ev')) {
      let browserEvent = futureEvents.find(item => item.node.id === localStorage.getItem('ev'))
      if (browserEvent) {
        dispatch({ type: 'changeEvent', payload: browserEvent.node })
      }
    }
  }, []);

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