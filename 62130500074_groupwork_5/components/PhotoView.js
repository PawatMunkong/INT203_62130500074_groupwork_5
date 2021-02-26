
app.component('photoview',{
  props: {
    showgura: {
          type: Boolean,
          require: true
      },
      guralove: {
          type: String,
          require: true
      },
  },
  template:
  /*html*/
  `
  <div class=" pr-36 pb-16 bg-black ml-12 cursor-pointer mt-8">
      <div class="container flex flex-col">
      <i class="fas fa-window-close text-white self-end justify-self-center cursor-pointer mt-10 text-5xl" 
      @click="guraclose"></i>
          <div  class="flex justify-center">
              <img :src="guralove" class="w-2/4">
          </div>
      </div>
      </div>
 
  `,
  methods: {
    guraclose(){
          this.$emit('guraclose');
      }
  }
  
})