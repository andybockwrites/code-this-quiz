var highScoresEl = $('#high-scores');
var tickingTimerEl = $('#time-left');
var quizBoxContainerEl = $('.quiz-box');
var questionsElement = $('#questions');
var answersElement = $('#answers');
var ResultsEl = $('#correct-wrong');

var question0 = ("In California, you can't legally buy a mousetrap without having what? (a hunting license)");
var question1 = ("In Minnesota, it is illegal to tease what type of animal? (skunks)");
var question2 = ("According to those close to him, what was Walt Disney truly afraid of? (mice)");
var question3 = ("What is illegal to eat with a cherry pie in Kansas? (ice cream)");
var question4 = ("Which state passed a law in 1961 making it illegal to eat fried chicken with a fork? (Georgia)");

var answers1 = ['Written approval by the governor', 'A hunting license', 'Vegan Cheese', 'Photograph proof of the mice'];
var answers2 = ['Skunks', 'Bears', "Foxes", "Dogs"];
var answer3 = ['Spiders', 'Artistic Theft', 'Lightning', 'Mice'];
var answer4 = ['Any entrees', 'Key Lime Pie', 'Ice Cream', 'Fresh Cherries'];
var answer5 = ['Louisiana', 'Alabama', 'Kentucky', 'Georgia'];



var question0Funct = function() {
    questionsElement(question0).text($(question0));
    answersElement[0].append.text($(answers1[0]));
    answersElement[1].append.text($(answers1[1]));
    answersElement[3].append.text($(answers1[2]));
    answersElement[4].append.text($(answers1[3]));
    if (
        (questionsElement[0] === true) ||
        (answersElement[1].input.value === true)) {
           ResultsEl.text("That's Correct!")
        } else {
            ResultsEl.text("Sorry! That's incorrect.") 
        }
}

var question1Funct = function() {
    questionsElement(question1).text(question1);
    answersElement[0].append.text($(answers1[0]));
    answersElement[1].append.text($(answers1[1]));
    answersElement[3].append.text($(answers1[2]));
    answersElement[4].append.text($(answers1[3]));
    if (
        (questionsElement[1] === true) ||
        (answersElement[0].input.value === true)) {
           ResultsEl.text("That's Correct!")
        } else {
            ResultsEl.text("Sorry! That's incorrect.") 
        }
}

var question2Funct = function() {
    questionsElement(question2).text(question2);
    answersElement[0].append.text($(answers1[0]));
    answersElement[1].append.text($(answers1[1]));
    answersElement[3].append.text($(answers1[2]));
    answersElement[4].append.text($(answers1[3]));
    if (
        (questionsElement[2] === true) ||
        (answersElement[1].input.value === true)) {
           ResultsEl.text("That's Correct!")
        } else {
            ResultsEl.text("Sorry! That's incorrect.") 
        }
}

var question3Funct = function() {
    questionsElement(question4).text(question3);
    answersElement[0].append.text($(answers1[0]));
    answersElement[1].append.text($(answers1[1]));
    answersElement[3].append.text($(answers1[2]));
    answersElement[4].append.text($(answers1[3]));
    if (
        (questionsElement[3] === true) ||
        (answersElement[3].input.value === true)) {
           ResultsEl.text("That's Correct!")
        } else {
            ResultsEl.text("Sorry! That's incorrect.") 
        }
}

var question4Funct = function() {
    questionsElement(question5).text(question4);
    answersElement[0].append.text($(answers1[0]));
    answersElement[1].append.text($(answers1[1]));
    answersElement[3].append.text($(answers1[2]));
    answersElement[4].append.text($(answers1[3]));
    if (
        (questionsElement[4] === true) ||
        (answersElement[3].input.value === true)) {
           ResultsEl.text("That's Correct!")
        } else {
            ResultsEl.text("Sorry! That's incorrect.") 
        }
}


document.addEventListener('click', question0Funct());

question0Funct();
question1Funct();
question2Funct();
question3Funct();
question4Funct();
