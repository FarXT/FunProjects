
// DOM Elements:
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const returnButton = document.getElementById("return-btn");



  // DOM elements for Questions: 
  const iqQuestion = document.getElementById("iq");
  const mathQuestion = document.getElementById("math");
  const engQuestion = document.getElementById("eng");
  const lawQuestion = document.getElementById("law");
  const philosophyQuestion = document.getElementById("philosophy");
  const geoQuestion = document.getElementById("geo");
  const historyQuestion = document.getElementById("history");

    
  // QUIZ STATE VARS:
  let currentQuestionIndex = 0;
  let score = 0;
  let answersDisabled = false;
  let currentQuestionBank = [];

  totalQuestionsSpan.textContent = 10;
  maxScoreSpan.textContent = 10;



// Questions:
import { iqQuestions , mathQuestions , englishQuestions , lawQuestions , 
         philosophyQuestions , geographyQuestions , historyQuestions } from "./Question-bank.js";


const questionBanks = {
  iq: iqQuestions,
  math: mathQuestions,
  eng: englishQuestions,
  law: lawQuestions,
  philosophy: philosophyQuestions,
  geo: geographyQuestions,
  history: historyQuestions,
};

const checkboxes = document.querySelectorAll(".question-bank input");
      checkboxes.forEach( (checkbox) => {
        checkbox.addEventListener("change", (e) => {
            const id = e.target.id;
            const isChecked = e.target.checked;

            if(isChecked){
              currentQuestionBank = questionBanks[id];
              console.log(currentQuestionBank);
              
            }

        }
        );
      });




// event listeners:
startButton.addEventListener("click", function(){
  if(iqQuestion.checked || mathQuestion.checked || engQuestion.checked || lawQuestion.checked || philosophyQuestion.checked || 
     geoQuestion.checked || historyQuestion.checked){
     startQuiz();
  }
  else{
    window.alert("لطفا حداقل یک مورد را انتخاب کنید.");
  }
});


restartButton.addEventListener("click", restartQuiz);
returnButton.addEventListener("click" , () => {
   
  quizScreen.classList.remove("active");
  startScreen.classList.add("active");

})



function startQuiz() {
  // reset vars
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion(){
  // reset state
  answersDisabled = false;

  const currentQuestion = currentQuestionBank[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / currentQuestionBank.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  // optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  // const isCorrect = selectedButton.dataset.correct === "true" ? true : false; >>>>> same thing
  const isCorrect = selectedButton.dataset.correct === "true";

  // Here Array.from() is used to convert the NodeList returned by answersContainer.children into an array, this is because the NodeList is not an array and we need to use the forEach method
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < currentQuestionBank.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / currentQuestionBank.length) * 100;

  if (percentage == 100) {
    resultMessage.textContent = "عالی! نابغه‌ای!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "خیلی خوب! کارت درسته!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "خوبه! ادامه بده!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "بد نبود! دوباره تلاش کن!";
  } else {
    resultMessage.textContent = "عیبی نداره، تمرین کن بهتر میشی!";
  }
}


function restartQuiz() {
  resultScreen.classList.remove("active");
  // reload webpage
  window.location.reload();
  startQuiz();
}



