import useSiteMetadata from "../../../SiteMetadata";
import React, {useContext} from "react";
import Context from "../../../Events/Context";
import {List, ListItem, ListItemText} from "@material-ui/core";
import {Link} from "gatsby";
import useStyles from "./style";

const PrimaryMenu = ({handleClose, ...props}) => {
    const classes = useStyles(props);
    const {menuItems} = useSiteMetadata()
    const {state} = useContext(Context)
    const {event} = state
    return (
        <List className={classes.list}>
            {menuItems.map((item, i) => (
                item.external ?
                    <ListItem
                        className={classes.listItem}
                        button
                        href={item.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        key={i}
                    >
                        <ListItemText className={classes.listItemText}>
                            {item.name}
                        </ListItemText>
                    </ListItem>
                    :
                    <ListItem
                        className={classes.listItem}
                        button
                        component={Link}
                        to={item.link}
                        onClick={handleClose}
                        key={i}
                    >
                        <ListItemText className={classes.listItemText}>
                            {item.name}
                        </ListItemText>
                    </ListItem>
            ))}
            {event.frontmatter.links && event.frontmatter.links.map((item, i) => (
                <ListItem
                    className={classes.listItem}
                    button
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    key={i}
                >
                    <ListItemText className={classes.listItemText}>
                        {item.name}
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    )
}

export default PrimaryMenu
