import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    {data.markdownRemark.frontmatter.galleryImages.map(({ image }) => (
      <img src={image} />
    ))}
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    markdownRemark {
      frontmatter {
        galleryImages {
          desc
          image
        }
      }
    }
  }
`
