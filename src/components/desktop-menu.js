import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  line-height: 1;
  margin-right: .5rem;
  padding: .25rem;
  text-decoration: none;
  font-weight: ${props => props.fontWeight || 'normal'};
  transition: ease-in-out border-bottom 400ms;

  &.current {
    border-bottom: 2px solid rgb(31, 32, 68);
  }

  &:hover {
    border-bottom: 2px solid rgb(31, 32, 68);
  }
`

const DesktopMenu = () => {
  return (
    <ul css={css`
      margin: 0;
      padding 0;

      li {
        display: inline-block;
        padding: .5rem;
        margin: 0 .5rem;

        &:last-of-type {
          margin-right: 0;
        }
      }

      a {
        text-decoration: none;
        font-size: .8rem;
        padding: 0;
      }

      @media (max-width: 768px) {
        display: none;
      }
    `}>
      <li>
        <NavLink to='/' fontWeight="bold" activeClassName="current">
          <span className="colored">01. </span>
          <span>{" "}Dev</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/art' fontWeight="bold" activeClassName="current">
          <span className="colored">02. </span>
          <span>{" "}Art</span>
        </NavLink>
      </li>
      <li>
        <NavLink to='/comics' fontWeight="bold" activeClassName="current">
          <span className="colored">03. </span>
          <span>{" "}Comics</span>
        </NavLink>
      </li>
    </ul>
  )
}

export default DesktopMenu