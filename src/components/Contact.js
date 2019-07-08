import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HTMLContent from 'gatsby-theme-psg/src/components/Content'

export default () => {
  const data = useStaticQuery(graphql`
      query ContactQuery { 
        markdownRemark(frontmatter: {templateKey: {eq: "contact"}}) {
          html 
          frontmatter { 
            title 
            image { 
              childImageSharp {
                fluid(maxWidth: 2048, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }`
  )
  const { image } = data.markdownRemark.frontmatter
  return (
    <div>
      <h3 className="text-center my-5">
        ANTWOORD NIET GEVONDEN? <strong className="text-primary">NEEM CONTACT OP</strong>
      </h3>
      <div className="row">
        <div className="col-md-6">
          <HTMLContent className="content" content={data.markdownRemark.html} />
        </div>
        <div className="col-md-6">
          <img src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image} className="img-fluid" alt="gigi partying" />
        </div>
      </div>
    </div>
  )
}