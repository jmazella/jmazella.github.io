tailwind.config = {
	theme: {
		extend: {
			colors: {
				lightbrown: '#F2D6C9',
				darkbrown: '#A95131',
				darkgrey: '#383838',
				lightgrey: '#D9D9D9',
				medgrey: '#9F9F9F',
				backgroundgrey: '#F9F5F5',
				darkred: '#98391E',
				gold: '#D69B41',
			},
			textUnderlineOffset: {
				6: '6px'
			},
			fontFamily: {
				sans: ['Satoshi-Regular', 'sans-serif']
			},
			minHeight: {
				'150px': '150px'
			},
			screens: {
				'lgx': {'max': '767px'},
			}
		}
	}
};


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