import React from 'react'
import { css } from '@emotion/core'

const Footer = () => (
  <footer className={'footer'} css={css`
    padding: 30px 0;
    text-align: center;
    width: 100%;
  `}>
    © {new Date().getFullYear()} Adeola J. Adeyemo
  </footer>
)

export default Footer