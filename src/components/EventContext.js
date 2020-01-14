import React, { useEffect, useReducer } from "react"
import { useEventsQuery } from "./event/Query";

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
  const activeEvents = events.filter(event => event.node.frontmatter.active)

  const initialState = {
    event: activeEvents[0].node,
    events: activeEvents
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('ev')) {
      let browserEvent = activeEvents.find(item => item.node.id === localStorage.getItem('ev'))
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