import React, {useContext} from 'react'
import {graphql} from "gatsby";
import {Page} from "../../components/Page";
import {Container, Grid, GridList, GridListTile, useMediaQuery} from "@material-ui/core";
import Context from "../../components/Events/Context";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
    },
    gridList: {
    },
    secondGridList: {
    }
}));
const GalleryPageTemplate = ({data}) => {
    const classes = useStyles();
    const {state} = useContext(Context)
    const {events} = state

    const mobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <Page markdown={data.markdownRemark}>
            <Container className={classes.root}>
                {events.map(event =>
                    <Grid container spacing={0} key={event.id} className={classes.gridList}>
                        <Grid md={8} item>
                            <img src={'https://via.placeholder.com/730x490'} style={{maxWidth: '100%'}} alt={'placeholder'} />
                        </Grid>
                        <Grid md={4} item container spacing={0}>
                            <Grid xs={12} item>
                                <img src={'https://via.placeholder.com/350x230'} style={{maxWidth: '100%'}} alt={'placeholder'} />
                            </Grid>
                            <Grid xs={12} item>
                                <img src={'https://via.placeholder.com/350x230'} style={{maxWidth: '100%'}} alt={'placeholder'} />
                            </Grid>
                        </Grid>
                    </Grid>
                )}
            </Container>
        </Page>
    )
}

export const query = graphql`
    query GalleryPage($id: String!) {
        markdownRemark(id: {eq: $id}) {
            html
            frontmatter {
                title
                description
            }
        }
    }
`

export default GalleryPageTemplate