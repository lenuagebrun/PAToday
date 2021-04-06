import React from "react";
import Accordion from "../AccordionTemplate/Accordion";

const styles = {
  projects: {
    color: "rgb(231, 231, 231)",
    margin: "1vh 1vw 1vh 1vw",
    fontFamily: "Source Code Pro, monospace",
  },
};

function Accordions() {
  return (
    <div>
      <Accordion
        title="P-A in a Nutshell"
        image="https://i.imgur.com/btSGJZU.png"
        content="Hello! My name is Pierre-Alexandre. I am French-Canadian and I'm just starting out in the world of coding.<br />Started as a salesman while studying in mechanical engineering, I always thought computers were my comfort zone and I really enjoyed coding as soon as I tried it out.<br />After falling in love with the art of programming, I decided to apply for a coding bootcamp at General Assembly where I gratuated with more than satisfying grades.<br />I am now in search of a job in the field.<br />You will be able to see some of the projects I've done (and still work on) below."
        background="rgb(226, 173, 255)"
      />
      <h3 style={styles.projects}>Projects</h3>
      <Accordion 
      title="Wellness" 
      image="https://i.imgur.com/ur3BKuF.png?1" 
      content=" Wellness is a small React project I built from a wireframe made by someone in UX design. Still in construction, but very happy about how this one is turning out.<br/ ><br />
      Languages used: React.js, CSS"
      />
      <Accordion
        title="Hangman Game"
        image="https://i.imgur.com/eAVjTDX.png"
        content="The very first coding project I did. A simple game of hangman that helped me get a grasp on functions, DOM elements and just coding in general. <br /><br />
        <a href='https://hangman-game.lenuagebrun.repl.co/' target='_blank'>Try it yourself!</a><br /><br />
        Languages used: Javascript, HTML, CSS"
      />
      <Accordion
        title="The Hedron Archive"
        image="https://deckmaster.info/images/sets/OGW_C.png"
        content="This project is my first functioning website made with Node, Express and MongoDB. This is the first time I had to work with an API (great API by the way) and my favourite project so far.<br /><br />
        <a href='https://thehedronarchive.herokuapp.com/' target='_blank'>Check it out</a><br /><br />
        Languages used: Javascript, Express, Node.js, MongoDB, HTML CSS"
      />
      <Accordion
        title="GA.fm"
        image="https://i.imgur.com/eK74Vzb.png"
        content="My first group project was a music album rating website.<br />I was in charge of designing, building the album pages, API as well as taking care of the back-end with the reviews and the collections of each user.<br />The rest such as: main page design, collection page design and authentication were my teammates' contributions.<br /><br />
        <a href='https://gafm.herokuapp.com/'
        target='_blank'>Check it out</a><br/ ><br />
        Languages used:Python, Django, PostreSQL, HTML, CSS"
        background="rgb(236, 27, 35)"
        textcolor="white"
      />
      <Accordion
        title="Eventer"
        image="https://i.imgur.com/7gblHy3.png"
        content="Second group project made with React. This one was a bit ambitious, but I love it still.<br />This was our final course project and we decided to go with a social event platform.<br /> I was in charge of design, API and all of the front-end.<br />I had a great time working with React.<br/ ><br/ >
        <a href='http://eventer-2020.herokuapp.com/'
        target='_blank'>Check it out</a><br /><br />
        Languages used: React.js, Node.js, Express, MongoDB/Mongoose, HTML, CSS"
        background="rgb(153, 224, 217)"
        textcolor="white"
      />
      <Accordion
        title="Coming Soon"
        image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b47ae333-6120-4f76-a614-ffad39b897ee/dbciwf4-c68941de-7a4b-47f7-94d7-1a93bae30392.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjQ3YWUzMzMtNjEyMC00Zjc2LWE2MTQtZmZhZDM5Yjg5N2VlXC9kYmNpd2Y0LWM2ODk0MWRlLTdhNGItNDdmNy05NGQ3LTFhOTNiYWUzMDM5Mi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.v7_BdRJHrfo4F_pGQ2pzGPdw2BdBeVBy6JhpiVT2RO0"
        content="I am currently working on a project with a small team of programmers and UXDI people.<br /> Very excited to put it on here when it is done."
      />
    </div>
  );
}

export default Accordions;
