import React from 'react'
import Content from "../../Content";
import Button from "./Button";
import Context from '../Context'
import './style.scss'
import {Link} from "gatsby";

const Summary = () => {
    return (
        <Context.Consumer>
            {({state}) => (
                <div className="event">
                    <div className={"my-2 location"}>
                        <span>
                            {state.event.frontmatter.location}
                        </span>
                    </div>
                    <div className={"my-4 date"}>
                        <span>
                        {state.event.frontmatter.dateLong}
                        </span>
                    </div>
                    <Content content={state.event.html} className="lead"/>
                    {state.event.frontmatter.status === 'In verkoop' ?
                        <Button as={Link} to={"/tickets"}>
                           Koop tickets
                        </Button>
                        :
                        <span className="text-danger status">[{state.event.frontmatter.status}]</span>
                    }
                </div>
            )}
        </Context.Consumer>
    )
}

export default Summary
