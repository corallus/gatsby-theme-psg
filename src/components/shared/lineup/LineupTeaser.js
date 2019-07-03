import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import Artist from '../Artist';

class LineupTeaser extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <React.Fragment>
        {posts && posts.length
        ?
        <div className="row">
          <div className="col-md-8">
            <Artist artist={posts[0].node} tag="h3" />
          </div>
          {posts.length > 1
          ?
          <div className="col-md-4">
            <Artist artist={posts[1].node} tag="h3" />
            {posts.length > 2
            ?
            <Artist artist={posts[2].node} tag="h3" />
            :
            ''
            }
          </div>
          :
          ''
          }
        </div>
        : 
        <h3 className="text-center">To be announced</h3>
        }
      </React.Fragment>
    )
  }
}

LineupTeaser.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query LineupTeaserQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___order] }
          filter: { frontmatter: { templateKey: { eq: "artist" }, lineup: { eq: true } } }
        ) {
          edges {
            node {
              ...Artist
            }
          }
        }
      }
    `}
    render={(data, count) => <LineupTeaser data={data} count={count} />}
  />
)