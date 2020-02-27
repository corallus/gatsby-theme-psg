import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Card } from 'react-bootstrap';

export default ({ act }) => {
  const artist = act.artist
  return (
    <Card className="artist" style={{ backgroundColor: '#d8d8d8' }}>
      {act.announced && artist.frontmatter.image
        ?
        <Img fluid={artist.frontmatter.image.childImageSharp.fluid}
          alt={artist.frontmatter.title}
          className="card-img"
        />
        :
        <div style={{ width: '100%', paddingBottom: '80%' }}></div>
      }
      <Card.ImgOverlay>
        <div className="card-footer">
          {act.announced
            ?
            artist.frontmatter.title
            :
            'To be announced'
          }
        </div>
      </Card.ImgOverlay>
    </Card>
  )
}

export const query = graphql`
  fragment Artist on MarkdownRemark {
    id
    html 
    frontmatter {
      title
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