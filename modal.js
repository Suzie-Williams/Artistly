//JAVASCRIPT FOR DISPLAYING MODAL

//Declaring Variables
var modalCnt = document.getElementById("modal-cnt");
var modalImg = document.getElementById("modal-img");
var modalOverlay = document.getElementById("modal-overlay");
var closeBtn = document.getElementById("close-btn");


//Function for opening Modal on click of image
function openModal(imgSrc){
	modalCnt.style.display = "block";
	modalImg.src = imgSrc;
	modalOverlay.style.display = "block";
}

//Function for closing Modal on click of close button
function closeModal(){
	modalCnt.style.display = "none";
	modalOverlay.style.display = "none";
}