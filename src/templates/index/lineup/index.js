import React from 'react'
import Lineup from "../../../components/Lineup";
import Section from "../../../components/Section";
import useStyles from "./style";

const LineupHome = () => {
    const classes = useStyles()
    return (
        <Section classes={classes} title={'Lineup'} link={'/lineup'} linkName={'Volledige lineup'}>
            <Lineup numItems={5} />
        </Section>
    )
}

export default LineupHome
