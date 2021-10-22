import React, {useEffect, useContext, useState} from 'react'
import Context from "../Events/Context";
import moment from "moment";

const useTickets = () => {
    const {state} = useContext(Context)
    const {event} = state
    const tickets = event.frontmatter.tickets

    const [earlyBird, setEarlyBird] = useState(false)

    useEffect(() => {
        setEarlyBird(moment().isBefore(moment(event.frontmatter.early_bird)))
    }, [event.frontmatter.early_bird])

    return [
        earlyBird,
        tickets
    ]
}

export default useTickets
