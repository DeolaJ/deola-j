import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Social from './social'
import DesktopMenu from './desktop-menu'
import MobileMenu from './mobile-menu'

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
    <header>
      <div css={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
      `}>
        <h2 
          css={css`
            margin: 0;
            font-size: 22px;
          `}
          className="section-title"
        >
          <Link
            to="/"
            css={css`
              color: black;
              text-decoration: none;
            `}
          >
            Dee
          </Link>
        </h2>
        <DesktopMenu />
        <MobileMenu />
      </div>
    </header>
    <Aside side="left">
      <Social />
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
