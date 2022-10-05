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

//leaders - data in js
/*const leaders = Vue.createApp({
    template:`<ul v-for="item in profiles" class="w-full pb-4 flex flex-col">
                <img v-bind:alt="item.imgAlt" class="pb-2.5" v-bind:src="item.imgSrc">
                <a tabindex="2" class="satoshi-bold underline" target="_blank" v-bind:href="item.profLink">{{item.name}}</a>
                <h3 tabindex="2" class="font-medium text-medgrey">{{item.title}}</h3>
            </ul>`,
    data() {
        return {
            profiles:[
               {
                    imgAlt:'Headshot of Dr. Steven Bratt',
                    imgSrc:'img/steveBratt.svg',
                    name:'Dr. Steven Bratt, PhD',
                    profLink:'https://confluence.hl7.org/display/~steve_bratt',
                    title:'Program Manager', 
                },
                {
                    imgAlt:'Headshot of Dr. Su Chen',
                    imgSrc:'img/suChen.svg',
                    name:'Dr. Su Chen, MD',
                    profLink:'https://confluence.hl7.org/display/~suchen',
                    title:'Clinical Director', 
                },
                {
                    imgAlt:'Headshot of Dr. Michele Galioto',
                    imgSrc:'img/micheleGalioto.png',
                    name:'Dr. Michele Galioto, DNP, RN, CNS',
                    profLink:'https://confluence.hl7.org/display/~mgalioto',
                    title:'Deputy Director', 
                },
                {
                    imgAlt:'Headshot of Susan Hull',
                    imgSrc:'img/sHull.png',
                    name:'Susan Hull, MSN, RN-BC, NEA-BC, FAMIA',
                    profLink:'https://confluence.hl7.org/display/~susanhull',
                    title:'Strategic Advisor', 
                },
            ]
           
        }
    }
});*/

//leaders - data in html
const leadership = Vue.createApp({});
leadership.component('leadersApp', {
     template:`
        <ul v-for="(item, index) in leadersName" class="w-full pb-4 flex flex-col">
            <img v-bind:alt="leadersImgAlt[index]" class="pb-2.5" v-bind:src="leadersImgSrc[index]">
            <a tabindex="2" class="satoshi-bold underline" target="_blank" v-bind:href="leadersProfLink[index]">{{leadersName[index]}}</a>
            <h3 tabindex="2" class="font-medium text-medgrey">{{leadersTitle[index]}}</h3>
        </ul>
     `,
     props:{
         leadersImgAlt: Array,
         leadersImgSrc: Array,
         leadersProfLink: Array,
         leadersName: Array,
         leadersTitle: Array,
     }
 });

//steering committee - data in js
/*const steeringCommittee = Vue.createApp({
    template:`<ul v-for="item in commMembers">
                <p tabindex="2">{{item.name}} ({{item.company}})</p>
              </ul>`,
    data(){
        return{
            commMembers:[
                {
                    name:'Dr. Steven Bratt, PhD',
                    company:'MITRE',
                },
                {
                    name:'Dr. Charles Jaffee, MD',
                    company:'HL7',
                },
            ]
        }
    }
});*/

//steering committee - data in html
const steeringCommittee = Vue.createApp({});
steeringCommittee.component('steeringCommApp', {
     template:`
        <ul v-for="(item, index) in commMembersNames">
            <p tabindex="2">{{commMembersNames[index]}} ({{commMembersCompanies[index]}})</p>
        </ul>
     `,
     props:{
         commMembersNames: Array,
         commMembersCompanies: Array,
     }
 });



//OPERATING COMMITTEE - data in js
/*const operatingCommittee = Vue.createApp({
    template:`<div class="flex">
                <div class="w-full lg:w-1/2 px-0 lg:pr-10">
                    <ul v-for="item in commMembers.slice(0, ((commMembers.length)/2))">
                        <p tabindex="2">{{item.name}}</p>
                    </ul>
                </div>
                <div class="w-full lg:w-1/2 hidden lg:block">
                    <ul v-for="item in commMembers.slice(((commMembers.length)/2), commMembers.length)">
                        <p tabindex="2">{{item.name}}</p>
                    </ul>
                </div>
            </div>`,
    data(){
        return{
            commMembers:[
                {name:'Alliance for Clinical Trials in Oncology'},
                {name:'American Association of Physicists in Medicine (AAPM)'},
                {name:'American Cancer Society - Cancer Action Network (ACS CAN)'},
                {name:'American Society of Clinical Oncology'},
                {name:'American Society for Radiation Oncology (ASTRO) Amgen'},
                {name:'Centers for Disease Control and Prevention (CDC)'},
                {name:'Center for International Blood and Marrow Transplant Research (CIBMTR)'},
                {name:'Canadian Organization of Medical Physicists (COMP)'},
                {name:'Evernorth'},
                {name:'Food and Drug Administration (FDA)'},
                {name:'Health Level Seven (HL7)'},
                {name:'Learning Health Community'},
                {name:'Michigan Cancer Surveillance Program'},
                {name:'MITRE'},
                {name:'NRG Oncology'},
                {name:'Oncology Nursing Society'},
                {name:'Ontada'},
                {name:'Pfizer'},
                {name:'Society for Imaging Informatics in Medicine'},
                {name:'Syntropy'},
                {name:'Telligen'},
                {name:'Tempus'},
                {name:'TrialJectory'},
                {name:'UnitedHealthcare'},
                {name:'University of Nebraska Medical Center'},
                {name:'Varian'},
            ]
        }
    }
});*/

//OPERATING COMMITTEE - props in html
//grid would not order correctly or allow half to disappear when the screen is smaller
const operatingCommittee = Vue.createApp({});
operatingCommittee.component('operatingCommApp', {
  template:`
        <div class="flex">
            <div class="w-full lg:w-1/2 px-0 lg:pr-10">
                <ul v-for="item in commMembers.slice(0, ((commMembers.length)/2))">
                    <p tabindex="2">{{item}}</p>
                </ul>
            </div>
            <div class="w-full lg:w-1/2 hidden lg:block">
               <ul v-for="item in commMembers.slice(((commMembers.length)/2), commMembers.length)">
                    <p tabindex="2">{{item}}</p>
                </ul>
            </div>
        </div>`,
   /*template:`

            <div class="grid lg:grid-cols-2 grid-cols-1">
                <ul v-for="item in commMembers">
                    <p tabindex="2">{{item}}</p>
                </ul>
            </div>
    `,*/
    props:{
        commMembers: Array,
    }
});


leadership.mount('#leaders');
steeringCommittee.mount('#steeringComm');
operatingCommittee.mount('#oppComm');