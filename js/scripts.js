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