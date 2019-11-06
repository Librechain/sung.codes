/** @jsx jsx */
import { jsx, Container } from "theme-ui"
// import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../layouts"
import { Heading, Box } from "@theme-ui/components"

export default ({ data: { mdx } }) => {
  return (
    <Layout>
      <Link to={`/blog/${mdx.fields.year}`}>&larr; Go Back</Link>

      {/* This "link" is for styling gists. */}
      <link
        rel="stylesheet"
        href="https://github.githubassets.com/assets/gist-embed-123720f37c57ce9a8f29de081c38ed61.css"
      ></link>
      <Container>
        <Heading as="h1">{mdx.frontmatter.title}</Heading>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      fields {
        year
      }
    }
  }
`
