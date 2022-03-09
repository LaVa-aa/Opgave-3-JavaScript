Vue.createApp({

    data(){
        return {

            // add here
            // a single word


            
            // empty array
            //the message to write to 
            //the screen when the user 
            //click the Show button
            word: null,
            words:[],
            wordss:[],

            message: null,
           // result: null,

        }

    },
    methods: {
        //save(){
          //  this.words.push(this.word)
            //console.log(this.word)
           // console.log(this.words)
        //},
        show(){
         this.message="" 
         this.words.push(this.word.toUpperCase())
         this.words.push(this.word.toLowerCase())
         this.words.push(this.word.charAt(0).toUpperCase() + this.word.slice(1))
         this.words.push(this.word.slice(0,-1)+this.word.slice(-1).toUpperCase())
         this.wordss = this.word.split("")
            this.wordss.reverse()
            this.words.push(this.wordss.join(""))
        },


        
        

    }
}).mount("#app")