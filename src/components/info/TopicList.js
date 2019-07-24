import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { Accordion } from 'react-bootstrap'
import Topic from './Topic'

class TopicList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      activeKey: "0",
    };

    this.handleCl = this.handleCl.bind(this);
  }

  handleCl (key) {
    return this.setState({ activeKey: key })
  }

  render () {
    const { data, category } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
        <Accordion defaultActiveKey="0">
          <div className="row">
            <div className="col-md-6">
              {posts.filter(function (element) { return element.node.frontmatter.category === category }).map((item, i) => (
                i % 2 ?
                  ''
                  :
                  <Topic handleClick={this.handleCl} item={item.node} eventKey={i} active={i === this.state.activeKey} key={i} />
              ))}
            </div>
            <div className="col-md-6">
              {posts.filter(function (element) { return element.node.frontmatter.category === category }).map((item, i) => (
                i % 2 ?
                  <Topic handleClick={this.handleCl} item={item.node} eventKey={i} active={i === this.state.activeKey} key={i} />
                  :
                  ''
              ))}
            </div>
          </div>
        </Accordion>
    )
  }
}

TopicList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default ({ category }) => (
  <StaticQuery
    query={graphql`
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
    `}
    render={(data, count) => <TopicList data={data} count={count} category={category} />}
  />
)