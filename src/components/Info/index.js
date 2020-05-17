import React, {useContext, useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {Accordion} from 'react-bootstrap'
import Topic from './Topic'
import Context from '../Events/Context';
import './style.scss'

export default ({category}) => {
    const data = useStaticQuery(
        graphql`
            query TopicsQuery {
                allMarkdownRemark(
                    sort: { order: ASC, fields: [frontmatter___order] }
                    filter: { frontmatter: { templateKey: { eq: "info" } } }
                ) {
                    edges {
                        node {
                            ...Topic
                        }
                    }
                }
            }
        `
    )
    const {edges: events} = data.allMarkdownRemark
    const {state} = useContext(Context)
    const {event} = state
    const posts = events.filter(post => !post.node.frontmatter.events || (post.node.frontmatter.events.filter(ev => ev.id === event.id).length))

    const [activeKey, setActiveKey] = useState("0")

    return (
        <Accordion defaultActiveKey="0">
            <div className="row">
                <div className="col-md-6">
                    {posts.filter(post => post.node.frontmatter.category === category).map((item, i) => (
                        i % 2 ?
                            ''
                            :
                            <Topic handleClick={setActiveKey} item={item.node} eventKey={i} active={i === activeKey}
                                   key={i}/>
                    ))}
                </div>
                <div className="col-md-6">
                    {posts.filter(post => post.node.frontmatter.category === category).map((item, i) => (
                        i % 2 ?
                            <Topic handleClick={setActiveKey} item={item.node} eventKey={i} active={i === activeKey}
                                   key={i}/>
                            :
                            ''
                    ))}
                </div>
            </div>
        </Accordion>
    )
}
