class Question {
    constructor(data){
        const{ questions, answere1, answere2,answere3,answere4,correctanswere}=data
        this.questions= questions;
        this.answere1= answere1;
        this.answere2= answere2;
        this.answere3= answere3;
        this.answere4= answere4;
        this.correctanswere= correctanswere;

    }

    getQuestion(){
        return this.questions;
    }
    getAnswere1(){
        return this.answere1;
    }
}

class Choices{
    constructor(data){
        const{ choice1,choice2,choice3,choice4}=data
        this.choice1=choice1;
        this.choice2=choice2;
        this.choice3=choice3; 
        this.choice4=choicee4; 
    }
}

get