var quizSection = document.getElementsByClassName("quiz-section");
var nextBtns = document.getElementsByClassName("next-btn");
var results = document.getElementById("results");
var currentSection = 0;
var score = 0;


for (var i = 0; i < quizSection.length; i++){
	nextBtns[i].addEventListener("click", nextSection);
}

function nextSection(){
	var currentOptions = quizSection[currentSection].getElementsByClassName("quiz-options");

	for (var x = 0; x < currentOptions.length; x++){
		if (currentOptions[x].checked) {
			if (currentOptions[x].classList.contains("correct")) {
				score++;
			}
		}
	}
	//quizSection[currentSection].style.display = "none";
	currentSection++;
	quizSection[currentSection].style.display = "inline-block";
	results.innerHTML = `Your score is ${score} / ${nextBtns.length}`;
}