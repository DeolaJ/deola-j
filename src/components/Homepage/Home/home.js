import React from 'react'
import { css } from '@emotion/core'

const Home = () => (
  <section className={"section home"}>
    <div css={css`
      text-align: center;
      padding: 1rem;
    `}>
    <h3 className="section-title">
      Hi, I am
    </h3>
    <h1 css={css`
      font-size: 4.5rem;

      @media (max-width: 768px) {
        font-size: 3.5rem;
      }

      @media (max-width: 475px) {
        font-size: 3rem;
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
    </div>
  </section>
)

export default Home