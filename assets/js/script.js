const app = new Vue({

    el: '#app',
    data: {
        counterImg: 0,
        images:[
           "assets/img/maxresdefault1.jpg",
           "assets/img/maxresdefault2.jpg",
           "assets/img/maxresdefault3.jpg",
           "assets/img/maxresdefault4.jpg",
           "assets/img/returnal-gold_jpg_1400x0_q85.webp"
        ]
      
    },
    methods:{

        prevImg(){
            this.counterImg--;
            if(this.counterImg < 0) this.counterImg = this.images.length -1;
        },
        nextImg(){
            this.counterImg++;
            if(this.counterImg === this.images.length) this.counterImg = 0;
        }
      
    }

})
