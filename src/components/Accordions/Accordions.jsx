import React from "react";
import Accordion from "../AccordionTemplate/Accordion";

function Accordions() {
  return (
    <div>
      <Accordion
        title="Story of P-A"
        image="https://i.imgur.com/btSGJZU.png"
        content="Pierre-Alexandre is a french canadian boi who is just starting out in the world of coding"
        background= 'rgb(226, 173, 255)'
      />
      <Accordion
        title="Hangman Game"
        image="https://i.imgur.com/eAVjTDX.png"
        content="The very first coding project I did. A simple game of hangman that helped me get a grasp on functions, DOM elements and just coding in general. 
        <br /><br />
        <a href='https://hangman-game.lenuagebrun.repl.co/' target='_blank'>Try it yourself!</a>
        <br /><br />
        Language used: Javascript"
      />
      <Accordion
        title="The Hedron Archive"
        image="https://deckmaster.info/images/sets/OGW_C.png"
        content="This project is my first functioning website made with Node, Express and MongoDB. My favourite project I have done so far.
        <br /><br />
        <a href='https://thehedronarchive.herokuapp.com/' target='_blank'>Check it out</a>
        <br /><br />
        Languages used: Javascript, Express, Node.js, MongoDB"
      />
      <Accordion
        title="GA.fm"
        image="https://i.imgur.com/eK74Vzb.png"
        content="First Django app"
        background= 'rgb(236, 27, 35)'
        textcolor='white'
      />
      <Accordion
        title="Eventer"
        image="https://i.imgur.com/7gblHy3.png"
        content="Group project made in react"
        background= '	rgb(153, 224, 217)'
        textcolor='white'
      />
    </div>
  );
}

export default Accordions;
