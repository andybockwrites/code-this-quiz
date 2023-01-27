var highScoresEl = $('#high-scores');
var tickingTimerEl = $('#time-left');
var quizBoxContainerEl = $('.quiz-box');
var questionsElement = $('#questions');
var answersElement = $('#answers');
var answerOne = $('#A');
var answerTwo = $('#B');
var answerThree = $('#C');
var answerFour = $('#D');
var resultsEl = $('#correct-wrong');



var quizData = [
    {
        question:"In California, you can't legally buy a mousetrap without having what? (a hunting license)",
        A:'Written approval by the governor',
        B:'A hunting license',
        C: 'Vegan Cheese',
        D: 'Photograph proof of the mice',
        correct: "B"
    },
    {
        question:"In Minnesota, it is illegal to tease what type of animal? (skunks)",
        A:'Skunks',
        B:'Bears',
        C: 'Foxes',
        D: 'Dogs',
        correct: "A"
    },
    {
        question:"In this state, chickens outnumber people 260 to one",
        A:'Texas',
        B:'Wisconson',
        C: 'Florida',
        D: 'Delaware',
        correct: "D"
    },
    {
        question:"What is illegal to eat with a cherry pie in Kansas? (ice cream)",
        A:'Any entrees',
        B:'Key Lime Pie',
        C: 'Ice Cream',
        D: 'Fresh Cherries',
        correct: "C"
    },
    {
        question:"Which state passed a law in 1961 making it illegal to eat fried chicken with a fork? (Georgia)",
        A:'Louisiana',
        B:'Alabama',
        C: 'Kentucky',
        D: 'Georgia',
        correct: "D"
    }
];

console.log(quizData)


var points = 0;
var currentQuiz = 0;

function test() {
    answersElement.addEventListener("click");
}

loadQuiz();
function loadQuiz() {
    var currentQuizData = quizData[currentQuiz];
    console.log(currentQuizData);
    questionsElement.text(currentQuizData.question);
    console.log(quizData[0].A)
    answerOne.text(quizData[0].A);
    answerTwo.text(quizData[0].B);
    answerThree.text(quizData[0].C);
    answerFour.text(quizData[0].D);
    // console.log(quizData[0].A)

    if ((answerOne || answerThree || answerFour).on('click',() => {
        resultsEl.text("Sorry! That's incorrect");
        secondQuestion();
        console.log(resultsEl)
    }));
    else {answerTwo.on('click',() => {
            resultsEl = resultsEl.text("Congratulations! That's correct");
            points ++;
            secondQuestion();
    })};
}
   /*if (answerTwo.click() == true) {
        resultsEl = resultsEl.text("Congratulations! That's correct");
        points ++;
        secondQuestion();
    } else if (answerOne.click() == true|| answerThree.click() == true|| answerFour.click() == true) {
        resultsEl.text("Sorry! That's incorrect");
        secondQuestion();
    }
}

/*
    if (answerOne.addEventListener('click', function() {
        alert("Sorry! That's incorrect");
        secondQuestion();
    })); else if (
        answerThree.addEventListener('click', function() {
            alert("Sorry! That's incorrect");
            secondQuestion();
    })); else if (
        answerFour.addEventListener('click', function() {
            alert("Sorry! That's incorrect");
            secondQuestion();
    })); else {
        answerTwo.addEventListener('click', function(){
        resultsEl = resultsEl.text("Congratulations! That's correct");
        points ++;;
        secondQuestion();
       })};

       */

    /*
    if ((answerOne || answerThree || answerFour).click(function() {
        resultsEl.text("Sorry! That's incorrect");
        secondQuestion();
        console.log(resultsEl)
    }));
    else {answerTwo.click(function() {
            resultsEl = resultsEl.text("Congratulations! That's correct");
            points ++;
            secondQuestion();
    });
    */

function secondQuestion() {
    var currentQuizData = quizData[currentQuiz];
    console.log(currentQuizData);
    questionsElement.text(currentQuizData.question);
    console.log(quizData[1].A)
    answerOne.text(quizData[1].A);
    answerTwo.text(quizData[1].B);
    answerThree.text(quizData[1].C);
    answerFour.text(quizData[1].D);
    if (answerTwo.click == true){
        resultsEl = resultsEl.text("Congratulations! That's correct");
        points ++;
    } else (answerOne.click == true|| answerThree.click == true|| answerFour.click == true)
        resultsEl.text("Sorry! That's incorrect");
}
    


    /*for (var i = 1; i > quizData; i++) {

    } */

/* Creat Li to place answers in (quizData). Put inside of a loop. */

