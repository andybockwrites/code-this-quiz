var highScoresEl = $('#high-scores');
var tickingTimerEl = $('#time-left');
var quizBoxContainerEl = $('.quiz-box');
var questionsElement = $('#questions');
var answersElement = $('#answers');
var ResultsEl = $('#correct-wrong');

var question0 = "In California, you can't legally buy a moustrap without having what? (a hunting license)";
var question1 = "In Minnesota, it is illegal to tease what type of animal? (skunks)";
var question2 = "According to those close to him, what was Walt Disney truly afraid of? (mice)";
var question3 = "What is illegal to eat with a cherry pie in Kansas? (ice cream)";
var question4 = "What state passed a law in 1961 making it illegal to eat fried chicken with a fork? (Georgia)";

var answers1 = ['Written approval by the governor', 'A hunting license', 'Vegan Cheese', 'Photograph proof of the mice'];
var answers2 = ['Skunks', 'Bears', "Foxes", "Dogs"];
var answer3 = ['Spiders', 'Artistic Theft', 'Lightning', 'Mice'];
var answer4 = ['Any entrees', 'Key Lime Pie', 'Ice Cream', 'Fresh Cherries'];
var answer5 = ['Louisiana', 'Alabama', 'Kentucky', 'Georgia'];



var question0Funct = function() {
    questionsElement.append(question0).text($(question0));
    answersElement[0].text($(answers1[0]));
    answersElement[1].text($(answers1[1]));
    answersElement[2].text($(answers1[2]));
    answersElement[3].text($(answers1[3]));
    if (
        (questionsElement[0] === true) ||
        (answersElement[1].input.value === true)) {
           ResultsEl.text("That's Correct!")
        } else {
            ResultsEl.text("Sorry! That's incorrect.") 
        }
}

var question1Funct = function() {
    questionsElement.append(question1);
    answersElement[0].text($(answers1[0]));
    answersElement[1].text($(answers1[1]));
    answersElement[2].text($(answers1[2]));
    answersElement[3].text($(answers1[3]));
    if (
        (questionsElement[1] === true) ||
        (answersElement[0].input.value === true)) {
           ResultsEl.text("That's Correct!")
        } else {
            ResultsEl.text("Sorry! That's incorrect.") 
        }
}

var question2Funct = function() {
    questionsElement.append(question2);
    answersElement[0].text($(answers2[0]));
    answersElement[1].text($(answers2[1]));
    answersElement[2].text($(answers2[2]));
    answersElement[3].text($(answers2[3]));
    if (
        (questionsElement[2] === true) ||
        (answersElement[1].input.value === true)) {
           ResultsEl.text("That's Correct!")
        } else {
            ResultsEl.text("Sorry! That's incorrect.") 
        }
}

var question3Funct = function() {
    questionsElement.append(question3);
    answersElement[0].text($(answers3[0]));
    answersElement[1].text($(answers3[1]));
    answersElement[2].text($(answers3[2]));
    answersElement[3].text($(answers3[3]));
    if (
        (questionsElement[3] === true) ||
        (answersElement[3].input.value === true)) {
           ResultsEl.text("That's Correct!")
        } else {
            ResultsEl.text("Sorry! That's incorrect.") 
        }
}

var question4Funct = function() {
    questionsElement.append(question4);
    answersElement[0].text($(answers4[0]));
    answersElement[1].text($(answers4[1]));
    answersElement[2].text($(answers4[2]));
    answersElement[3].text($(answers4[3]));
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
