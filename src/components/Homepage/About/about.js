import React from 'react'

const About = () => (
  <section className={"section about-container"}>
    <h3 className="section-title">About me</h3>
    <h2 className="section-title-sub">A summary of my story.</h2>
    <p>
      Hi! I'm Adeola, a front end developer based in Lagos, Nigeria.
    </p>
    <p>
      I enjoy creating awesome and performant user interfaces with good user experiences.
      After graduating from the <span className="colored">University of Lagos</span>, I joined the engineering team at <span className="colored">Formplus</span>, where I lead the front end team to ensure design consistency and optimal user experiences.

    These are the technologies I have worked with:
    </p>
    <ul>
      <li>HTML</li>
      <li>(S)CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Angular 1</li>
      <li>Firebase</li>
    </ul>
  </section>
)

export default About