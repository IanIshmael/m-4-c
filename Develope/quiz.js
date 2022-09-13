var quizEl = document.getElementById("quiz")
var titleEl = document.getElementById("title");
var choice1El = document.getElementById("a-text");
var choice2El = document.getElementById("b-text");
var choice3El = document.getElementById("c-text");
var choice4El = document.getElementById("d-text");
var input1El = document.getElementById("a");
var input2El = document.getElementById("b");
var input3El = document.getElementById("c");
var input4El = document.getElementById("d");
var buttonEl = document.getElementById("submit");
var questionsIndex = 0;
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var message = " ";
var words = message.split(" ");
var score = 0

/* timer  */
function countdown() {
  var timeLeft = 65;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";

      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";

      clearInterval(timeInterval);

      displayMessage();
    }
  }, 1000);
}
function displayMessage() {
  var wordCount = 0;

  var msgInterval = setInterval(function () {
    if (words[wordCount] === undefined) {
      clearInterval(msgInterval);
    } else {
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 1000);
}

countdown();



//list of all questions, choices, and answers
var questions = [
  {
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in JavaScript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    answer: "console.log",
  },
];
 


function getNextQuestion() {
  /*  if (questionsIndex === 5){
        return
    } */
     
  checkAnswer();
  questionsIndex++;
  titleEl.textContent = questions[questionsIndex].title;
  choice1El.textContent = questions[questionsIndex].choices[0];
  choice2El.textContent = questions[questionsIndex].choices[1];
  choice3El.textContent = questions[questionsIndex].choices[2];
  choice4El.textContent = questions[questionsIndex].choices[3];
}

function checkAnswer() {
  if (input1El.checked) {
    if (choice1El.textContent === questions[questionsIndex].answer) {
      console.log("correct!");
    } else {
      console.log("incorrect!");
    }
  }
  if (input2El.checked) {
    if (choice2El.textContent === questions[questionsIndex].answer) {
      console.log("correct!");
    } else {
      console.log("incorrect!");
    }
  }
  if (input3El.checked) {
    if (choice3El.textContent === questions[questionsIndex].answer) {
      console.log("correct!");
    } else {
      console.log("incorrect!");
    }
  }
  if (input4El.checked) {
    if (choice4El.textContent === questions[questionsIndex].answer) {
      console.log("correct!");
    } else {
      console.log("incorrect!");
    }
  }
}
buttonEl.addEventListener("click", getNextQuestion);
 

