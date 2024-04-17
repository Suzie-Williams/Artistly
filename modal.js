var modalCnt = document.getElementById("modal-cnt");
var modalImg = document.getElementById("modal-img");
var modalOverlay = document.getElementById("modal-overlay");
var closeBtn = document.getElementById("close-btn");

function openModal(imgSrc){
	modalCnt.style.display = "block";
	modalImg.src = imgSrc;
	modalOverlay.style.display = "block";
}

function closeModal(){
	modalCnt.style.display = "none";
	modalOverlay.style.display = "none";
}