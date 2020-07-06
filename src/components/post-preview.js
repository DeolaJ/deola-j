import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const PostPreview = ({ post }) => (
  <article>
    <h5>
      <Link to={post.slug}>{post.title}</Link>
    </h5>
    <p>{post.exercept}</p>
    <Link to={post.slug}>Read more</Link>
  </article>
)

export default PostPreview