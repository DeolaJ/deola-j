import React, { Component } from 'react'

class Home extends Component {

  render () {
    return (
      <section className={"section home"}>
        <h4>
          <span className="new">New</span>
          Monograph Dashboard
        </h4>
        <h1>Powerful insights into your team</h1>
        <p className="lead">Project planning and time tracking for agile teams</p>
        <div className="btn-wrapper">
          <a href="#" className="btn">Schedule a demo</a>
          <p>to see a preview</p>
        </div>
      </section>
    )
  }
}

export default Home