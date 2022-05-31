<template>
  <div class="jubenInfo">
    <div class="jubenintroduce">剧本介绍</div>
    <div class="jubencontent">{{jubenInfo.introduce}}</div>
  </div>
  <div class="characterInfo">
    <div class="characterintroduce">人物介绍</div>
    <div class="swipe">
       <swiper
    :modules="modules"
    :slides-per-view="1.4"
    :space-between="20"
    :pagination="{ clickable: true }"
     @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide class="swiper-slide" v-for="(item,i) in jubenInfo.character" :key="i">
      <img :src="item.pic">
    </swiper-slide>
  </swiper>
    </div>
  </div>
    <div class="play">
        <div class="wantplay">
          <img src="../assets/img/wantPlay.png" alt="">
          <span>已想玩</span>
        </div>
        <div class="hadplay">
           <img src="../assets/img/hadPlay.png" alt="">
          <span>已玩过</span>
        </div>
        <div class="playjuben">
          <div class="wan">
            我要玩本
          </div>
        </div>
      </div>
</template>

<script>
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y , Autoplay]);
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
  // import Swiper styles
  import 'swiper/css';

export default {
  props:['jubenInfo'],
   components: {
      Swiper,
      SwiperSlide,
    },
  setup() {

      
      return {

      };
  },
}
</script>

<style lang="less" scoped>
.jubenInfo{
  padding: 0 0.1rem;
  width: 7.1rem;
  margin: auto;
  .jubenintroduce{
    font-weight: 900;
    font-size: 0.28rem;
  }
  .jubencontent{
    margin-top: 0.2rem;
    white-space: pre-wrap;
    color:rgb(104, 104, 104);
    font-size: 0.26rem;
  }
}
.characterInfo{
  padding: 0 0.1rem;
  width: 7.1rem;
  margin: auto;
  .characterintroduce{
     margin-top: 0.4rem;
     font-weight: 900;
     font-size: 0.28rem;
  }
}
.swipe{
  width:7.1rem;
  margin: auto;
  border-radius: 0.1rem ;
  margin-bottom: 1.2rem;
  .swiper-slide{
    img{
      margin-top: 0.2rem;
      width: 100%;
      border-radius: 0.2rem;
    }
    
  }
}
.play{
  width: 7.5rem;
  margin-left: 0.2rem;
  display: flex;
  align-items: center;
  height: 1rem;
  position: fixed;
  bottom:0;
  background-color: #fff;
  z-index: 10;
  .wantplay{
    display: flex;
    flex-direction: column;
    
    img{
      width: 0.4rem;
    }
    span{
      //  -webkit-transform: scale(0.9);
      //   font-size: 1px;
        // margin-left: -0.1rem
    };
  }
  .hadplay{
    display: flex;
    flex-direction: column;
    margin-left: 0.4rem;
    img{
      width: 0.4rem;
    }
    span{
      //  -webkit-transform: scale(0.9);
      //   font-size: 1px;
        // margin-left: -0.1rem
    };
  }
  .playjuben{
    width: 5rem;
    height: 0.7rem;
    text-align: center;
    padding: 0.1rem;
    margin-left: 0.5rem;
    background-color: rgb(86, 113, 254);
    border-radius: 0.3rem;
    font-size: 0.3rem;
    font-weight: 900;
    color: #fff;
  }
}
</style>