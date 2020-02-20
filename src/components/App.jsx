import React, { Component } from 'react';
import '../css/App.css';
import Answer from './Answer';
// import components

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        currentQuestion: 1   
    }
  }

  

  render() {
    return (
      <div className="app">
        <h1 id="title">Guess where this movie/tv show character is from! Quiz!</h1>
        <strong id="timer"> Timer: 0 </strong>
        <h1 class= "questionBox" id="q1"> Question 1:
        {this.props.questionList[this.state.currentQuestion].question_text}</h1>
        <button class="choiceBox"> {this.props.questionList[0].choices[0]}</button>
        <button class="choiceBox">  {this.props.questionList[0].choices[1]}</button>
        <button class="choiceBox">  {this.props.questionList[0].choices[2]}</button>
        <button class="choiceBox">  {this.props.questionList[0].choices[3]}</button>
        
       
        
      </div>
    );
  }
}

export default App;