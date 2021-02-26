
app.component('photosearch',{
    props: {
        searchphoto: {
            type: Boolean,
            require: true
        },
        
        guralength: {
            type: String,
            require: true
        },
        countlikes: {
            type: String,
            require: true
        },
    },
    template: 
    /*html*/
    `
        <h1  class="text-2xl font-bold text-center">Photo Gallery({{ guralength }}) Likes({{countlikes}})</h1>
        <div class="w-full flex mt-5 h-8 justify-between">
        <i class="fas fa-search cursor-pointer" @click="searchphotoguga" v-if="!searchphoto"></i>
            <input v-model="Gurasearch" @keyup.enter="guraresult" type="text" v-if="searchphoto" class="w-auto border-2 border-black w-full"  placeholder="Please searching photos">
            <button @click="cancel" v-if="searchphoto" class="bg-blue-700 text-white p-1 ml-3">cancel</button>
        </div>

        
    `,
    data(){
        return {
            Gurasearch: ''
        }
    },
    methods: {
        cancel(){
            this.$emit('cancel')
        },
        guraresult(){
            this.$emit('guraresult',this.Gurasearch)
        },
        searchphotoguga(){
            this.$emit('searchphotoguga')
        }
    }
    
    
})