/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
//import { MDXRenderer } from "gatsby-plugin-mdx"

import SEO from './seo'
import Demo from './demo'

import Header from "./header"
import "./layout.css"

const shortcodes = { Link, SEO,Demo}

const homePageName = "Home"

const Layout = ({ children, location }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					author
				}
			}
			allMdx {
				nodes {
					frontmatter {
						title
					}
				}
			}
		}
	`)

	const getPageName = p=>p.split("/").filter(e=>e).slice(-1)[0].replace("-", " ").replace("_", " ")

	const seoTitle = data.allMdx.nodes || data.allMdx.nodes[0].frontmatter.title ? <SEO title={data.allMdx.nodes[0].frontmatter.title} /> : <SEO title={getPageName(location ? location.pathname : homePageName)} />

	return (
		<MDXProvider components={shortcodes}>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0 1.0875rem 1.45rem`,
				}}
			>
			{seoTitle}
				<main>{children}</main>
				<footer>
					© {new Date().getFullYear()}, {data.site.siteMetadata.author}
				</footer>
			</div>
		</MDXProvider>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
