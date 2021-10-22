import React from 'react'
import {Link} from 'gatsby'

import useSiteMetadata from "./SiteMetadata";

const Copyright = () => {
    const {title} = useSiteMetadata()
    return (
       <>
           © Copyright {new Date().getFullYear()}, All Rights Reserved.{' '}
           <Link color="inherit" href="/algemene-voorwaarden.pdf">
               General conditions of {title}
           </Link> apply to this event{' | '}
           <Link color="inherit" href="/privacy-statement.pdf">
               Privacy statement
           </Link>
       </>
    )
}

export default Copyright