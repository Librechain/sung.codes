/** @jsx jsx */
import { jsx } from "theme-ui"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const HeadshotImage = () => (
  <StaticQuery
    query={graphql`
      query {
        headshotImage: file(relativePath: { eq: "headshot.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 640, traceSVG: { color: "#FFC600" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        fluid={data.headshotImage.childImageSharp.fluid}
        sx={{
          width: "100%",
          height: "100%",
          webkitFilter: "grayscale(.45)",
          filter: "grayscale(.45)",
          transition: "filter .2s ease-in-out",

          "&:hover": {
            webkitFilter: "grayscale(0%)",
            filter: "grayscale(0%)",
          },
        }}
      />
    )}
  />
)
export default HeadshotImage
