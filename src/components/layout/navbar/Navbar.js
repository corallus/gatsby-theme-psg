import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Social from "../../Social"
import useSiteMetadata from "../../SiteMetadata";
import Logo from "./Logo";
import './style.scss'
import EventToggler from "./EventToggler";
import TicketButton from './TicketButton'

export default ({ scrollOffset, isHome = false }) => {
  const { menuItems, social, title, navbarBackground, navbarVariant } = useSiteMetadata()

  const [scroll, setScroll] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(
    () => {
      const handleScroll = () => {
        setShowLogo(window.scrollY > scrollOffset);
        setScroll(window.scrollY > 0);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener('scroll', handleScroll)
    },
  );

  return (
    <Navbar bg={navbarBackground} variant={navbarVariant} fixed="top" expand={null}
      className={'container-fluid no-gutters' + (isHome ? ' is-home' : ' not-home') + (scroll ? ' scroll' : '')}>

      <div className="col-4 order-lg-4 d-none d-lg-block">
        <ul className="nav nav-right justify-content-end">
          <Social social={social} />
          <li className="nav-item">
            <span className="nav-link">
              <TicketButton />
            </span>
          </li>
        </ul>
      </div>
      <div className="col-4 order-2 order-lg-3 text-center">
        {!isHome || showLogo
          ?
          <Link to="/" className="navbar-brand">
            <Logo title={title} />
          </Link>
          : ''
        }
      </div>
      <div className="col-3 col-lg-1 order-3 order-lg-1 text-right text-lg-left">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="float-lg-left">
          <span className="mr-2 d-inline-block align-middle bar">
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </span>
          <span className="d-none d-md-inline">MENU</span>
        </Navbar.Toggle>
      </div>
      <div className="col-3 col-lg-3 order-1 order-lg-2 text-right text-md-left">
        <EventToggler />
      </div>
      <Navbar.Collapse id="basic-navbar-nav" className="navbar-nav-left order-6">
        <Nav as="ul" className="main-menu navbar-nav">
          {menuItems.map((item, i) => (
            <li key={i} className="nav-item">
              {item.external
                ?
                <a href={item.link} rel="noopener noreferrer" className="nav-link" target="_blank">{item.name}</a>
                :
                <Link to={item.link} className="nav-link" activeClassName="active">{item.name}</Link>
              }
            </li>
          ))}
        </Nav>
        <div className="d-block d-lg-none">
          <Nav as="ul" className="nav-social my-2">
            <Social social={social} />
          </Nav>
          <TicketButton />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}