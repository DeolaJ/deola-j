import React, { Component } from 'react'

class About extends Component {

  render () {
    return (
      <section className={"section about-container"}>
        <div className={"content-body"}>
          <div className={"content-row"}>
            <div className="col vertical">
              <hr className="hr hr--white"/>
              <h1>Humanizing your insurance.</h1>
              <p>
                Get your life insurance coverage easier and faster. We blend our
                expertise and technology to help you find the plan that’s right
                for you. Ensure you and your loved ones are protected.
              </p>
              <a href="#" className="btn btn--white">View plans</a>
            </div>

            <div className="col col--img vertical">
              {/* <img srcset="
                  ./images/image-intro-desktop.jpg 1440w,
                  ./images/image-intro-mobile.jpg   425w
                " src="./images/image-intro-desktop.jpg" alt=""> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About