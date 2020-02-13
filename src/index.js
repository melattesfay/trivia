import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App';
import {buildFirebase} from './clients/firebase';

var database = buildFirebase();
var databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
 const questions = data.val();
 console.log(questions);

 console.log(questions["-LVd5IPeo9knAOjr2JIR"].question_text);
// Do something with the questions
    ReactDOM.render(<App questionList={questions} />, document.getElementById('root'));

});

