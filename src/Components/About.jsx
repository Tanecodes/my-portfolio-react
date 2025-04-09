import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="boxOne">
        <h2>About me</h2>
        <p>
          My name is Tane im 33 years old and i was born and raised in Aotearoa New Zealand 
          but i now reside here in Brisbane Australia.
          Like the intro says i am a self taught front end web developer if i can even call my self that.
          Everything i've learned is from researching on my own and learning on the go while making projects.
          I first learned to code through the Odin Project and once i got familiar with the basics i kinda
          just went my own route from then on. Eventually i will teach myself fullstack development but until
          then front end will keep me occupied for now. I still have alot to learn no doubt but i'm making
          good progress and staying consistant which is the main goal for now. My dream is to one day become a Dev 
          and code for a living.
        </p>
      </div>
      <div className="boxTwo">
        <h2>Hobbies</h2> 
          <ul>
            <li>Gaming</li>
            <li>Spending time with my children</li>
            <li>Web development</li>
            <li>Coding fun solo projects</li>
            <li>Giving my partner a headache</li>
            <li>Watching movies or TV shows</li>
            <li>More coding</li>
          </ul>
      </div>
      
    </div>
  );
}

export default About;