import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post }}) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p css={css`
      font-size: .8rem;
    `}>Posted by {post.frontmatter.author}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <Link to="/">&larr; Back to home</Link>
  </Layout>
)

export default PostTemplate