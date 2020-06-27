import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  line-height: 1;
  margin-right: .5rem;
  padding: .25rem;
  text-decoration: none;
  font-weight: ${props => props.fontWeight || 'normal'};

  &.current {
    border-bottom: 2px solid black;
  }
`

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background: aliceblue;
      margin-bottom: 1.45rem;
    `}
  >
    <div>
      <h1 
        css={css`
          margin: 0;
        `}
      >
        <Link
          to="/"
          css={css`
            color: white;
            text-decoration: none;
          `}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <NavLink to='/' fontWeight="bold" activeClassName="current">Home</NavLink>
        <NavLink to='/art' fontWeight="bold" activeClassName="current">Art</NavLink>
        <NavLink to='/comics' fontWeight="bold" activeClassName="current">Comics</NavLink>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
