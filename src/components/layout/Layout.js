import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'
import useSiteMetadata from '../SiteMetadata'
import CookieConsent from "react-cookie-consent"
import { globalHistory } from "@reach/router"
import './style.scss'
import '../../theme.scss'
import { EventProvider } from '../EventContext'
import {graphql, useStaticQuery} from "gatsby";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const NewsFlash = (props) => {
   return (
       <Modal
           {...props}
           size="sm"
           aria-labelledby="contained-modal-title-vcenter"
           centered
       >
           <Modal.Header closeButton>
               <Modal.Title id="contained-modal-title-vcenter">
                   {props.title}
               </Modal.Title>
           </Modal.Header>
           <Modal.Body dangerouslySetInnerHTML={{__html: props.html}}>

           </Modal.Body>
           <Modal.Footer>
               <Button onClick={props.onHide}>Close</Button>
           </Modal.Footer>
       </Modal>
   )
}

const TemplateWrapper = ({title: pageTitle = null, description, template = null, children }) => {
    const { title } = useSiteMetadata()
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
                <html lang="nl" />
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
            </Helmet>
            <EventProvider>
                <Navbar isHome={isHome} />
                <main className={(isHome ? 'is-home' : 'not-home') + ' wrapper'}>
                    {children}
                    <NewsFlash
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        title={data.markdownRemark.frontmatter.title}
                        html={data.markdownRemark.html}
                    />
                </main>
                <Footer />
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
                style={{ background: "#2B373B", textAlign: "right" }}
                expires={150}
            >
                <small>Wij gebruiken cookies volgens onze <a href="/cookie-policy.pdf">Cookie Policy</a></small>
            </CookieConsent>
        </React.Fragment >
    )
}

export default TemplateWrapper
