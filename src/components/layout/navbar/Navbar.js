import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import SocialMenu from "../../Social"
import useSiteMetadata from "../../SiteMetadata";
import Logo from "./Logo";
import './style.scss'
import EventToggler from "./EventToggler";
import TicketButton from './TicketButton'

const Toggler = () => {
  return (
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-right text-lg-left align-middle">
      <span className="mr-2 d-inline-block align-middle bar">
        <span className="icon-bar top-bar"></span>
        <span className="icon-bar middle-bar"></span>
        <span className="icon-bar bottom-bar"></span>
      </span>
      <span className="d-none d-md-inline">MENU</span>
    </Navbar.Toggle>
  )
}

const SecondaryMenu = () => {
  return (
    <Nav as="ul" className="justify-content-center justify-content-lg-end align-items-center flex-row">
      <SocialMenu />
      <li className="nav-item">
        <span className="nav-link">
          <TicketButton />
        </span>
      </li>
    </Nav>
  )
}

export const PrimaryMenu = () => {
  const { menuItems } = useSiteMetadata()
  return (
    menuItems.map((item, i) => (
      <li key={i} className="nav-item">
        {item.external
          ?
          <a href={item.link} rel="noopener noreferrer" className="nav-link" target="_blank">{item.name}</a>
          :
          <Link to={item.link} className="nav-link" activeClassName="active">{item.name}</Link>
        }
      </li>
    ))
  )
}

const CollapseMenu = () => {
  return (
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav as="ul" className="main-menu">
        <PrimaryMenu />
      </Nav>
      <div className="d-block d-lg-none">
        <SecondaryMenu />
      </div>
    </Navbar.Collapse>
  )
}

export default ({ scrollOffset, isHome = false }) => {
  const { title } = useSiteMetadata()

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
    <Navbar variant={(scroll ? 'light' : 'dark')} fixed="top" expand={null}>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="d-none d-lg-inline-block">
            <Toggler />
          </div>
          <div className="d-inline">
            <EventToggler />
          </div>
        </div>
        {!isHome || showLogo
          ?
          <Link to="/" className="navbar-brand">
            <Logo title={title} />
          </Link>
          : ''
        }
        <div className="text-right">
          <div className="d-none d-lg-block secondary-menu-navbar">
            <SecondaryMenu />
          </div>
          <div className="d-block d-lg-none">
            <Toggler />
          </div>
        </div>
      </div>
      <CollapseMenu />
    </Navbar>
  )
}