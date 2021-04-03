import React from 'react'
import useSiteMetadata from "../../../SiteMetadata";
import IconButton from "@material-ui/core/IconButton";
import {Facebook, Instagram} from "@material-ui/icons";
import useStyles from "./style";

const SocialMenu = () => {
    const classes = useStyles();
    const {social} = useSiteMetadata()
    return (
       <>
           {social.facebook &&
           <IconButton aria-label="facebook" color="inherit">
               <Facebook />
           </IconButton>
           }
           {social.instagram &&
           <IconButton aria-label="facebook" color="inherit">
               <Instagram />
           </IconButton>
           }
       </>
    )
}

export default SocialMenu