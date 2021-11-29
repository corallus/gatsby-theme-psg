import React from 'react';
import Recaptcha from "react-recaptcha"

import useSiteMetadata from "gatsby-theme-psg/src/components/SiteMetadata";

const RenderCaptcha = (props) => {
    const {recaptchaSiteKey} = useSiteMetadata()
    return (
        <Recaptcha
            sitekey={recaptchaSiteKey}
            render="explicit"
            theme="light"
            onloadCallback={() => { console.log("done loading!"); }}
            {...props}
        />
    )
}

export default RenderCaptcha