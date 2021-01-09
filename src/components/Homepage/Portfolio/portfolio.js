import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
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

const ContentWrapper = styled.div`
  padding: 1.5rem;

  @media (max-width: 600px) {
    padding: .8rem;
  }
`

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .gatsby-image-wrapper {
    border-radius: .4rem .4rem 0 0;
    box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, .05);
  }

  > div {
    flex-basis: 45%;
    box-shadow: 0 2px 11px 2px rgba(0, 0, 0, 0.05);
    margin-bottom: 3rem;
    border-radius: .4rem;
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
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  p {
    font-size: .85rem;
    margin-bottom: .7rem;
  }

  @media (max-width: 620px) {
    > div {
      flex-basis: 80%;
    }

    div h4 {
      font-size: .95rem;
    }
  }

  @media (max-width: 400px) {
    > div {
      flex-basis: 100%;
    }
  }
`

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);
  const projects = [
    {
      id: 1,
      title: "Star Wars",
      link: "https://starwars-deolaj.netlify.app",
      description: "SPA built on the Star wars API for characters, starships, and planets",
      stack: "React, Netlify, Redux",
      img: "starwars.png",
    },
    {
      id: 2,
      title: "Better and Stronger",
      link: "https://betterandstronger.netlify.app",
      description: "SPA for generating a post COVID optimism message",
      stack: "React, Netlify, Redux, Lambda Functions, Cloudinary",
      img: "bas.png",
    },
    {
      id: 3,
      title: "Better and Stronger",
      link: "https://betterandstronger.web.app",
      description: "SPA for generating a post COVID optimism message",
      stack: "React, Firebase, Redux, Cloud Functions, Cloudinary",
      img: "bas.png"
    },
    {
      id: 4,
      title: "Nielles Backyard Cookout",
      link: "https://nielle-19.web.app/",
      description: "Event website for information, polls, and reservation of tickets",
      stack: "React, Firebase, Cloud Functions, Semantic UI, Flutterwave",
      img: "nielles.png"
    },
    {
      id: 5,
      title: "Fitsbydee",
      link: "https://fitsbydee.netlify.app/",
      description: "This is the Landing page for Fitsbydee's clothing line",
      stack: "React, Firebase, Cloud Functions, Semantic UI",
      img: "fbd.png"
    },
    {
      id: 6,
      title: "Firstresumeaid",
      link: "https://firstresumeaid.netlify.app/",
      description: "Landing page for Firstresumeaid with service payment processing",
      stack: "React, Firebase, Cloud Functions, Semantic UI, Paystack",
      img: "fra.png"
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
        projects.map(project => {
          const fluidImage = data.allImageSharp.edges.find(edge => edge.node.fluid.src.includes(project.img));
          return (
            <div key={project.id}>
              <Img fluid={fluidImage.node.fluid} />
              <ContentWrapper>
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
              </ContentWrapper>
            </div>
          )
        })
      }
    </ProjectWrapper>
  </section>
)}

export default Portfolio