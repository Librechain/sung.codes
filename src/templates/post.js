/** @jsx jsx */
import { jsx, Box, Styled } from "theme-ui"
import { Heading } from "@theme-ui/components"

import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Location } from "@reach/router"
import { URL } from "universal-url"

import Layout from "#layouts"
import ExternalLink from "#components/Link/ExternalLink"
import SEO from "#components/seo"

const postStyle = {
  h1: {
    marginBottom: 3,
  },
  paddingTop: [3, 3, 4, 4],
}

export default ({
  data: {
    site: {
      siteMetadata: { siteUrl },
    },
    mdx: {
      body,
      frontmatter,
      fields: { year, slug },
    },
  },
}) => {
  return (
    <Layout>
      <SEO
        frontmatter={frontmatter}
        url={new URL(slug, siteUrl).href || siteUrl}
      />
      <Link to={`/blog/${year}`}>&larr; Go Back</Link>
      {/* This "link" is for styling gists. */}
      <link
        rel="stylesheet"
        href="https://github.githubassets.com/assets/gist-embed-123720f37c57ce9a8f29de081c38ed61.css"
      ></link>
      <Location>
        {({ location }) => (
          <Box sx={postStyle}>
            <Heading as="h1">{frontmatter.title}</Heading>
            {frontmatter.banner &&
              frontmatter.banner.childImageSharp &&
              frontmatter.banner.childImageSharp.fluid && (
                <Img fluid={frontmatter.banner.childImageSharp.fluid} />
              )}
            <Box
              sx={{
                padding: t => `${t.space[4]}px 0`,
                textAlign: "center",
                fontWeight: "heading",
              }}
            >
              Broken Post?{" → "}
              <ExternalLink
                to={`https://twitter.com/intent/tweet?text=@dance2die%20${location.href} is broken!`}
              >
                Let me know
              </ExternalLink>{" "}
            </Box>
            <Styled.root>
              <MDXRenderer>{body}</MDXRenderer>
            </Styled.root>
          </Box>
        )}
      </Location>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        banner {
          ...bannerImage640
        }
      }
      fields {
        year
        slug
      }
    }
  }
`
