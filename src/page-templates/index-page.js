import React from 'react'
import Section from "../components/Section";
import Lineup from "../components/Lineup";
import Tickets from "../components/Tickets";
import {graphql} from "gatsby";
import {Box} from "@material-ui/core";
import {HomeHeader} from "../components/Headers/Home";
import {useStyles} from "../components/Page/style"

const IndexPageTemplate = ({data}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <HomeHeader />
            <Box className={classes.content}>
                <Section title={'Lineup'} link={'/lineup'} linkName={'Volledige lineup'}>
                    <Lineup />
                </Section>
                <Section title={'Tickets'} link={'/tickets'} linkName={'Alle tickets'}>
                    <Tickets />
                </Section>
                <Section title={'Gallery'} link={'/gallery'} linkName={'Bekijk alle foto\'s'}>
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
            }
        }
    }
`

export default IndexPageTemplate