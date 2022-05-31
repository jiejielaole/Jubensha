<template>
  <ul class="personal">
      <li class="personalItem">
        <div class="personalItem1">
           <img src="../assets/img/data.png" alt="">
            <span>个人资料</span>
        </div>
        <div class="personalItem2">
           <img src="../assets/img/right2.png" alt="">
        </div>        
      </li>
       <li class="personalItem">
        <div class="personalItem1">
           <img src="../assets/img/coupon.png" alt="">
            <span>我的优惠券</span>
        </div>
        <div class="personalItem2">
           <span>0</span>
           <img src="../assets/img/right2.png" alt="">
        </div>        
      </li>
       <li class="personalItem">
        <div class="personalItem1">
           <img src="../assets/img/car.png" alt="">
            <span>我的约车</span>
        </div>
        <div class="personalItem2">
          <span>0</span>
           <img src="../assets/img/right2.png" alt="">
        </div>        
      </li>
       <li class="personalItem">
        <div class="personalItem1">
           <img src="../assets/img/gamePlayer.png" alt="">
            <span>我的已玩</span>
        </div>
        <div class="personalItem2">
           <img src="../assets/img/right2.png" alt="">
        </div>        
      </li>
       <li class="personalItem">
        <div class="personalItem1">
           <img src="../assets/img/fiveStar.png" alt="">
            <span>我的想玩</span>
        </div>
        <div class="personalItem2">
           <img src="../assets/img/right2.png" alt="">
        </div>        
      </li>
       <li class="personalItem">
        <div class="personalItem1">
           <img src="../assets/img/love.png" alt="">
            <span>我的偏好</span>
        </div>
        <div class="personalItem2">
           <span>2/4待完善</span>
           <img src="../assets/img/right2.png" alt="">
        </div>        
      </li>
       <li class="personalItem">
        <div class="personalItem1">
           <img src="../assets/img/synopsis.png" alt="">
            <span>门店简介</span>
        </div>
        <div class="personalItem2">
           <img src="../assets/img/right2.png" alt="">
        </div>        
      </li>
    </ul>
</template>

<style lang="less" scoped>
 .personal{
    width: 7.1rem;
    // height: 0.8rem;
    margin: auto;
    .personalItem{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(128, 128, 128, 0.235);
      height: 1rem;
      .personalItem1{     
        display: flex;
        align-items: center;
      img{
        height: 0.4rem;
      }
      span{
        margin-left: 0.1rem;
        font-size: 0.25rem;
      }      
    }
    .personalItem2{
      display: flex;
      align-items: center;
      img{
        height: 0.25rem;
      }
      span{
        color: rgb(213, 213, 213);
      }
    }
    }
    
  }
</style>