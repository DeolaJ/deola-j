import React, { Component } from 'react'
import './Nav.css'

class Nav extends Component {

  constructor (props) {
    super()
    this.state = {
      scrolling: false
    }
  }

  componentDidMount () {
    const { mobile } = this.props
    window.addEventListener('scroll', this.handleScroll);
    
    const sections = document.querySelectorAll('.mainbody .section')

    this.setState({
      sections
    })
    console.log(sections)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { mobile } = this.props
    const navLinks = mobile ? document.querySelectorAll('.sidebar-menu a') : document.querySelectorAll('.navlink li')
    console.log(navLinks)
    const { sections } = this.state
    var curPos = window.scrollY
    sections.forEach((item, index) => {
      const section = sections[index]
      var top = section.offsetTop - 130,
          bottom = top + section.clientHeight - 14;
      if (curPos >= top && curPos < bottom) {
        navLinks[index].classList.add('active')
      } else (
        navLinks[index].classList.remove('active')
      )
    })
    if ((window.scrollY === 0) && (this.state.scrolling === true)) {
      this.setState({
        scrolling: false
      })
    } else if ((window.scrollY > 100) && (this.state.scrolling !== true)) {
      this.setState({
        scrolling: true
      })
    }
  }

  changeActiveState = (e) => {
    const { sections } = this.state
    const id = Number(e.target.id) - 1
    sections[id].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

  }

  render () {

    const { scrolling } = this.state
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
        style={ !scrolling ? { position: 'absolute' } : { position: 'fixed', boxShadow: '0 0 13px #e6e6e6' }}
      >
        <ul className={"navlink"}>
          {
            navItems.map((item) => (
              <li 
                key={item.id} 
                className={item.name ==='Home' ? `active ${item.name.toLowerCase()}` : `${item.name.toLowerCase()}`} 
                onClick={this.changeActiveState}
              >
                {item.name}
              </li>
            ))
          }
        </ul>
      </nav>
    )
  }
}

export default Nav