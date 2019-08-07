import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

export default ({ act }) => {
  const artist = act.frontmatter.artist
  return (
    <div className="card artist" style={{ backgroundColor: '#d8d8d8' }}>
      {act.frontmatter.announced && artist.frontmatter.image
        ?
        <Img fluid={artist.frontmatter.image.childImageSharp.fluid}
          alt={artist.frontmatter.title}
          className="card-img"
        />
        :
        <div style={{ width: '100%', paddingBottom: '80%' }}></div>
      }
      <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
        <div className="card-footer rounded-0 text-center">
          {act.frontmatter.announced
            ?
            artist.frontmatter.title
            :
            'To be announced'
          }
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  fragment ArtistFragment on MarkdownRemark {
    excerpt(pruneLength: 400)
    id
    fields {
      slug
    }
    html
    frontmatter {
      name
      templateKey
      image {
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`