import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Artist from '../Artist';

class Artists extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        {posts.length
          ?
          <div className="row">
            {posts.map(({ node: post }) => (
              <div className="col-md-6 col-lg-4" key={post.id}>
                <Artist artist={post} tag="h3" />
              </div>
            ))}
          </div>
          :
          <h3 className="text-center">To be announced</h3>
        }

      </React.Fragment>
    )
  }
}

Artists.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query LineupQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___order] }
          filter: { frontmatter: { templateKey: { eq: "artist" }, lineup: { eq: true } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              html
              frontmatter {
                name
                lineup
                announced
                templateKey
                time
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, maxHeight: 800, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Artists data={data} count={count} />}
  />
)