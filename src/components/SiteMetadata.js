import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            social {
              facebook
              instagram
            }
            navbarVariant
            navbarBackground
            showLogo
            menuItems {
              name
              link
              external
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
