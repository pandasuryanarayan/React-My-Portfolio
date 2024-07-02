import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I am a passionate front and back end developer focused on crafting user-centric digital experiences. With expertise in HTML5, CSS3, JavaScript, React.js, Node.js, Express, and MongoDB, I specialize in building responsive, scalable applications. Committed to continuous learning and staying updated with industry trends, I am driven by a passion for problem-solving and optimizing user experiences through intuitive design.";

const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "API integration and third-party services",
  "Mobile user interfaces",
  "Web Development",
  "Database management and design",
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. I thrive in collaborative environments, merging innovative ideas with practical execution.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
