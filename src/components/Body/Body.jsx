import React, { Component } from 'react'
import './Body.css'
import Home from '../Home/Home'
import About from '../About/About'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'

class Body extends Component {

  render () {
    const { mobile } = this.props

    return (
      <main className={'mainbody'}>
        <Home 
          mobile={mobile}
        />
        <About 
          mobile={mobile}
        />
        <Portfolio 
          mobile={mobile}
        />
        <Contact 
          mobile={mobile}
        />
      </main>
    )
  }
}

export default Body