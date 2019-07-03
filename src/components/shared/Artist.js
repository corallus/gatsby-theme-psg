import React from 'react'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import { graphql } from 'gatsby'

export default ({ artist, tag }) => {
  const Tag = tag;
  return (
    <div className="position-relative artist" style={{ width: '100%', backgroundColor: '#d8d8d8', marginBottom: '30px' }}>
      {artist.frontmatter.announced && artist.frontmatter.image
        ?
        <PreviewCompatibleImage
          imageInfo={artist.frontmatter}
          alt={artist.frontmatter.name}
          className="img-fluid position-absolute"
          style={{ top: '0', bottom: '0', right: '0', left: '0' }} />
        :
        <div style={{ width: '100%', paddingBottom: '100%' }}></div>
      }
      <div className="artist-name" style={{
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        bottom: 0
      }}>
        <Tag className={'m-0'}>
          {artist.frontmatter.announced
            ?
            artist.frontmatter.name
            :
            'To be announced'
          }
        </Tag>
      </div>
    </div>
  )
}

export const query = graphql`
  fragment Artist on MarkdownRemark {
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
`