import React from 'react'
import './nav.css'

const Nav = () => {

  const navItems = [
    {
      id: 1,
      name: 'Home'
    },
    {
      id: 2,
      name: 'About'
    },
    {
      id: 3,
      name: 'Portfolio'
    },
    {
      id: 4,
      name: 'Contact'
    }
  ]

  return (
    <nav 
      className={'nav'}
    >
      <ul className={"navlink"}>
        {
          navItems.map((item) => (
            <li 
              key={item.id} 
              className={item.name ==='Home' ? `active ${item.name.toLowerCase()}` : `${item.name.toLowerCase()}`} 
            >
              {item.name}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav