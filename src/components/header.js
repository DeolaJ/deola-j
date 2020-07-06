import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Social from './social'

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
const Aside = styled.div`
  position: fixed;
  bottom: ${props => props.side === 'left' ? '0' : '100px'};
  margin-bottom: ${props => props.side === 'left' ? '20px' : '40px'};
  left: ${props => props.side === 'left' ? '40px' : 'initial'};
  right: ${props => props.side === 'right' ? '-60px' : 'initial'};
  transform: ${props => props.side === 'right' ? 'rotate(90deg)' : ''};

  &::after {
    content: '',
    display: block;
    width: 1px;
    height: 40px;
    background: black;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    display: none;
  }

  ul li {
    display: block;
  }
`

const Header = ({ siteTitle }) => {
  
  
  return (
    <>
    <header
      css={css`
        margin-bottom: 1.45rem;
      `}
    >
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 1rem 2rem;
      `}>
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
        <ul css={css`
          margin: 0;
          padding 0;

          li {
            display: inline-block;
            padding: .5rem;
            margin: 0 1rem;
            background-color: rgba(0, 0, 0, .5);
            border-radius: 4px;

            &:last-of-type {
              margin-right: 0;
            }
          }

          a {
            text-decoration: none;
            color: white;
            font-size: .8rem;
            padding: 0;
          }
        `}>
          <li><NavLink to='/' fontWeight="bold" activeClassName="current">Home</NavLink></li>
          <li><NavLink to='/art' fontWeight="bold" activeClassName="current">Art</NavLink></li>
          <li><NavLink to='/comics' fontWeight="bold" activeClassName="current">Comics</NavLink></li>
        </ul>
      </div>
    </header>
    <Aside side="left">
      <Social />
    </Aside>
    <Aside side="right">
      adeola.adeyemoj@yahoo.com
    </Aside>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
