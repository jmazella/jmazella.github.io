const app = Vue.createApp({
    template:'<h1 class="text-white">Hello {{firstName}} </h1>',
    data() {
        return {
            firstName: 'Tom'
        }
    }
})

const leader = Vue.createApp({
    template:'<img  v-bind:alt="imgAlt" class="pb-2.5" v-bind:src="imgSrc"><a tabindex="2" class="satoshi-bold underline" target="_blank" v-bind:href="profLink">{{name}}</a><h3 tabindex="2" class="font-medium text-medgrey">{{title}}</h3>',
    data() {
        return {
            imgAlt:'Headshot of Dr. Steven Bratt',
            imgSrc:'img/steveBratt.svg',
            name:'Dr. Steve Bratt, PHD',
            profLink:'https://confluence.hl7.org/display/~steve_bratt',
            title:'Program Manager',
        }
    }
})

app.mount('#app')
leader.mount('#leader')