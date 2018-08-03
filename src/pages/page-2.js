import React from 'react'
import Link from 'gatsby-link'

const SecondPage = ({ data }) => {
  console.log(data)
  const { edges: images } = data.allFile
  return (
    <div>{images.map(({ node: image }) => <img src={image.publicURL} />)}</div>
  )
}

export default SecondPage

export const pageQuery = graphql`
  query foo {
    allFile {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
