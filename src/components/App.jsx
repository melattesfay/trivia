import React, { Component } from 'react';
import '../css/App.css';
import Answer from './Answer';
// import components

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        currentQuestion: 0   
    }
  //   this.state = {
  //     choices: 2   
  // }
  }
 nextBtn(){
    var newCQ = this.state.currentQuestion + 1;
    this.setState({ currentQuestion: newCQ });
 }

//  choicebox(){
//   var newCB = this.state.choices + 1;
//   this.setState({ choices: newCB });

//  }

  

  render() {
    return (
      <div className="app">
        <h1 id="title">Guess where this movie/tv show character is from! Quiz!</h1>
        <h1 class= "questionBox" id="q1"> Question 1:
        {this.props.questionList[this.state.currentQuestion].question_text}</h1>
        <button class="choiceBox"> {this.props.questionList[0].choices[0]}</button>
        <button class="choiceBox">  {this.props.questionList[0].choices[0]}</button>
        <button class="choiceBox">  {this.props.questionList[0].choices[0]}</button>
        <button class="choiceBox">  {this.props.questionList[0].choices[0]}</button>
        
        <button onClick={() => this.nextBtn()}>Next Question</button>
        console.log("hello");
       
        
      </div>
    );
  }
}

export default App;