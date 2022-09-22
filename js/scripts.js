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

function submitform(formName){
	event.preventDefault();
	//generate a five digit number for the contact_number variable
	formName.contact_number.value = Math.random() * 10000 | 0;
	//these IDs from the previous steps
	emailjs.sendForm('service_go5wfit', 'template_o6r4ibd', formName,'ZSEI8dIJhVsk2B3Ji')
		.then(function(){
			console.log('SUCCESS!');
		}, function(error){
			console.log('FAILED...', error);
		});
}