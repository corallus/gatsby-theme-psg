import React from 'react'
import { Link } from 'gatsby'

import Social from '../../Social'
import useSiteMetadata from '../../SiteMetadata'
import Logo from './Logo'
import './style.scss'

const Footer = () => {
  const { menuItems, social, title } = useSiteMetadata()
  return (
    <footer className="footer py-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-12 col-md-auto pl-0">
            <Logo />
          </div>
          <div className="col-12 col-md-9 d-flex align-content-end flex-wrap">
            <div className="navigation mb-2 w-100 d-md-flex justify-content-between">
              <ul className="nav main-menu">
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
              <ul className="nav social-menu">
                <Social social={social} />
              </ul>
            </div>
            <p className="text-muted text-xs mb-0">
              <small>© Copyright 2019, All Rights Reserved. <a href="/algemenevoorwaarden.pdf">General Conditions of {title}</a> apply to this event.</small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
