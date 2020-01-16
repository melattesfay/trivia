import React, { Component } from 'react';
import '../css/App.css';
import Answer from './Answer';
// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
        <Answer> </Answer>
        <Answer> </Answer>
        <Answer> </Answer>
        <Answer> </Answer>

        
      </div>
    );
  }
}

export default App;