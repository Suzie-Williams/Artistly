var navOpenBtn = document.getElementById("nav-open-btn");
var navCloseBtn = document.getElementById("nav-close-btn");
var navCtn = document.getElementById("nav-ctn");

function openNav(){
	navCtn.classList.remove("nav-inactive");
	navCtn.classList.add("nav-active");
	navOpenBtn.classList.remove("btn-active");
	navOpenBtn.classList.add("btn-inactive");
	navCloseBtn.classList.remove("btn-inactive");
	navCloseBtn.classList.add("btn-active");
}

function closeNav(){
	navCtn.classList.remove("nav-active");
	navCtn.classList.add("nav-inactive");
	navOpenBtn.classList.remove("btn-inactive");
	navOpenBtn.classList.add("btn-active");
	navCloseBtn.classList.remove("btn-active");
	navCloseBtn.classList.add("btn-inactive");
}