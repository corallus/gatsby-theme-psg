import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

class Timetable extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="is-parent column is-6" key={post.id}>
              {post.frontmatter.name} - {post.frontmatter.time}
            </div>
          ))}
      </div>
    )
  }
}

Timetable.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query TimetableQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___time] }
          filter: { frontmatter: { templateKey: { eq: "act" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                time
                artist {
                  ...ArtistFragment
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Timetable data={data} count={count} />}
  />
)