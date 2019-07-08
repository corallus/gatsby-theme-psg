import React from 'react';
import { Accordion } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import HTMLContent from '../Content'
import { graphql } from 'gatsby'
import './style.scss'

export default ({ item, eventKey, handleClick, active }) => (
  <Card className="border-0" style={{marginBottom: '15px'}}>
    <Card.Header className="border-0">
      <Accordion.Toggle as={'h4'} onClick={() => handleClick(eventKey)} variant="link" eventKey={eventKey} className={'mb-0'+(active ? ' active' : '')}>
        {item.frontmatter.title}
        {active
          ?
          <FaArrowUp className="float-right" style={{marginTop: '9px'}} size={20} />
          :
          <FaArrowDown className="float-right" style={{marginTop: '9px'}} size={20} />
        }
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={eventKey}>
      <Card.Body>
        <HTMLContent content={item.html} />
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
    }
  }
`
