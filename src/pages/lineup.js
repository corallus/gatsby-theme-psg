import React from 'react'
import Section from "../components/Section";
import Lineup from "../components/Lineup";

const LineupPage = () => {
    return (
        <>
            <Section title={'Lineup'} link={'/lineup'}>
                <Lineup />
            </Section>
        </>
    )
}

export default LineupPage