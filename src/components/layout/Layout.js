import React from 'react'
import Helmet from 'react-helmet'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import useSiteMetadata from '../shared/SiteMetadata'
import CookieConsent from "react-cookie-consent"
import '../../style/all.scss'
import { globalHistory } from "@reach/router"

const TemplateWrapper = ({ children }) => {
  const { title, description, menuItems, social, image } = useSiteMetadata()
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
      <Navbar menuItems={menuItems} social={social} isHome={isHome} />
      <div className="text-center text-md-left">{children}</div>
      <Footer menuItems={menuItems} social={social} isHome={isHome} />
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
    </React.Fragment>
  )
}

export default TemplateWrapper
