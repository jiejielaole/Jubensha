<template>
  <div class="topnav">
    <div class="name">
        <img src="../assets/img/user.png" alt="">
        <span>生命在于💤</span>
    </div>
    <div class="fukuanma">
      <img src="../assets/img/payMent.png" alt="">
      <span>付款码</span>
    </div>
  </div>
  <div class="zhanghuyue">
    <div class="yue">
        <span class="s1">账户余额</span>
        <span class="s2">0.00</span>
    </div>
    <div class="chongzhi">
      <div class="youhui">充值享优惠</div>
      <div class="cz">立即充值</div>
    </div>
  </div>
    <personal-list></personal-list>
    <div class="jishuzhichi">
        <img src="../assets/img/technical.png" alt="">
        <span>XXX提供技术支持</span>     
    </div>
</template>

<script>
import PersonalList from '@/components/PersonalList.vue'
export default {
   components: {
    PersonalList
  },
}
</script>

<style lang="less">
  .topnav{
    width: 7.5rem;
    height: 2rem;
    background-color: rgb(221, 211, 201);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .name{
      display: flex;
      align-items: center;
      
      img{
        // margin-top: 1rem;
        // margin-bottom: 0.3rem;
        margin-left: 0.2rem;
        width: 1.2rem;
        height: 1.2rem;
        border-radius:100%;
        overflow:hidden;
        box-shadow:0 3px 9px #e7e7e7;
        background-color: white;
      }
      span{
        font-weight: 900;
        font-size: 0.3rem;
        // margin-top: 0.7rem;
        margin-left: 0.15rem;
      }
    }
    .fukuanma{
      display: flex;
      align-items: center;
      margin-right: 0.1rem;
      flex-direction: column;
        img{
          width: 0.4rem;
          height: 0.4rem;
          margin-left: 3rem;
        }
        span{
          margin-left: 3rem;
        }

    }
  }
  .zhanghuyue{
    width: 7.1rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(254, 234, 197);
    margin: auto;
    overflow: hidden;
    margin-top: -0.25rem;
    border-radius: 0.1rem;
    .yue{
      display: flex;
      flex-direction: column;
      .s1{
        margin-left: 0.2rem;
      }
      .s2{
        font-size: 0.4rem;
        font-weight: 900;
        margin-left: 0.2rem;
      }
    }
    .chongzhi{
      display: flex;
      flex-direction: column;
  
      .youhui{
        width: 1.2rem;
        height: 0.2rem;
        background-color: rgb(244, 90, 90);
        border-top-left-radius: 0.1rem ;
        border-top-right-radius: 0.3rem;
        border-bottom-right-radius: 0.3rem;
        color: #fff;
        text-align: center;
        // margin-right: 0rem;
        z-index: 10;
        overflow: hidden;
        -webkit-transform: scale(0.9);
        // font-size: 1px;
        display: flex;
      }
      .cz{
        // display: inline-block;
        margin: 0 auto;
        margin-top: -0.08rem;
        width: 1.2rem;
        background-color: #fff;
        color: rgb(244, 90, 90);
        margin-right: 0.2rem;
        border-radius: 0.2rem;
        text-align: center;
      }
    }
  } 
.jishuzhichi{
  display: flex;
  flex-direction: column;
  width: 7.1rem;
  text-align: center;
  margin-top: 0.2rem;
  img{
    margin-left: 3.25rem;
    width: 0.6rem;
  }
  span{
   color:  rgb(213, 213, 213);
}
}

</style>