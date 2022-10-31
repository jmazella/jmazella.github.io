function openmenu(){
	document.querySelector('#open-menu-button-div').classList.add('hidden');
	document.querySelector('#close-menu-button-div').classList.remove('hidden');
	document.querySelector('#mobile-menu').classList.remove('hidden');
}

function closemenu(){
	document.querySelector('#close-menu-button-div').classList.add('hidden');
	document.querySelector('#open-menu-button-div').classList.remove('hidden');
	document.querySelector('#mobile-menu').classList.add('hidden');
}

function submitContactForm(form){
	event.preventDefault();
	var submitButton = document.getElementById('contact-submit');
	submitButton.disabled = true;
	submitButton.classList.remove('clickable');
	emailjs.sendForm('service_vhw7slg', 'template_q4j4dpi', form)
	.then(function(){
		document.getElementById('contact-submit-success').classList.remove('hidden');
	}, function(error){
		document.getElementById('contact-submit-error').classList.remove('hidden');
	});
}
