import React from 'react'
import {Link} from 'gatsby';
import Knop from '../../Button'

export default () => {
    return (
        <Knop as={Link} to="/tickets">
            TICKETS
        </Knop>
    )
}