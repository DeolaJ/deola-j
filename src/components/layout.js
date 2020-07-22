/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import useSiteMetadata from './hooks/useSiteMetadata'
import { Global, css } from '@emotion/core'
import { Helmet } from 'react-helmet'
import Footer from './Footer/footer'
import Contact from './Contact/contact'
import Header from "./header"

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Global styles={css`
        html {
          font-family: sans-serif;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        body {
          margin: 0;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        main,
        menu,
        nav,
        section,
        summary {
          display: block;
        }
        audio,
        canvas,
        progress,
        video {
          display: inline-block;
        }
        audio:not([controls]) {
          display: none;
          height: 0;
        }
        progress {
          vertical-align: baseline;
        }
        [hidden],
        template {
          display: none;
        }
        a {
          background-color: transparent;
          -webkit-text-decoration-skip: objects;
        }
        a:active,
        a:hover {
          outline-width: 0;
        }
        abbr[title] {
          border-bottom: none;
          text-decoration: underline;
          text-decoration: underline dotted;
        }
        b,
        strong {
          font-weight: inherit;
          font-weight: bolder;
        }
        dfn {
          font-style: italic;
        }
        h1 {
          font-size: 2em;
          margin: 0.67em 0;
        }
        mark {
          background-color: #ff0;
          color: #000;
        }
        small {
          font-size: 80%;
        }
        sub,
        sup {
          font-size: 75%;
          line-height: 0;
          position: relative;
          vertical-align: baseline;
        }
        sub {
          bottom: -0.25em;
        }
        sup {
          top: -0.5em;
        }
        img {
          border-style: none;
        }
        svg:not(:root) {
          overflow: hidden;
        }
        code,
        kbd,
        pre,
        samp {
          font-family: monospace, monospace;
          font-size: 1em;
        }
        figure {
          margin: 1em 40px;
        }
        hr {
          box-sizing: content-box;
          height: 0;
          overflow: visible;
        }
        button,
        input,
        optgroup,
        select,
        textarea {
          font: inherit;
          margin: 0;
        }
        optgroup {
          font-weight: 700;
        }
        button,
        input {
          overflow: visible;
        }
        button,
        select {
          text-transform: none;
        }
        [type="reset"],
        [type="submit"],
        button,
        html [type="button"] {
          -webkit-appearance: button;
        }
        [type="button"]::-moz-focus-inner,
        [type="reset"]::-moz-focus-inner,
        [type="submit"]::-moz-focus-inner,
        button::-moz-focus-inner {
          border-style: none;
          padding: 0;
        }
        [type="button"]:-moz-focusring,
        [type="reset"]:-moz-focusring,
        [type="submit"]:-moz-focusring,
        button:-moz-focusring {
          outline: 1px dotted ButtonText;
        }
        fieldset {
          border: 1px solid silver;
          margin: 0 2px;
          padding: 0.35em 0.625em 0.75em;
        }
        legend {
          box-sizing: border-box;
          color: inherit;
          display: table;
          max-width: 100%;
          padding: 0;
          white-space: normal;
        }
        textarea {
          overflow: auto;
        }
        [type="checkbox"],
        [type="radio"] {
          box-sizing: border-box;
          padding: 0;
        }
        [type="number"]::-webkit-inner-spin-button,
        [type="number"]::-webkit-outer-spin-button {
          height: auto;
        }
        [type="search"] {
          -webkit-appearance: textfield;
          outline-offset: -2px;
        }
        [type="search"]::-webkit-search-cancel-button,
        [type="search"]::-webkit-search-decoration {
          -webkit-appearance: none;
        }
        ::-webkit-input-placeholder {
          color: inherit;
          opacity: 0.54;
        }
        ::-webkit-file-upload-button {
          -webkit-appearance: button;
          font: inherit;
        }
        html {
          font: 112.5%/1.45em georgia, serif;
          box-sizing: border-box;
          overflow-y: scroll;
        }
        * {
          box-sizing: inherit;
        }
        *:before {
          box-sizing: inherit;
        }
        *:after {
          box-sizing: inherit;
        }
        body {
          color: hsla(0, 0%, 0%, 0.8);
          font-family: Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          font-weight: normal;
          word-wrap: break-word;
          font-kerning: normal;
          -moz-font-feature-settings: "kern", "liga", "clig", "calt";
          -ms-font-feature-settings: "kern", "liga", "clig", "calt";
          -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
          font-feature-settings: "kern", "liga", "clig", "calt";
        }
        img {
          max-width: 100%;
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        h1 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 2.25rem;
          line-height: 1.1;
        }
        h2 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 1.62671rem;
          line-height: 1.1;
        }
        h3 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 1.38316rem;
          line-height: 1.1;
        }
        h4 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 1rem;
          line-height: 1.1;
        }
        h5 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 0.85028rem;
          line-height: 1.1;
        }
        h6 {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          color: inherit;
          font-weight: bold;
          text-rendering: optimizeLegibility;
          font-size: 0.78405rem;
          line-height: 1.1;
        }
        ul {
          margin-left: 1.45rem;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          list-style-position: outside;
          list-style-image: none;
        }
        ol {
          margin-left: 1.45rem;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
          list-style-position: outside;
          list-style-image: none;
        }
        dl {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        dd {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        p {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        noscript {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        iframe {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: 1.45rem;
        }
        hr {
          margin-left: 0;
          margin-right: 0;
          margin-top: 0;
          padding-bottom: 0;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          margin-bottom: calc(1.45rem - 1px);
          background: hsla(0, 0%, 0%, 0.2);
          border: none;
          height: 1px;
        }
        b {
          font-weight: bold;
        }
        strong {
          font-weight: bold;
        }
        li {
          margin-bottom: calc(1.45rem / 2);
        }
        ul li {
          padding-left: 0;
        }
        li > ol {
          margin-left: 1.45rem;
          margin-bottom: calc(1.45rem / 2);
          margin-top: calc(1.45rem / 2);
        }
        li > ul {
          margin-left: 1.45rem;
          margin-bottom: calc(1.45rem / 2);
          margin-top: calc(1.45rem / 2);
        }
        blockquote *:last-child {
          margin-bottom: 0;
        }
        li *:last-child {
          margin-bottom: 0;
        }
        p *:last-child {
          margin-bottom: 0;
        }
        li > p {
          margin-bottom: calc(1.45rem / 2);
        }
        .section {
          padding: 2.5rem 0;
        }
        .section-title {
          margin-bottom: .8125rem;
          font-size: .875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: .06em;
        }
        .section-title-sub {
          margin-bottom: 1.875rem;
          font-weight: bold;
          font-size: 2.2rem;
          letter-spacing: -0.02em;
          line-height: 1.31818182;
        }
        .main-button {
          color: rgb(31, 32, 68);
          border: 1px solid rgb(31, 32, 68);
          border-radius: 3px;
          padding: .8rem 1.25rem;
          background: transparent;
          cursor: pointer;

          .sm {
            font-size: 13px;
            padding: 0.75rem 1rem;
          }
        }
        .colored {
          color: rgb(31, 32, 68);

          + {
            margin-left: .5rem;
          }
        }
        @media only screen and (max-width: 480px) {
          html {
            font-size: 100%;
          }
        }        
      `} />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header siteTitle={title} />
      <main 
        css={css`
          margin: 0 auto;
          max-width: 82vw;
          padding: 0 1.0875rem 1.45rem;

          @media (max-width: 768px) {
            max-width: none;
          }
        `}
      >
        <>
          {children}
          <Contact />
        </>
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
