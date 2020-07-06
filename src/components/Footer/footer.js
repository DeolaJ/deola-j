import React from 'react'
import { css } from '@emotion/core'
import Social from '../social'

const Footer = () => (
  <footer className={'footer'} css={css`
    padding: 30px 0;
    text-align: center;
    width: 100%;

    ul {
      width: 100%;
    }

    li {
      width: 25px;
      padding: 0 1rem;
      box-sizing: content-box;
    }

    @media (min-width: 768px) {
      ul {
        display: none;
      }
    }
  `}>
    <Social />
    © {new Date().getFullYear()} Adeola J. Adeyemo
  </footer>
)

export default Footer