import React from 'react'
import PreviewCompatibleImage from '../../PreviewCompatibleImage'
import { graphql } from 'gatsby'

export default ({ act }) => {
  const artist = act.frontmatter.artist
  return (
    <div className="card mb-3 artist" style={{ backgroundColor: '#d8d8d8' }}>
      {act.frontmatter.announced && artist.frontmatter.image
        ?
        <PreviewCompatibleImage
          imageInfo={artist.frontmatter}
          alt={artist.frontmatter.name}
          className="card-img"
        />
        :
        <div style={{ width: '100%', paddingBottom: '100%' }}></div>
      }
      <div className="card-img-overlay d-flex flex-column justify-content-end p-0">
        <div className="card-footer rounded-0 text-center">
          {act.frontmatter.announced
            ?
            artist.frontmatter.name
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