import React from 'react'
import { css } from "@emotion/core"
import styled from '@emotion/styled'

const StackElement = styled.div`
  font-size: 12px;
  margin-right: .5rem;
`

const StackWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > div {
    padding: 1.5rem;
    flex-basis: 45%;
    box-shadow: 0 2px 11px 2px rgba(0, 0, 0, 0.05);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 620px) {
    > div {
      flex-basis: 80%;
    }
  }

  @media (max-width: 400px) {
    > div {
      flex-basis: 100%;
    }
  }

  a {
    text-decoration: none;
    color: rgb(31, 32, 68);

    :hover {
      text-decoration: underline;
    }
  }

  h4 {
    font-size: 1.1rem;
    letter-spacing: .5px;
    text-transform: uppercase;
  }

  p {
    font-size: .9rem;
  }
`

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Better and Stronger",
      link: "https://betterandstronger.netlify.app",
      description: "SPA for generating a post COVID optimism message",
      stack: "React, Netlify, Lambda Functions, Cloudinary"
    },
    {
      id: 2,
      title: "Better and Stronger",
      link: "https://betterandstronger.web.app",
      description: "SPA for generating a post COVID optimism message",
      stack: "React, Firebase, Cloud Functions, Cloudinary"
    },
    {
      id: 3,
      title: "Nielles Backyard Cookout",
      link: "https://niellescookout.com",
      description: "Event website for information, polls, and reservation of tickets",
      stack: "React, Firebase, Cloud Functions, Flutterwave"
    },
    {
      id: 4,
      title: "Fitsbydee",
      link: "https://fitsbydee.com",
      description: "Landing page for Fitsbydee",
      stack: "React, Firebase, Cloud Functions"
    },
    {
      id: 5,
      title: "Firstresumeaid",
      link: "https://firstresumeaid.com",
      description: "Landing page for Firstresumeaid with service payment processing",
      stack: "React, Firebase, Cloud Functions, Paystack"
    }
  ]

  return (
  <section className={"section"}>
    <h3 className="section-title">
      Projects
    </h3>
    <h2 className="section-title-sub">
      Some of my side projects.
    </h2>
    <ProjectWrapper>
      {
        projects.map(project => (
          <div key={project.id}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h4>{project.title}</h4>
            </a>
            <p>{project.description}</p>
            <StackWrapper>
              {
                project.stack.split(", ").map(stack => (
                  <StackElement key={`${project.id}-${stack}`}>
                    {stack}
                  </StackElement>
                ))
              }
            </StackWrapper>
          </div>
        ))
      }
    </ProjectWrapper>
  </section>
)}

export default Portfolio