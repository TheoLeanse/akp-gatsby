import React from 'react'

const Log = ({ data }) => {
  const { edges: images } = data.allFile
  return (
    <div>{images.map(({ node: image }) => <img src={image.publicURL} />)}</div>
  )
}

export default Log

export const pageQuery = graphql`
  query Log {
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
