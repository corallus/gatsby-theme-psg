import React from 'react'
import SocialMenu from '../../Social'
import useSiteMetadata from '../../SiteMetadata'
import Logo from './Logo'
import './style.scss'
import { PrimaryMenu } from '../navbar/Navbar'

const Footer = () => {
  const { title } = useSiteMetadata()
  return (
    <footer className="footer">
      <div className="footer-inner w-100 h-100 py-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-auto mx-auto mx-lg-0 pl-0">
              <Logo />
            </div>
            <div className="col-12 col-lg-9 d-flex align-content-end px-4 flex-wrap">
              <div className="navigation mb-2 w-100 d-md-flex justify-content-between">
                <ul className="nav main-menu justify-content-center justify-content-md-start">
                  <PrimaryMenu />
                </ul>
                <ul className="nav social-menu justify-content-center justify-content-md-end">
                  <SocialMenu />
                </ul>
              </div>
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
