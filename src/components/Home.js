import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
      <h1 style={{color:'firebrick'}}>{name} is a web developer from {city}</h1>
  )
}

export default Home;
