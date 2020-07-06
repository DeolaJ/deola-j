import React from 'react'
import { css } from '@emotion/core'

const Home = () => (
  <section className={"section home"}>
    <div css={css`
      text-align: center;
      padding: 3rem;
    `}>
    <p>Hi, my name is</p>
    <h1>
      Adeola Adeyemo
      <br/>
      I build web interfaces.
    </h1>
    <p>
      Front end developer, technical writer, digital &amp; comic illustrator, and everything in between.
    </p>
    <button>
      Get in touch
    </button>
    </div>
  </section>
)

export default Home