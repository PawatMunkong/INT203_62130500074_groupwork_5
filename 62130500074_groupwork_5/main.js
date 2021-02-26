
const app = Vue.createApp({
    data() {
        return {
            searchphoto: false,
            findgura: true,
            showgura : false,
            imgs: [{
                    id: "Gura",
                    src: "./images/31.jpg",
                    likes: false,
                    hiddenimgs: false
                },
                {
                    id: "Gura zZZ",
                    src: "./images/32.jpg",
                    likes: false,
                    hiddenimgs: false
                },
                {
                    id: "Gura lovely",
                    src: "./images/344.jpg",
                    likes: false,
                    hiddenimgs: false
                },
            ],


        }
    },
    methods: {
        guraShow(index) {
            this.imgs[index].likes = !this.imgs[index].likes;
         
        },
        Guracick(src) {
            this.guralove = src;
            this.showgura = true;
        },
        guraclose() {
            this.showgura = false;
        },
        searchphotoguga() {
            this.searchphoto = !this.searchphoto;
        },
        guraresult(Gurasearch) {
            if (Gurasearch) {
                for (GuraO of this.imgs) {
                    if (GuraO.id === Gurasearch) {
                        GuraO.hiddenimgs = false;
                    } else {
                        GuraO.hiddenimgs = true;
                    }
                }
                if (this.imgs.every(element => element.hiddenimgs)) this.findgura = false;
            }
        
        },
        cancel() {
            this.searchphoto = !this.searchphoto;
            for (const element of this.imgs) {
                element.hiddenimgs = false
            }
            this.findgura = true
        },
  
    },
    computed: {
        guralength() {
            return this.imgs.length + '';
        },
        countlikes() {
                         return this.imgs.filter(t => t.likes).length
                     }
            
    }

})