import React, {useContext} from 'react'
import Context from '../Events/Context';
import {
    Grid,
} from "@material-ui/core";
import Topic from './Topic'

export default ({items}) => {

    const {state} = useContext(Context)
    const {event} = state
    const posts = items.filter(post => !post.frontmatter.events || (post.frontmatter.events.filter(ev => ev?.id === event.id).length))

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
            <Grid container spacing={3}>
                <Grid item md={6}>
                    {posts.map((item, i) => (
                        i % 2 === 0 &&
                        <Topic
                            expanded={expanded === i}
                            index={i}
                            item={item}
                            key={i}
                            handleChange={handleChange(i)}
                        />
                    ))}
                </Grid>
                <Grid item md={6}>
                    {posts.map((item, i) => (
                        i % 2 !== 0 &&
                        <Topic
                            expanded={expanded === i}
                            index={i}
                            key={i}
                            item={item}
                            handleChange={handleChange(i)}
                        />
                    ))}
                </Grid>
            </Grid>
    )
}
