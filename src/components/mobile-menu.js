import React, { useState, useEffect } from 'react'
import { css, keyframes } from '@emotion/core'
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

const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const toggleOpen = (e) => {
    e.stopPropagation();
    setOpen(!open)
  }

  // useEffect(() => {
    
  // }, [])
  const slides = keyframes`
    0% {
      width: 0;
    }

    100% {
      width: 25px;
    }
  `
    console.log(open);
  return (
    <>
      <button className="menu-button" onClick={toggleOpen} css={css`
        width: 45px;
        background: none;
        border: none;
        cursor: pointer;
        
        span {
          border-top: 2px solid black;
          display: block;
          width: 25px;
          margin-bottom: 8px;
        }

        p {
          margin: 0;
          font-size: 30px;
          font-weight: bold;
        }
        
        .top {
          width: 12px;
        }
        
        .middle {
          width: 20px;
        }

        .bottom {
          margin-bottom: 0;
        }
        
        &:hover {
          span {
            animation: ${slides} 1s cubic-bezier(0.39, 0.58, 0.57, 1) alternate-reverse both;
            animation-iteration-count: infinite;
          }
          .top {
            animation-delay: 0s;
          }
          .middle {
            animation-delay: .3s;
          }
          .bottom {
            animation-delay: .6s;
          }
        }

        @media (min-width: 768.4px) {
          display: none;
        }
      `}>
        {
          open 

          ? (
            <p>
              &times;
            </p>
          )

          : (
            <>
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </>
          )
        }
      </button>
      <div className={`mobile-menu ${open}`} css={css`
        position: fixed;
        top: 70px;
        right: 0;
        z-index: 3;
        transform: translateX(200px);
        width: 200px;
        transition: transform 400ms cubic-bezier(0.39, 0.58, 0.57, 1);
        background: white;
        color: black;

        &.true {
          transform: translateX(0px);
        }
      `}>
        <ul css={css`
          margin: 0;
          padding: .5rem;
          box-shadow: 0 0 11px 3px rgba(0, 0, 0, .1);

          li {
            display: block;
            padding: .5rem;
            margin: 1rem 0;

            &:last-of-type {
              margin-right: 0;
            }
          }

          a {
            text-decoration: none;
            font-size: .8rem;
            color: black;
            padding: 0;
          }
          
          @media (min-width: 768.4px) {
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
      </div>
    </>
  )
}

export default MobileMenu