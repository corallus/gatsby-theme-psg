import React from 'react';
import {Button} from "react-bootstrap";

export default ({event, ...props}) => {
    return (
        <Button
            variant="primary"
            {...props}
        >
            {event.frontmatter.dateShort} <span className="d-none d-sm-inline">{event.frontmatter.name}</span>
        </Button>
    )
}

