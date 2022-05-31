<template>
  <div class="listViewTop">
    <img class="bg" :src="jubenInfo.pic" alt="">
      <div class="listViewTopNav">
          <div class="back" @click="$router.go(-1)">
              <img src="../assets/img/left.png" alt="">   
          </div>
           <!-- <span>{{jubenInfo.name}}</span> -->
          <div class="title">{{jubenInfo.name}}</div>
      </div>
      <div class="content">
           <div class="jubenpic">
                <img class="p1" :src="jubenInfo.pic" > 
                <img class="p2" :src="jubenInfo.pic" > 
           </div>
           <div class="jubennanme">
             <div class="ps">
               <div class="price">
                <span class="s1">¥</span>
                <span class="s2">{{jubenInfo.price}}</span>
                <span class="s1">/人</span>
              </div>
              <div class="share">
                <img src="../assets/img/share.png" alt="">
                <span>分享</span>
              </div>
             </div>
             
            <div class="name">{{jubenInfo.name}}</div>
            <div class="tags"  >
              <div class="tag" v-for="(tag1,index1) in jubenInfo.tags" :key="index1">{{tag1}}</div>
            </div>
            <div class="term">
              <div class="people">
                <img src="../assets/img/user1.png" alt="">
                <span>{{jubenInfo.male}}男{{jubenInfo.female}}女</span>
              </div>
              <div class="duration">
                <img src="../assets/img/duration.png" alt="">
                <span>{{jubenInfo.duration}}</span>
              </div>
              <div class="nd">
                <img src="../assets/img/difficulty.png" alt="">
                <span>{{jubenInfo.nd}}</span>
              </div>
            </div>
            
          
           </div>
            <div class="rate">
                <center><span>{{text}}</span></center>
                <center><van-rate class="pf" v-model="v" @click="onChange(v)" gutter="8px" size="20px" void-icon="star" void-color="#C4C4C4"/></center>
            </div>
      </div>
    
  </div>
</template>


<script>
import { ref } from 'vue';
import { Dialog } from 'vant';
import {onMounted, toRefs, reactive} from 'vue'
export default {
  props:['jubenInfo'],
  setup() {
    let state = reactive({
        text: '已玩过，记录当时感受',
        v:0
    });
      const onChange = (value) => {
        console.log(value)
        if(value>3){
          state.text = '评价成功'
        }
        if(value===1){
          Dialog.confirm({
          title: '提示',
          message:
            value + '分，您印象中剧本非常差吗？',
          })
          .then(() => {
            // on confirm
            console.log(value)
            state.text = '评价成功'
            
          })
          .catch(() => {
            state.v=0
            console.log(value)
            // on cancel
          });
        }
        if(value===2){
          Dialog.confirm({
          title: '提示',
          message:
            value + '分，您印象中剧本很差吗？',
          })
          .then(() => {
            state.text = '评价成功'
            // on confirm
          })
          .catch(() => {
           state.v=0
            // on cancel
          });
        }
        if(value===3){
          Dialog.confirm({
          title: '提示',
          message:
            value + '分，您印象中剧本一般吗？',
          })
          .then(() => {
            state.text = '评价成功'
            // on confirm
          })
          .catch(() => {
           state.v=0
            // on cancel
          });
        }

      }
      return {
        ...toRefs(state),
        onChange,
      };
  },
}
</script>

<style lang="less" scoped>
.listViewTop{
    width: 7.5rem; 
    // padding: 0 0.3rem;
    .bg{
        position: fixed;
        left: 0;
        top: 1.2rem;
        width: 7.5rem;
        height: 2rem;
        z-index: -1;
        filter: blur(0.4rem);
        
    }
    // background-color: #ccc;
    .listViewTopNav{
        position: fixed;
        top: 0;
        width: 7.5rem;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        height: 0.8rem;
        font-size: 0.35rem;
        background-color: #fff;
        z-index: 10;
        
        .back{
          width: 0.3rem;
          display: flex;
          color: #fff;
        img{
          align-items: center;
          // position: fixed;
          width: 0.4rem;
        }
        
      } 
      .title{
        flex: 1;
        // margin-left: 1.9rem;
        font-size: 0.3rem;
        text-align: center;
      }
    }
    
    .content{
      padding: 0.6rem 0;
      .jubenpic{
        display: flex;
        // justify-content: space-between;
        margin-top: 0.2rem;
        padding: 0 0.3rem;
        .p1{
          width: 2rem;
          border-radius: 0.1rem;
          height: 2.5rem;
        }
        .p2{
          margin-left: 0.3rem;
          width: 4.5rem;
          height: 2.5rem;
          object-fit: cover;
          border-radius: 0.1rem;
        }
      }
      .jubennanme{           
        margin-bottom: 0.3rem;
        margin-left: 0.25rem;
        .name{
          font-weight: 900;
          font-size: 0.3rem;
          padding: 0 0.1rem;
        }
        .tags{
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-content: flex-start;  
          margin-left: -0.08rem; 
          margin-top: 0.1rem;  
          padding: 0 0.1rem;   
          .tag{
            display:block;            
            float: left;
            margin: 0.04rem;
            background-color: rgb(213, 213, 213);
            padding: 0.05rem 0.05rem;
            // -webkit-transform: scale(0.8);
            // font-size: 1px;            
          }
        }
        .term{
          display: flex;
          margin-left: -0.17rem;
          padding: 0 0.1rem;
           div{
            display: block;
            float: left;
            margin: 0.1rem;
            display: flex;
            align-items: center;
            img{
              width: 0.3rem;
            }
            span{
              margin-left: 0.1rem;
            }
          }
          
        }
        .ps{
          display: flex;
          justify-content: space-between;
          padding: 0.2rem 0.1rem;
           .price{
            .s1{
              color: red;
              font-weight: 600;
              font-size: 0.25rem;
            }
            .s2{
              color: red;
              font-weight:900;
              font-size: 0.35rem;
            }
          }
          .share{
            display: flex;
            align-items: center;
            margin-right: 0.25rem;
            img{
              width: 0.4rem;
            }
          }
        }
       
      
      }
        .rate{
      width: 7.1rem;
      height: 1.4rem;
      margin: auto;
      border: 1px solid #F7F8FA;
      display: flex;
      flex-direction: column;
      padding: 0.2rem;
      border-radius: 0.1rem;
      center{
        padding: 0.08rem;
      }
    }
    } 
  
}     
</style>