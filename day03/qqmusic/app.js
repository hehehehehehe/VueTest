new Vue({
    el:"#app",
    data:{
        swiper1:[],
        swiper2:[],
        swiper3:[]
    },
    mounted(){

    


        axios.get("./home.json").then(res =>{
            console.log(res)
            this.swiper1 = res.data.MusicHallHomePage.data.v_shelf[0].v_niche[0].v_card
            this.swiper2 = res.data.MusicHallHomePage.data.v_shelf[1].v_niche[0].v_card
            this.swiper3 = res.data.MusicHallHomePage.data.v_shelf[2].v_niche[0].v_card


            
            setTimeout(()=>{
                new Swiper("#swiper1",{
                    slidesPerView: 3,
                    spaceBetween: 10,
                }),
                new Swiper("#swiper2",{
                    slidesPerView: 3,
                    spaceBetween: 10,
                }),
                new Swiper("#swiper3",{
                    slidesPerView: 1.5,
                    spaceBetween: 25,
                })

            })


        })
    }
})