import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am currently a sofware engineering student at Flatiron Code School!</p>
      <img src={image} alt="I made this"></img>
    </div>
  )
}

export default About;
