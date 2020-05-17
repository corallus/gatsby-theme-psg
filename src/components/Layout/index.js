import React, {useEffect} from 'react'
import {Helmet} from 'react-helmet'
import Footer from './Footer/index'
import Navbar from './Navbar/index'
import useSiteMetadata from '../SiteMetadata'
import CookieConsent from "react-cookie-consent"
import {globalHistory} from "@reach/router"
import './style.scss'
import '../../theme.scss'
import {EventProvider} from '../Events/Context'
import {graphql, useStaticQuery} from "gatsby";
import NewsFlash from "./NewsFlash";


const Layout = ({title: pageTitle = null, description, template = null, children}) => {
    const {title} = useSiteMetadata()
    const [modalShow, setModalShow] = React.useState(false);
    const isHome = globalHistory.location.pathname === '/'
    const data = useStaticQuery(graphql`
        query PopupQuery {
            markdownRemark(frontmatter: {templateKey: {eq: "popup"}}) {
                html
                frontmatter {
                    title
                    active
                    datetime
                }
            }
        }`
    )

    useEffect(() => {
        const last_seen = localStorage.getItem('last_seen');
        const new_date = data.markdownRemark.frontmatter.datetime
        if ((!last_seen || last_seen < new_date) && data.markdownRemark.frontmatter.active) {
            setModalShow(true)
            localStorage.setItem('last_seen', data.markdownRemark.frontmatter.datetime);
        }
    }, []);

    return (
        <React.Fragment>
            <Helmet bodyAttributes={{
                class: (template ? template : '')
            }}>
                <html lang="nl"/>
                <title>{pageTitle}</title>
                <meta name="description" content={description}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta property="og:title" content={title}/>
                <meta property="og:url" content="/"/>
            </Helmet>
            <EventProvider>
                <Navbar isHome={isHome}/>
                <main className={(isHome ? 'is-home' : 'not-home') + ' wrapper'}>
                    {children}
                    <NewsFlash
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        title={data.markdownRemark.frontmatter.title}
                        html={data.markdownRemark.html}
                    />
                </main>
                <Footer/>
            </EventProvider>
            <CookieConsent
                enableDeclineButton
                declineButtonText="Weigeren"
                declineButtonClasses="btn btn-sm btn-danger"
                buttonClasses="btn btn-sm btn-success"
                buttonStyle={{}}
                declineButtonStyle={{}}
                location="bottom"
                buttonText="Accepteren"
                style={{background: "#2B373B", textAlign: "right"}}
                expires={150}
            >
                <small>Wij gebruiken cookies volgens onze <a href="/cookie-policy.pdf">Cookie Policy</a></small>
            </CookieConsent>
        </React.Fragment>
    )
}

export default Layout
