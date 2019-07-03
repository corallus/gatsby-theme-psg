import React from 'react'
import { Link } from 'gatsby'

import Social from '../../shared/Social';
import useSiteMetadata from '../../shared/SiteMetadata';
import Logo from './Logo';

const Footer = () => {
  const { menuItems, social, title } = useSiteMetadata()
  return (
    <footer className="footer bg-dark text-light pb-5">
      <div className="container text-center text-md-left">
        <div className="row justify-content-end">
          <div className="col-12 col-md-3 pl-0">
            <Logo />
          </div>
          <div className="col-12 col-md-9 footer-links d-flex align-content-end flex-wrap py-3">
            <ul className="nav nav-footer main-menu text-uppercase mx-auto mx-md-0 mr-md-auto float-md-left">
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
            </ul>
            <ul className="nav text-uppercase mx-auto mx-md-0 ml-md-auto">
              <Social social={social} />
            </ul>
            <div>
              <p className="text-muted text-xs mb-0">
                <small>© Copyright 2019, All Rights Reserved. <a href="/algemenevoorwaarden.pdf">General Conditions of {title}</a> apply to this event.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
