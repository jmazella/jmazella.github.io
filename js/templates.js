window._app.component('mobile-header', {
	template:
		`<div class="mobile-header-container">
				<div class="flex place-items-center mobile-header">
					<a class="flex" href="index">
					<img :src="'img/logo-'+logoColor+'.svg'" class="logo" />
					<img :src="'img/code-logo-'+logoColor+'.png'" src="img/code-logo-red.png" class="code-logo" />
					</a>
					<div id="open-menu-button-div" onclick="openmenu();" class="open-menu-button-div ml-auto">
						<img class="open-menu-button" src="img/menu-black.svg" />
					</div>
					<div id="close-menu-button-div" onclick="closemenu();" class="close-menu-button-div ml-auto hidden">
						<img class="close-menu-button" src="img/close-black.svg" />
					</div>
				</div>
				<div id="mobile-menu" class="mobile-menu hidden">
					<div>
						<a href="index">Home</a>
					</div>
					<div>
						<a href="#news">News</a>
					</div>
					<div>
						<a href="uses">Use Cases</a>
					</div>
					<div>
						<a href="community">Community</a>
					</div>
					<div>
						<a href="contact">Contact</a>
					</div>
				</div>
			</div>`,
	props: {logoColor: String}
});

window._app.component('desktop-header', {
	template:
		`<div class="header-container absolute inset-0 z-10">
				<div class="flex">
					<a class="flex" href="index">
					<img class="logo" alt="CodeX Logo" :src="'img/logo-'+logoColor+'.svg'" />
					<img class="code-logo self-end" src="img/code-logo-white.png" />
					</a>
					<div class="flex flex-row gap-8 ml-auto text-white items-center">
						<div class="flex items-center underline decoration-solid underline-offset-8">
							<a tabindex="1" href="index">Home</a>
						</div>
						<div class="flex items-center">
							<a tabindex="1" href="#news">News</a>
						</div>
						<div class="flex items-center">
							<a tabindex="1" href="uses">Use Cases</a>
						</div>
						<div class="flex items-center">
							<a tabindex="1" href="community">Community</a>
						</div>
						<div class="flex items-center">
							<a tabindex="1" href="contact">Contact</a>
						</div>
					</div>
				</div>
			</div>`,
	props: {logoColor: String}
});

window._app.component('headers', {
	template:
		`<desktop-header :logo-color="logoColor" />
		 <mobile-header :logo-color="logoColor" />`,
	props: {logoColor: String}
});
