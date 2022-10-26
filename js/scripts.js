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
	emailjs.sendForm('service_vhw7slg', 'template_q4j4dpi', form)
		.then(function(){
			console.log('Form Sent');
		}, function(error){
			console.log('Form Send failed, error: ', error);
		});
}