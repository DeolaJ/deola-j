import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Body from '../components/Body/Body'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Nav />

    <Body />
  </Layout>
)

export default IndexPage
