import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App';
import {buildFirebase} from './clients/firebase';

var database = buildFirebase();
var databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
 const questions = Object.values(data.val());
 console.log("List of questions:");
 console.log(questions);
 console.log(questions[9].question_text);
// Do something with the questions
    ReactDOM.render(<App questionList={questions} />, document.getElementById('root'));

});

