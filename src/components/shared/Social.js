import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons"

const Social = ({ social }) => (
  <React.Fragment>
    <IconContext.Provider value={{ size: "42px" }}>
      <li className="nav-item">
        <a className="nav-link social-link" title="instagram" target="_blank" href={social.instagram} rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link social-link" title="facebook" target="_blank" href={social.facebook} rel="noopener noreferrer">
          <FaFacebook />
        </a>
      </li>
    </IconContext.Provider>
  </React.Fragment>
)

export default Social