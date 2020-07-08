import React from 'react';
import {Accordion, Card} from 'react-bootstrap'
import HTMLContent from '../../Content'
import {graphql} from 'gatsby'
import {MdArrowDownward, MdArrowUpward} from 'react-icons/md';
import {topicProps} from '../../../params'

export default ({item, eventKey, handleClick, active}) => (
    <Card style={{marginBottom: '15px'}} {...topicProps}>
        <Card.Header className="border-0">
            <Accordion.Toggle as={"strong"} onClick={active ? () => handleClick(null) : () => handleClick(eventKey)}
                              eventKey={eventKey}
                              className={'mb-0 d-flex align-items-center justify-content-between' + (active ? ' active' : '')}>
                {item.frontmatter.title}
                {active
                    ?
                    <MdArrowUpward/>
                    :
                    <MdArrowDownward/>
                }
            </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={eventKey}>
            <Card.Body>
                <HTMLContent content={item.html}/>
            </Card.Body>
        </Accordion.Collapse>
    </Card>
)

export const query = graphql`
    fragment Topic on MarkdownRemark {
        html
        excerpt(pruneLength: 400)
        id
        fields {
            slug
        }
        frontmatter {
            order
            title
            category
            templateKey
            events {
                id
            }
        }
    }
`
