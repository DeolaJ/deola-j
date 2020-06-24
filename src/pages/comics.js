import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Comics = () => (
  <Layout>
    <SEO title="Comics" />
    <h1>Comics Page</h1>
    <p>Welcome to my comics page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Comics
