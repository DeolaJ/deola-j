import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const HomeContentWrapper  = styled.div`
`

const HomeImageWrapper  = styled.div`

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
    width: 100%;
  }
`
const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fixed(width: 300, height: 450) {
            ...GatsbyImageSharpFixed
          }
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={"section home"}>
      <div css={css`
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          filter: drop-shadow(-2px -2px 4px rgba(0, 0, 0, .3));
        }

        .hero-image-mobile {
          display: none !important;
        }

        @media (max-width: 768px) {
          flex-direction: column-reverse;
          text-align: center;

          .hero-image-mobile {
            display: block !important;
            max-width: 150px;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-image {
            display: none !important;
          }
        }
      `}>
        <HomeContentWrapper>
          <h3 className="section-title">
            Hi, I am
          </h3>
          <h1 css={css`
            font-size: 4.5rem;
      
            @media (max-width: 768px) {
              font-size: 3rem;
            }
      
            @media (max-width: 475px) {
              font-size: 2.6rem;
            }
          `}>
            Adeola Adeyemo
            <br/>
            I build web interfaces.
          </h1>
          <p>
            Front end developer, technical writer, digital &amp; comic illustrator, and everything in between.
          </p>
          <a href="mailto:adeola.adeyemoj@gmail.com">
            <button className="main-button" type="button">Get in touch</button>
          </a>
        </HomeContentWrapper>
        <HomeImageWrapper>
          <Img
            fixed={data.file.childImageSharp.fixed}
            className="hero-image"
            alt="hero illustration"
          />
          <Img
            fluid={data.file.childImageSharp.fluid}
            className="hero-image-mobile"
            alt="hero illustration"
          />
        </HomeImageWrapper>
      </div>
    </section>
  )
}

export default Home