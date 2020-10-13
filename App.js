
import React, { Component } from 'react';
import logo from './logo.svg';
import  './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';

class App extends Component {
  render() {
    return (
      <div className="App">
      < Message/>
      { /*
        <Greet name="priyanka"  heroName="batman" >
        <p> This is children props.</p>
        </Greet>
        <Greet name="prachi" heroName="superman" >
        <button>Submit</button>
        </Greet>
        <Greet name="aman"  heroName="Wonder women" />
       <Welcome name="priyanka"  heroName="batman"/> 
       <Welcome name="prachi" heroName="superman"/> 
      <Welcome name="aman"  heroName="Wonder women"/>  */}
        { /* <Hello /> */}
      </div>
    );
  }
}

  

export default App;
