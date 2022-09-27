const leaders = Vue.createApp({
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
                    name:'Dr. Steve Bratt, PhD',
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
})

const steeringCommittee = Vue.createApp({
    template:`<ul v-for="item in commMembers">
                <p tabindex="2">{{item.name}} ({{item.company}})</p>
            </ul>`,
    data(){
        return{
            commMembers:[
                {
                    name:'Dr. Steve Bratt, PhD',
                    company:'MITRE',
                },
                {
                    name:'Dr. Charles Jaffee, MD',
                    company:'HL7',
                },
            ]
        }
    }
})

const operatingCommittee = Vue.createApp({
    template:`<div class="flex">
                <div class="w-full lg:w-1/2 px-0 lg:px-4">
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
})

leaders.mount('#leaders')
steeringCommittee.mount('#steeringComm')
operatingCommittee.mount('#oppComm')