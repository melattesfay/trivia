import React, { Component } from 'react';
import '../css/App.css';
import Answer from './Answer';
// import components

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      num : 0 
     }
  }
 nextBtn(){
    var newCQ = this.state.currentQuestion + 1;
    var newNum= this.state.num + 1;
    if (newNum <= 10) {
      this.setState({ currentQuestion: newCQ,
        num :newNum
      });
    }
 }



  

  render() {
    return (
      <div className="app">
        <h1 id="title">Guess where this movie/tv show character is from! Quiz!</h1>
        <h1 class= "questionBox" id="q1"> Question {this.state.currentQuestion}:
        {this.props.questionList[this.state.currentQuestion].question_text}</h1>


        <button class="choiceBox"> {this.props.questionList[this.state.currentQuestion].choices[0]}</button>
        <button class="choiceBox">  {this.props.questionList[this.state.currentQuestion].choices[1]}</button>
        <button class="choiceBox">  {this.props.questionList[this.state.currentQuestion].choices[2]}</button>
        <button class="choiceBox">  {this.props.questionList[this.state.currentQuestion].choices[3]}</button>
        
        <button onClick={() => this.nextBtn()}>Next Question</button>
        
       
        
      </div>
    );
  }
}

export default App;

// $(document).ready(function()
// $(".choiceBox").click(function(){
  // $("#nextBtn").hide();
// });

// });