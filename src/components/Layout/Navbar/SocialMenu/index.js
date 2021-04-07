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
           <IconButton className={classes.iconButton} aria-label="facebook" color="inherit">
               <Facebook color={'inherit'} />
           </IconButton>
           }
           {social.instagram &&
           <IconButton className={classes.iconButton} aria-label="instagram" color="inherit">
               <Instagram color={'inherit'} />
           </IconButton>
           }
       </>
    )
}

export default SocialMenu