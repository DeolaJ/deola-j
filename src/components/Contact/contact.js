import React from 'react'
import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "boy.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section className={"section contact-container"} css={css`
      text-align: center;

      img {
        margin-bottom: 2rem;
      }
    `}>
      <Img
        fixed={data.file.childImageSharp.fixed}
        className="hero-image"
        alt="hero illustration"
      />
      <h3 className="section-title">Contact</h3>
      <h2 className="section-title-sub">Are you ready to work with me?</h2>
      <p>
        I'm open for new opportunities and requests. Also if you have a question
        , or just want to say hi, I'll try my best to get back to you.
      </p>
      <a href="mailto:adeola.adeyemoj@gmail.com">
        <button className="main-button" type="button">Get in touch</button>
      </a>
    </section>
  )
}

export default Contact