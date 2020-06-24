import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Home from '../components/Homepage/Home/home'
import About from '../components/Homepage/About/about'
import Portfolio from '../components/Homepage/Portfolio/portfolio'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home />
    <About />
    <Portfolio />
    <Link to="/art">Go to my art page</Link>
    <Link to="/comics">Go to my comics page</Link>
  </Layout>
)

export default IndexPage
