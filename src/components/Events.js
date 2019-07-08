import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { Tab, ButtonGroup, Nav } from 'react-bootstrap'

class Events extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        {posts.length
          ?
          <Tab.Container id="event-tabs" defaultActiveKey={posts[0].node.id}>
            <ButtonGroup aria-label="Events" size="sm" className="text-uppercase">
              {posts.map(({ node: post }) => (
                <Nav.Link as="button" className="btn btn-outline-primary" eventKey={post.id}>{post.frontmatter.name}</Nav.Link>
              ))}
            </ButtonGroup>
            <Tab.Content>
              {posts.map(({ node: post }) => (
                <Tab.Pane eventKey={post.id}>
                  <h1 className="text-capitalize">{post.frontmatter.date}</h1>
                  <p className="lead">{post.frontmatter.location}</p>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
          :
          <h3 className="text-center">To be announced</h3>
        }
      </React.Fragment>
    )
  }
}

Events.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query EventsQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "event" } } }
        ) {
          edges {
            node {
              id
              html
              frontmatter {
                name
                templateKey
                location
                date(formatString: "dddd DD MMMM YYYY", locale: "nl-NL")
                tickets {
                  name
                  price
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Events data={data} count={count} />}
  />
)