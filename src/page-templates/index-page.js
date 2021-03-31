import React, {useContext, useEffect, useState} from 'react'
import Section from "../components/Section";
import Lineup from "../components/Lineup";
import Tickets from "../components/Tickets";
import {graphql} from "gatsby";
import {Box, Grid} from "@material-ui/core";
import {HomeHeader} from "../components/Headers/Home";
import {useStyles} from "../components/Page/style"
import {galleryParams} from "../params";
import {Slide} from "../shared/slide";
import Ticket from "../components/Tickets/Ticket";
import Context from "../components/Events/Context";
import moment from "moment";
import Gallery from "../components/Gallery";

const IndexPageTemplate = ({data}) => {
    const classes = useStyles();

    const pageSize = 4

    const {state} = useContext(Context)
    const {event} = state
    const tickets = event.frontmatter.tickets

    const [earlyBird, setEarlyBird] = useState(false)

    useEffect(() => {
        setEarlyBird(moment().isBefore(moment(event.frontmatter.early_bird)))
    }, [event.frontmatter.early_bird])

    const Row = ({items}) => {
        return (
            <Grid container spacing={3}>
                {items.map((ticket, j) => (
                    <Grid xs={12/pageSize} item {...galleryParams.colProps} key={j}>
                        <Ticket ticket={ticket} early_bird={earlyBird && ticket.price_early} />
                    </Grid>
                ))}
            </Grid>
        )
    }
    return (
        <Box className={classes.root}>
            <HomeHeader />
            <Box className={classes.content}>
                <Section title={'Lineup'} link={'/lineup'} linkName={'Volledige lineup'}>
                    <Lineup />
                </Section>
                <Section title={'Tickets'} link={'/tickets'} linkName={'Alle tickets'}>
                    <Slide pageSize={pageSize} items={tickets} Component={Row} />
                </Section>
                <Section title={'Gallery'} link={'/gallery'} linkName={'Bekijk alle foto\'s'}>
                    <Gallery pageSize={3} items={data.markdownRemark.frontmatter.images} />
                </Section>
            </Box>
        </Box>
    )
}

export const pageQuery = graphql`
    query IndexPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
                description
                images {
                    image {
                        childImageSharp {
                            gatsbyImageData(width: 900, height: 600, quality: 90, layout: CONSTRAINED)
                        }
                    }
                    alt
                }
            }
        }
    }
`

export default IndexPageTemplate