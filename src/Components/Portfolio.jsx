/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";
import image from "../images/projects.jpg";

const imageAltText = "desktop with books and laptop";
const projectList = [
  {
    title: "React News Portal",
    description:
      "An innovative React-powered news portal delivering real-time updates with a modern interface. Seamlessly integrates user preferences and showcases curated content for informed browsing.",
    url: "https://astonishing-pixie-8b000c.netlify.app/",
  },
  {
    title: "React Weather App",
    description:
      "A React-based weather website providing accurate forecasts and intuitive UI. Seamlessly integrates location-based data for personalized weather updates.",
    url: "https://adorable-froyo-d94f7f.netlify.app/",
  },
  {
    title: "My Resume Site",
    description:
      "Created resume and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://pandasuryanarayan.github.io/Portfolio/",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
