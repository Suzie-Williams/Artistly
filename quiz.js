//JAVASCRIPT FOR QUIZZES

//Declaring Variables
var quizSection = document.getElementsByClassName("quiz-section");
var nextBtns = document.getElementsByClassName("next-btn");
var results = document.getElementById("results");
var perfectResults = document.getElementById("perfect-results");
var currentSection = 0;
var score = 0;

//Event listener for each click of the Next buttons
for (var i = 0; i < quizSection.length; i++){
	nextBtns[i].addEventListener("click", nextSection);
}


//Check if answer is correct and change question
function nextSection(){
	var currentOptions = quizSection[currentSection].getElementsByClassName("quiz-options");

	//check if answer is correct
	for (var x = 0; x < currentOptions.length; x++){
		if (currentOptions[x].checked) {
			if (currentOptions[x].classList.contains("correct")) {
				score++;
			}
		}
	}
	//change question
	quizSection[currentSection].style.display = "none";
	currentSection++;
	quizSection[currentSection].style.display = "inline-block";
	
	//Display the results
	results.innerHTML = `Your score is ${score} / ${nextBtns.length}`;
	if (score == nextBtns.length) {
		perfectResults.style.display = "initial";
	}
}