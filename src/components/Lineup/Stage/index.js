import React from 'react'
import Act from './Act';
import {lineupParams} from "../../../params";
import {Grid} from "@material-ui/core";

const Stage = ({highlighted = 2, numItems = null, acts}) => {
    return (
        <React.Fragment>
            {acts && acts.length
                ?
                <Grid>
                    {acts.slice(0, highlighted).map((act, index) => (
                        <Grid item xs={3} {...lineupParams.highlightedColProps} key={index}>
                            <Act act={act}/>
                        </Grid>
                    ))}
                    {acts.slice(highlighted, numItems ? numItems : acts.length).map((act, index) => (
                        <Grid item xs={3} {...lineupParams.colProps} key={index}>
                            <Act act={act}/>
                        </Grid>
                    ))}
                </Grid>
                :
                <h3 className="text-center">{lineupParams.emptyText}</h3>
            }

        </React.Fragment>
    )
}

export default Stage

