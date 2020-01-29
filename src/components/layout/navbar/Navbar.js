import React, { useContext, useState, useEffect } from "react"
import { Link } from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import EventContext from '../../EventContext';
import SocialMenu from "../../Social"
import useSiteMetadata from "../../SiteMetadata";
import Logo from "./Logo";
import './style.scss'
import EventToggler from "./EventToggler";
import TicketButton from './TicketButton'

const Toggler = () => {
  return (
    <>
      <span className="mr-2 d-inline-block align-middle bar">
        <span className="icon-bar top-bar"></span>
        <span className="icon-bar middle-bar"></span>
        <span className="icon-bar bottom-bar"></span>
      </span>
      <span className="d-none d-md-inline">MENU</span>
    </>
  )
}

const SecondaryMenu = () => {
  return (
    <Nav as="ul" className="justify-content-center justify-content-lg-end align-items-center flex-row secondary-menu">
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
  const { state } = useContext(EventContext)
  const { event } = state
  return (
    <>
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
    {event.frontmatter.links && event.frontmatter.links.map((item, i) => (
      <li key={i} className="nav-item">
          <a href={item.url} rel="noopener noreferrer" className="nav-link" target="_blank">{item.name}</a>
      </li>
    ))}
    </>
  )
}

const CollapseMenu = () => {
  return (
    <>
      <Nav as="ul" className="main-menu">
        <PrimaryMenu />
      </Nav>
      <div className="d-block d-lg-none">
        <SecondaryMenu />
      </div>
    </>
  )
}

export default ({ isHome = false }) => {
  const { title, scrollOffset } = useSiteMetadata()

  const [scroll, setScroll] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

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
    <Navbar variant={(scroll ? 'light' : 'dark')} fixed="top" expand={null} className={(collapsed ? 'navbar-collapsed': 'navbar-expanded')} collapseOnSelect={true} onToggle={() => setCollapsed(!collapsed)}>
      <div className="d-flex w-100 justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="d-none d-lg-inline-block">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-right text-lg-left align-middle">
              <Toggler />
            </Navbar.Toggle>
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
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-right text-lg-left align-middle">
              <Toggler />
            </Navbar.Toggle>
          </div>
        </div>
      </div>
      <Navbar.Collapse id="basic-navbar-nav">
        <CollapseMenu />
      </Navbar.Collapse>
    </Navbar>
  )
}