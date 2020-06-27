import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Art = () => (
  <Layout>
    <SEO title="Art" />
    <h1>Art Page</h1>
    <p>Welcome to my art page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Art
