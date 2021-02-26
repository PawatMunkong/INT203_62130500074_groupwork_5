app.component('photoitem', {
    props: {
        imgs: {
            type: Array,
            require: true
        },
        findgura: {
            type: Boolean,
            require: true
        }
    },
    template:
        /*html*/

        `
    <div v-for="(Guraimgs,index) in imgs" class="flex my-5 items-center text-2xl font-bold " 
    :class="[Guraimgs.hiddenimgs ? 'hidden' : '']">
    <img class=" hover:bg-red-700 w-32 mr-4 cursor-pointer rounded shadow-x ":src="Guraimgs.src" @click="Guracick(Guraimgs.src);">
        <p>{{ Guraimgs.id }}</p>

         <i v-if ="Guraimgs.likes" class="fas fa-heart ml-5 cursor-pointer" @click="gurashow(index)" style="color: red;"></i>
         <i v-else class="far fa-heart ml-5 cursor-pointer" @click="gurashow(index)"></i>
    </div>
    <p v-if="!findgura"class="p-5 text-2xl font-bold mt-5 text-gray-400">No picture Gura</p>
    `,
    
    methods: {
        Guracick(src) {
            this.$emit('Guracick', src)
        },
        gurashow(index) {
            this.$emit('gurashow', index)
        }
    }
})