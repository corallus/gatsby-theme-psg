import React from 'react'
import Content from "../../Content";
import {Button} from "react-bootstrap";
import {Link} from "gatsby";
import Context from '../Context'
import './style.scss'

const Summary = () => {
    return (
        <Context.Consumer>
            {({state}) => (
                <div className="event">
                    <div className="my-2 location">
                        {state.event.frontmatter.location}
                    </div>
                    <div className={"my-4 date"}>
                        {state.event.frontmatter.dateLong}
                    </div>
                    <Content content={state.event.html} className="lead"/>
                    {state.event.frontmatter.status === 'In verkoop' ?
                        <Button as={Link} to='/tickets' className="btn btn-primary">Koop je tickets</Button>
                        :
                        <span className="text-danger h2">[{state.event.frontmatter.status}]</span>
                    }
                </div>
            )}
        </Context.Consumer>
    )
}

export default Summary
