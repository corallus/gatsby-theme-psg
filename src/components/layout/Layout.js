import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import useSiteMetadata from '../SiteMetadata'
import CookieConsent from "react-cookie-consent"
import { globalHistory } from "@reach/router"
import { useEventsQuery } from '../events/Query';

export const eventContext = React.createContext(JSON.parse(localStorage.getItem('event')))

function EventProvider ({ children }) {
  const events = useEventsQuery()
  const [event, setEvent] = useState(JSON.parse(localStorage.getItem('event')) || events[0].node);
  useEffect(() => {
    // Update the document title using the browser API
    localStorage.setItem('event', JSON.stringify(event))
  });

  return (
    <EventContext.Provider value={{
      events: events,
      event: event,
      updateEvent: (value) => {
        setEvent(value)
      }
    }}>
      {children}
    </EventContext.Provider>

  )

}
export const EventContext = React.createContext(null)

const TemplateWrapper = ({ children }) => {
  const { title, description, image, scrollOffset } = useSiteMetadata()
  const isHome = globalHistory.location.pathname === '/'

  return (
    <React.Fragment>
      <Helmet>
        <html lang="nl" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={image} />
      </Helmet>
      <EventProvider>
        <Navbar isHome={isHome} scrollOffset={scrollOffset} />
        {children}
      </EventProvider>
      <Footer />
      <CookieConsent
        enableDeclineButton
        declineButtonText="Weigeren"
        declineButtonClasses="btn btn-sm btn-danger"
        buttonClasses="btn btn-sm btn-success"
        buttonStyle={{}}
        declineButtonStyle={{}}
        location="bottom"
        buttonText="Accepteren"
        style={{ background: "#2B373B", textAlign: "right" }}
        expires={150}
      >
        <small>Wij gebruiken cookies volgens onze <a href="/cookie-policy.pdf">Cookie Policy</a></small>
      </CookieConsent>
    </React.Fragment >
  )
}

export default TemplateWrapper
