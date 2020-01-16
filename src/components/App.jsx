import React, { Component } from 'react';
import '../css/App.css';
// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
        <h1 class= "questionBox" id="q1"> Question 1</h1>

        <button class="box1"> one</button>
        <button class="box1"> one</button>
        <button class="box1"> one</button>
        <button class="box1"> one</button>
        
      </div>
    );
  }
}

export default App;