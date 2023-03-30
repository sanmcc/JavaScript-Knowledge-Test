const startButton = document.getElementById('start-btn');
const quizContainerElement = document.getElementById ('quiz-container');
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.btn');


// event listener to show quiz-container on start
startButton.addEventListener('click', () => {
	quizContainerElement.classList.remove('hide');
  });


  function startGame() {
	// console.log('here we go');
	startButton.classList.add('hide');
	quizContainerElement.classList.remove('hide');
  	currentQuestionIndex = 0;
	showQuestion(myQuestions[currentQuestionIndex]);
  }

function showQuestion(question) {
console.log("Showing question:", question);
	
questionElement.innerText = question.question;

answerButtons.forEach((button, index) => {
	button.innerText = question.answers[index];

    });



}

answerButtons.forEach(button => {
	button.addEventListener('click', () => {
	  checkAnswer(button);
	});
  });

  function startTimer(){
	var timer = 60;
	setInterval(function() {
	  timer--;
	  if (timer >= 0) {
		span = document.getElementById("time");
		span.innerHTML = timer;
	  }
	  if (timer === 0) {
		  alert('GAME OVER');
		  clearInterval(timer);
	  }
	}, 1000);
  }
//starting game and calling timer function
  function startGameAndTimer() {

	score = 0;
	currentQuestionIndex = 0;
  
	timeLeft = 60;

	startGame();
	startTimer();
  }
  
  startButton.addEventListener('click', startGameAndTimer);
  
//question object
var myQuestions = [
	{
		question: "Question 1: Which of the following NOT a correct data type using JavaScript?",
		answers: [
			'Boolean',
			'Server',
			'Integer',
			'String'
		],
		correctAnswer: '1'
	},
	{
		question: "Question 2: What is true about 'This' when used as a keyword?",
		answers: [
			'Refers to the object that is was called from',
			'Is used to represent no value or no object',
			'Not assigned to any value',
			'Assigns a number to a variable'
],
		correctAnswer: '0'
	},

    {
		question: "Question 3: Which is a FALSE statement in regards to “==” and “===”?",
		answers: [
			'"==" checks for equal value',
			'"===" is a string',
			'"===" checks for equal value and type',
			'"===" will return a Boolean result'
		],
		correctAnswer: '1'
	},

    {
		question: "Question 4: Which symbol is used to comment in JavaScript?",
		answers: [
			'##',
			'**',
			'~~',
			'//'
		],
		correctAnswer: '3'
	},
];

  //end game and store stats
function endGame() {
	
	quizContainerElement.classList.add('hide');
  
	
	alert(`Your score is ${score}`);
  
	
	startButton.classList.remove('hide');
	score = 0;
	currentQuestionIndex = 0;
  }
  
//function to check the answer and subtract time if wrong 
function checkAnswer(selectedButton) {
	console.log("Selected answer:", selectedButton.dataset.answer);
	
	let selectedButtonIndex = -1;
	answerButtons.forEach((button, index) => {
	  if (button === selectedButton) {
		selectedButtonIndex = index;
	  }
	});
	
	if (selectedButtonIndex === parseInt(myQuestions[currentQuestionIndex].correctAnswer)) {
	  score++;
	} else {
	  timeLeft -= 5;
	}
	
	currentQuestionIndex++;
	if (currentQuestionIndex < myQuestions.length) {
	  showQuestion(myQuestions[currentQuestionIndex]);
	} else {
	  // end game if all questions answered
	  endGame();
	}
		showQuestion(myQuestions[currentQuestionIndex]);
  };
  
