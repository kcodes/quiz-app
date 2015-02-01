var questions = [{
        question: "How many weeks has Federer held the number 1 position?",
        choices: ["320", "295", "302"],
        answer: 3},
    {
        question: "How many Grand Slam finals in a row has Federer appeared in?",
        choices: ["12", "10", "8"],
        answer: 2},
    {
        question: "How many Grand Slam finals has Federer appeared in?",
        choices: ["25", "30", "20"],
        answer: 1},
    {
        question: "In 2006, Federer played 17 tournaments and reached the final in _____",
        choices: ["17", "16", "14"],
        answer: 2},
    {
        question: "In which year did Federer have mononucleosis?",
        choices: ["2007", "2006", "2008"],
        answer: 3},
    {
        question: "What year did Federer break Sampras' Grand Slam record?",
        choices: ["2009", "2010", "2007"],
        answer: 1},
    {
        question: "How many Wimbledon titles does Federer have?",
        choices: ["5", "7", "6"],
        answer: 2},
    {
        question: "Which ATP player has the most tournament losses to Federer?",
        choices: ["Hewitt", "Murray", "Roddick"],
        answer: 3},
    {
        question: "How many times has Federer won the ATPWorldTour.com Fans' Favorite Award?",
        choices: ["12", "8", "6"],
        answer: 1},
    {
        question: "Federer and the Swiss team won the Davis Cup in what year?",
        choices: ["2012", "2014", "2010"],
        answer: 2}
];

$(document).ready(function() {
    var numberCorrect = 0;
    var questionNumber = 0;
    var display = function () {
        if (questionNumber === questions.length) {
            $("h2").text("You finished the quiz! You scored " + numberCorrect + " points out of 10!" + " Refresh the page to take the quiz again.");
            for (x = 0; x < 3; x++) { $("#ans" + x).remove(); }
        } else {
            $("h2").text(questions[questionNumber].question);
            for (x = 0; x < 3; x++) {
                $("#ans" + x).html("<input type='radio' name='answer' value='" + x + "'>" + questions[questionNumber].choices[x] + "</input>");
            }
        }
    };
    display();
    $("#button").on("click", "#text", function() {
        var userAnswer = +$('input[name=answer]:checked').val();
        var correctAnswer = questions[questionNumber].answer - 1; 
        if (userAnswer === correctAnswer) {
            numberCorrect = numberCorrect + 1;
            alert("You're answer is correct! " + numberCorrect + " points");
        } else {
            alert("Sorry, that's the wrong answer! You still have " + numberCorrect + " points");
        }
        questionNumber = questionNumber + 1;
        display();
    });
});