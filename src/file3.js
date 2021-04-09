import React, { Component } from 'react';
import personsx from "./file2"
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  function WelcomePerson(props){
console.log(personsx)

      return <h1>hi,{props.personsx}</h1>
  }
  function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person={personsx}  />

      </div>
    );
  }

export default MultiWelcome