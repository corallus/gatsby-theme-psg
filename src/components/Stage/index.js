import React from 'react'
import Act from '../Act';
import {lineupParams} from "../../params";
import {createStyles, Grid, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
        },
    }),
);
const Stage = ({highlighted = 2, numItems = null, acts}) => {
    const classes = useStyles();
    return (
        acts && acts.length
            ?
            <Grid className={classes.root} container spacing={3} justify={'center'}>
                {acts.slice(0, highlighted).map((act, index) => (
                    <Grid item xs={6} key={index}>
                        <Act act={act}/>
                    </Grid>
                ))}
                {acts.slice(highlighted, numItems ? numItems : acts.length).map((act, index) => (
                    <Grid item xs={4} key={index}>
                        <Act act={act}/>
                    </Grid>
                ))}
            </Grid>
            :
            <Typography>{lineupParams.emptyText}</Typography>
    )
}

export default Stage

