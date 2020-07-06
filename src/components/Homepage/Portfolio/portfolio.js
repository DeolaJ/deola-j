import React from 'react'
import { css } from "@emotion/core"

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Better and Stronger",
      description: "Built with React JS (frontend), Netlify Lambda Functions, and Cloudinary (image uploads)"
    },
    {
      id: 2,
      title: "Better and Stronger",
      description: "Alternate of other project. Built with React JS (frontend), Firebase Cloud Functions, and Cloudinary (image uploads)"
    },
    {
      id: 3,
      title: "Nielles Backyard Cookout",
      description: "Built with React JS (frontend), Firebase Cloud Functions, and Flutterwave (payment integration)"
    }
  ]

  return (
  <section className={"section"}>
    <h3>Portfolio</h3>
    <h2>Some of my latest work.</h2>
    <div css={css`
      display: flex;
      justify-content: space-between;
    `}>
      {
        projects.map(project => (
          <div key={project.id}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))
      }
    </div>
  </section>
)}

export default Portfolio