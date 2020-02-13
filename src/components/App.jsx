import React, { Component } from 'react';
import '../css/App.css';
import Answer from './Answer';
// import components

class App extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <div className="app">
        <h1 id="title">Guess where this movie/tv show character is from! Quiz!</h1>
        <strong id="timer"> Timer: 0 </strong>
        <h1 class= "questionBox" id="q1"> Question 1:
        {this.props.questionList["-LVd5IPeo9knAOjr2JIR"].question_text}</h1>
        <button class="box1"> one</button>
        <button class="box1"> one</button>
        <button class="box1"> one</button>
        <button class="box1"> one</button>
       
        
      </div>
    );
  }
}

export default App;