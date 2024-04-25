var contactUsInpName = document.getElementById("contact_us-inp-name");
var contactUsInpEmail = document.getElementById("contact_us-inp-email");
var contactUsMessage = document.getElementById("contact_us-message");

function sendMail(){
	let parms = {
		name : document.getElementById("contact_us-inp-name").value,
		email : document.getElementById("contact_us-inp-email").value,
		message : document.getElementById("contact_us-message").value,
	}

	emailjs.send("service_fsp756a","template_om0p7ni",parms).then(alert("Your creative thought was been sent"));
	contactUsInpName.value = " ";
	contactUsInpEmail.value = " ";
	contactUsMessage.value = " ";
}