import Vue from 'vue'

const mixinglobal = {

    methods:{
        async getData(){
            return await this.axios(this.$store.state.url)
        },

        async postUsuarios(newuser){
          await this.axios.post(this.$store.state.url, newuser, { 'content-type': 'application/json' })
        }

        
    },

    computed:{

    }
}

Vue.mixin(mixinglobal)