import React from 'react'
import algemeneVoorwaarden from '../assets/algemenevoorwaarden.pdf'
import privacyStatement from '../assets/privacy-statement.pdf'

import useSiteMetadata from "./SiteMetadata";

const Copyright = () => {
    const {title} = useSiteMetadata()
    return (
       <>
           © Copyright {new Date().getFullYear()}, All Rights Reserved.{' '}
           <a href={algemeneVoorwaarden}>
               General conditions of {title}
           </a> apply to this event{' | '}
           <a href={privacyStatement}>
               Privacy statement
           </a>
       </>
    )
}

export default Copyright