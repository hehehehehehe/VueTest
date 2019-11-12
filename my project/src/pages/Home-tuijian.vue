<template>
  <div>
    <div class="search-panel">
      <input type="text" placeholder="搜索" />
    </div>
    <div>
      <h4>官方歌单</h4>
      <div class="swiper-container" id="swiper1">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="s in swiper1" id="swiper-slide12" v-bind:key="s.id">
            <img :src="s.cover" alt />
            <p class="p">{{s.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h4>达人歌单</h4>
      <div class="swiper-container" id="swiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="s in swiper2" id="swiper-slide12" v-bind:key="s.id">
            <img :src="s.cover" alt />
            <p>{{s.title}}</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h4>专区</h4>
      <div class="swiper-container" id="swiper3">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="s in swiper3" id="swiper-slide3" v-bind:key="s.id">
            <img :src="s.cover" alt id="img3" />
            <p>{{s.title}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios  from 'axios'

import 'swiper/dist/js/swiper.js';

import 'swiper/dist/css/swiper.css';

export default {
  data() {
    return {
      swiper1: [],
      swiper2: [],
      swiper3: []
    };
  },
  mounted(){

      axios.get("https://u.y.qq.com/cgi-bin/musicu.fcg?cgiKey=GetHomePage&_=1573461571309&data={%22comm%22:{%22g_tk%22:5381,%22uin%22:%22%22,%22format%22:%22json%22,%22inCharset%22:%22utf-8%22,%22outCharset%22:%22utf-8%22,%22notice%22:0,%22platform%22:%22h5%22,%22needNewCode%22:1},%22MusicHallHomePage%22:{%22module%22:%22music.musicHall.MusicHallPlatform%22,%22method%22:%22MobileWebHome%22,%22param%22:{%22ShelfId%22:[101,102,161]}},%22hotkey%22:{%22module%22:%22tencent_musicsoso_hotkey.HotkeyService%22,%22method%22:%22GetHotkeyForQQMusicMobile%22,%22param%22:{%22remoteplace%22:%22txt.miniapp.wxada7aab80ba27074%22,%22searchid%22:%221559616839293%22}}}")
      .then(res =>{
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
};
</script>

<style>
 @import'../assets/css/swiper.min.css';
.search-panel{
    width: 100%;
    height: 45px;
    text-align: center;
    padding-top: 5px;
}

.search-panel input{
    width: 90%;
    height: 30px;
    border: none;
    outline: none;
}


/* swiper */
html, body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
      /* width: 109px;
      height: 150px; */
     
    text-align: center;
    font-size: 12px;
    /* background: #fff; */
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    overflow: hidden;
  }
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color:#000;
    opacity: 1;
    background: rgba(0,0,0,0.2);
  }
  .swiper-pagination-bullet-active {
    color:#fff;
    background: #007aff;
  }

  .swiper-slide img{
      width: 109px;
      height: 109px;
      border-radius: 10px;
      margin-bottom: -10px;
  }
  #swiper-slide12{
    width: 109px;
    height: 150px;
  }
  #swiper-slide3{
    width: 226px;
    height: 150px;
  }
  #img3{
    width: 226px;
  }

</style>