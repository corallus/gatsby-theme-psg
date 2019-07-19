import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Social from "../../Social"
import useSiteMetadata from "../../SiteMetadata";
import Logo from "./Logo";
import './style.scss'
import { MdArrowForward } from "react-icons/md";
import EventToggler from "./EventToggler";

export default ({ scrollOffset, isHome = false }) => {
  const { menuItems, social, title, navbarBackground, navbarVariant } = useSiteMetadata()

  const [scroll, setScroll] = useState(false);
  useEffect(
    () => {
      const handleScroll = () => setScroll(window.scrollY > scrollOffset);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener('scroll', handleScroll)
    },
  );

  return (
    <Navbar bg={navbarBackground} variant={navbarVariant} fixed="top" expand={null} className={'container-fluid no-gutters' + (isHome ? ' is-home' : ' not-home') + (scroll ? ' scroll' : '')}>

      <div className="col-xs-8 order-1 col-sm-5 order-sm-3 text-right">
        <div className="d-none d-lg-inline-block">
          <ul className="nav">
            <Social social={social} />
            <li className="nav-item">
              <span className="nav-link">
                <Link to="/tickets" className="btn btn-tickets">
                  TICKETS <MdArrowForward size={32} />
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xs-2 order-2 col-sm-2 text-center">
        {!isHome || scroll
          ?
          <Link to="/" className="navbar-brand">
            <Logo title={title} />
          </Link>
          : ''
        }
      </div>
      <div className="col-xs-2 order-3 col-sm-5 order-sm-1 text-right text-sm-left">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="float-md-left">
          <span className="mr-2 d-inline-block align-middle bar">
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </span>
          <span className="d-none d-sm-inline">MENU</span>
        </Navbar.Toggle>
        <EventToggler />
      </div>
      <Navbar.Collapse id="basic-navbar-nav" className="order-4 navbar-nav-left text-white">
        <Nav as="ul" className="text-uppercase main-menu">
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
          <Link to="/tickets" className="btn btn-tickets">
            TICKETS <MdArrowForward size={32} />
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}