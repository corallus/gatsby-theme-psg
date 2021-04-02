import React, {useContext} from 'react'
import {graphql} from "gatsby";
import {Page} from "../../components/Page";
import {Container, GridList, GridListTile, useMediaQuery} from "@material-ui/core";
import Context from "../../components/Events/Context";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        height: 'auto'
    },
    secondGridList: {
        height: '100%'
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
                    <GridList key={event.id} cellHeight={'auto'} className={classes.gridList} cols={3}>
                        <GridListTile cols={2} rows={2}>
                            <img src={'https://via.placeholder.com/1920x1280'} style={{maxWidth: '100%'}} alt={'placeholder'} />
                        </GridListTile>
                        <GridListTile cols={1} rows={2}>
                            <GridList className={classes.secondGridList} cols={1}>
                                <GridListTile cols={1} rows={1}>
                                    <img src={'https://via.placeholder.com/1920x1080'} style={{maxWidth: '100%'}} alt={'placeholder'} />
                                </GridListTile>
                                <GridListTile cols={1} rows={1}>
                                    <img src={'https://via.placeholder.com/1920x1080'} style={{maxWidth: '100%'}} alt={'placeholder'} />
                                </GridListTile>
                            </GridList>
                        </GridListTile>
                    </GridList>
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