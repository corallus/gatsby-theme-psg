import React, {useContext, useState} from 'react'
import {Dialog, Typography} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {PlayCircleOutline} from "@material-ui/icons";
import Context from "../../../components/Events/Context";
import useStyles from "./style";
import Section from "../../../components/Section";

const Aftermovie = ({children, ...props}) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const {state} = useContext(Context)

    return (
        <Section classes={classes}>
            <IconButton
                onClick={() => setOpen(true)}
            >
                <Typography variant={'h4'}>
                <PlayCircleOutline fontSize={'large'}/>
                <br />
                Bekijk de aftermovie
                </Typography>
            </IconButton>
            <Dialog onClose={() => setOpen(false)} aria-labelledby="aftermovie-dialog" open={open}>
                <iframe width="560" height="315" src={`${state.event.frontmatter.aftermovie.replace('watch?v=', 'embed/')}?autoplay=1`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
            </Dialog>
        </Section>
    )
}

export default Aftermovie;