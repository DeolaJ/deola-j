import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import usePosts from '../components/hooks/usePosts'
import SEO from "../components/seo"
import Home from '../components/Homepage/Home/home'
import About from '../components/Homepage/About/about'
import Portfolio from '../components/Homepage/Portfolio/portfolio'
import PostPreview from '../components/post-preview'

const IndexPage = () => {
  const posts = usePosts()

  return (
    <Layout>
      <SEO title="Home" />
      <Home />
      <About />
      <Portfolio />

      {/* <h2>Read my blog</h2>
      {
        posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))
      } */}
    </Layout>
  )
}

export default IndexPage
