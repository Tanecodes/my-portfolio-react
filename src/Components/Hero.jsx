import React from "react";
import "./Hero.css";
import profilePic from "../assets/profilePic.jpg";

function Hero() {
  return (
    <div className="hero">
      <img src={profilePic} alt="profile picture" />
      <div className="introWrapper">
        <h2>Hey i'm Tane</h2>
        <br />
        <p>
          I'm a self taught front end web developer. I'm currently teaching myself front end
          and all that comes with it HTML,CSS,Javascript,React. So far i've made a few small projects with just vanilla html/css/javascript
          and this portfolio is my first project using React. I'm still in the beginning stages of coding
          but my GitHub is pretty active from all my commits showing on the graph squares. If you visit my GitHub you can see.
        </p>  
      </div>
      <div>
        <p className="sideText">
        &lt;CODER&gt;
        </p>
      </div>
    </div>
  );
}

export default Hero;