// https://github.com/gatsbyjs/gatsby/blob/master/examples/using-wordpress/src/templates/page.js
import React from 'react'
import { graphql, Link } from 'gatsby'
import Dangerous from 'dangerous-components'

import PostIcons from '../components/post-icon'
import Layout from '../layouts'

import { rhythm } from '../utils/typography'

const PostExerpts = ({ posts }) => (
	<>
		{posts.map(({ node }) => (
			<div css={{ marginBottom: rhythm(2) }} key={node.slug}>
				<Link
					to={`${node.year}/${node.slug}`}
					css={{ textDecoration: `none` }}
				>
					<h3>{node.title}</h3>
				</Link>
				<Dangerous html={node.excerpt} />
				<PostIcons node={node} />
			</div>
		))}
	</>
)

const PageTemplate = ({ data }) => {
	const currentPage = data.allWordpressPost

	return (
		<Layout>
			<PostExerpts posts={currentPage.edges} />
		</Layout>
	)
}

export default PageTemplate

export const pageQuery = graphql`
	query($year: Int!) {
		allWordpressPost(
			sort: { fields: [date], order: DESC }
			filter: { fields: { year: { eq: $year } } }
		) {
			edges {
				node {
					title
					excerpt
					slug
					...PostIcons
					fields {
						year
					}
				}
			}
		}
	}
`
