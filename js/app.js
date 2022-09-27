/*const app = Vue.createApp({
    template:'<h1 class="text-white">Hello {{firstName}} </h1>',
    data() {
        return {
            firstName: 'Margaret'
        }
    }
})*/

/*const leader=Vue.createApp({
    template:'<img v-bind:alt="imgAlt" class="pb-2.5" v-bind:src="imgSrc"><a tabindex="2" class="satoshi-bold underline" target="_blank" v-bind:href="profLink">{{name}}</a><h3 tabindex="2" class="font-medium text-medgrey">{{title}}</h3>',
    data(){
        return{
            imgAlt:'Headshot of Dr. Steven Bratt',
            imgSrc:'img/steveBratt.svg',
            name:'Dr. Steve Bratt, PHD',
            profLink:'https://confluence.hl7.org/display/~steve_bratt',
            title:'Program Manager', 
        }
    }
})*/

const leaders = Vue.createApp({
    template:'<ul v-for="item in profiles" class="w-full pb-4 flex flex-col"><img v-bind:alt="item.imgAlt" class="pb-2.5" v-bind:src="item.imgSrc"><a tabindex="2" class="satoshi-bold underline" target="_blank" v-bind:href="item.profLink">{{item.name}}</a><h3 tabindex="2" class="font-medium text-medgrey">{{item.title}}</h3></ul>',
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
            ]
           
        }
    }
})

//app.mount('#app')
//leader.mount('#leader')
leaders.mount('#leaders')
