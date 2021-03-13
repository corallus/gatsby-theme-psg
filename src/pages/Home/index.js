import React from 'react'
import Section from "../../components/Section";
import Lineup from "../../components/Lineup";
import Tickets from "../../components/Tickets";


const HomePage = () => {
    return (
        <>
            <Section title={'Lineup'} link={'/lineup'}>
                <Lineup />
            </Section>
            <Section title={'Tickets'} link={'/tickets'}>
                <Tickets />
            </Section>
            <Section title={'Gallery'} link={'/gallery'}>
            </Section>
        </>
    )
}

export default HomePage