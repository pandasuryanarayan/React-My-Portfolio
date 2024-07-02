import React from "react";
import PropTypes from "prop-types";
import arrowSvg from "../images/down-arrow.svg";
import image from "../images/home-image.jpg";

const imageAltText =
  "This is a 3D rendering of a cartoon boy sitting at a desk, looking at a laptop. He is wearing glasses and a yellow hoodie. There is a remote control toy plane on the desk next to the laptop and a book in the upper right corner of the desk. The boy has a happy expression on his face, and it seems like he is enjoying his time on the computer. The background is a dark blue.";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "5rem", left: "2rem", width: "17rem" }}>
        <h1
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "5rem",
            color: "yellow",
            marginBottom: "0.5rem",
          }}
        >
          {name}
        </h1>
        <h2
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "2.5rem",
            fontWeight: "normal",
            color: "#666",
            marginBottom: "0",
          }}
        >
          {title}
        </h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
