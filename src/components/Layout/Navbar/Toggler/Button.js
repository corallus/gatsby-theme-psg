import React from 'react'
import {Dropdown} from "react-bootstrap";

const Button = ({event}) => {
    return (
        <Dropdown.Toggle variant="link" size="sm" className="py-0" id="dropdown-basic">
            {event.frontmatter.dateShort} <span className="d-none d-sm-inline">{event.frontmatter.name}</span>
        </Dropdown.Toggle>
    )
}

export default Button
