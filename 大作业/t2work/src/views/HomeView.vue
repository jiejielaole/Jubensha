<template>
  <div class="home">
   
      <div class="head1" >
        <van-nav-bar title="xxx剧本杀推理馆"  fixed >
          <template #left>
            <van-image
              width="50"
              height="40"              
              :src="'https://img2.baidu.com/it/u=771855377,912456487&fm=253&fmt=auto&app=138&f=JPEG?w=900&h=500'"
            />

          </template>
          <template #right>
            <van-icon name="like"  size="18"/>
            <span>15</span>
          </template>
        </van-nav-bar>
      </div>
        <div class="content">
          <van-button class="btn" type="primary" size="large">
            <div>预约上车</div>
            <span >一起来逢场作戏~</span>
          </van-button>
        </div>
      <div class="juben">
          <van-button class="btn" type="primary" size="normal" :icon="require('@/assets/img/book.png')">
            <div>170本剧本</div>
            <span>1天前更新</span>
          </van-button>          
          <van-button class="btn" type="primary" size="normal" :icon="require('@/assets/img/ranking.png')">
            <div>本店榜单</div>
            <span>玩家榜未上榜</span>
          </van-button>
      </div>
      <div class="jubenList" >
          
        <div class="top">
            <div class="left">
                <img :src="require('@/assets/img/star.png')" alt="">
                <span>剧本评价</span>
            </div>
            <div class="right">
                <button class="watchBtn">查看更多</button>
            </div>
        </div>
          <div class="swiperContent">
   
            <van-swipe class="my-swipe" autoplay="3000" indicator-color="white" vertical>
              <van-swipe-item v-for="(itemlist, i) in imgs" :key="i"  >          
                 <template v-for="(item, index) in itemlist" :key="index" >                   
                    <img :src="item.picUrl" >
                    <div class="content1">
                      <div class="name">{{item.name}}</div>
                      <div class="pingjia">暗杀事件大厦客户端萨克和大家撒德哈即可啊实打实的大撒大撒啊大苏打倒萨倒萨撒大大</div>
                    </div>                    
                </template>

              </van-swipe-item>
            </van-swipe>
          </div>
          
      </div>
      <div class="store">
        <div class="left">
            <span class="s1">小卖部</span>
            <span class="s2">好吃好玩应有尽有</span>
        </div>
        <div class="right">
            <img :src="require('@/assets/img/gift.png')" alt="">
            <img :src="require('@/assets/img/drinkBottle.png')" alt="">
            <img :src="require('@/assets/img/store.png')" alt="">
        </div>
      </div>

  </div>
  
</template>

<script>
// @ is an alias to /src
import { reactive, toRefs ,ref, onMounted} from 'vue'
import SwiperDataApi from '../api/SwiperDataApi'
export default {
  name: 'HomeView',
  components: {
    SwiperDataApi
  },
  setup() {
      const state = reactive({
      //     imgs:[
      //   {pic: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.rrjbs.com%2Fresources%2Fupload%2F31fa639059a4%2F1622551522456.jpeg&refer=http%3A%2F%2Fwww.rrjbs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1656170138&t=28ebfc59981ea86dac9bcbfbb8c52e04',name:"古木吟"},
      //   {pic: 'https://thumbnail1.baidupcs.com/thumbnail/145e68bcfidd371cfd163908730771a2?fid=59453900-250528-58976412692582&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-kFHhDVfGt3dq61dZ6Z1ZcWN50k4%3d&expires=8h&chkbd=0&chkv=0&dp-logid=9158453312203282925&dp-callid=0&time=1653606000&size=c2560_u1440&quality=90&vuk=59453900&ft=image&autopolicy=1',name:"青楼2"} ,
      //   {pic: 'https://thumbnail1.baidupcs.com/thumbnail/8573de0c7r7774dd59eae742367b4370?fid=59453900-250528-167082862031125&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-3nYLp7YhXfoIZy97iMAq0HmhRkc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=9158453312203282925&dp-callid=0&time=1653606000&size=c2560_u1440&quality=90&vuk=59453900&ft=image&autopolicy=1',name:"妖猫乱世"} ,
      //   {pic: 'https://thumbnail6.baidupcs.com/thumbnail/de18fa287pa6ff0a4a69a2bbc1d0eec7?fid=59453900-250528-161879808190820&time=1653606000&rt=yt&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-t%2B82qpEOKcv6gT372rj%2FLOPqdFg%3D&expires=24h&chkv=0&chkbd=0&chkpc=&dp-logid=328863520&dp-callid=0&size=c2560_u1440&quality=90&vuk=-&ft=video&autopolicy=1',name:"金陵有座东君书院前传"} ,
        
      //   {pic: 'https://thumbnail1.baidupcs.com/thumbnail/d475cb791kc7a635743939b06e25cea0?fid=59453900-250528-598914680459366&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-lWHINi%2fnIsBVrbhFzChYPa7UtZA%3d&expires=8h&chkbd=0&chkv=0&dp-logid=9158453312203282925&dp-callid=0&time=1653606000&size=c2560_u1440&quality=90&vuk=59453900&ft=image&autopolicy=1',name:"雪乡连环杀人事件"},
      //   {pic: 'https://thumbnail1.baidupcs.com/thumbnail/2cccd8fd2p9371f08db41820b0be9eea?fid=59453900-250528-387017858788528&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-GJUoKqY0fu3Nq%2blXOY4JUtA0pRs%3d&expires=8h&chkbd=0&chkv=0&dp-logid=9158453312203282925&dp-callid=0&time=1653606000&size=c2560_u1440&quality=90&vuk=59453900&ft=image&autopolicy=1',name:"病娇男孩的精分日记"}  
      // ],
      imgs:[
        // {picUrl: 'https://s2.loli.net/2022/05/27/uIKBkythSUMPiED.jpg',name:"古木吟"},
        // {picUrl: 'https://s2.loli.net/2022/05/27/bgh1tQ3xI8ZMTu9.jpg',name:"青楼2"} ,
        // {picUrl: 'https://s2.loli.net/2022/05/27/XiMNC9sSlurcT3t.jpg',name:"妖猫乱世"} ,
        // {picUrl: 'https://s2.loli.net/2022/05/27/2UKayLZYs9PArIG.jpg',name:"金陵有座东君书院前传"} ,        
        // {picUrl: 'https://s2.loli.net/2022/05/27/zEIxKi8jnQTCbS9.jpg',name:"雪乡连环杀人事件"},
        // {picUrl: 'https://s2.loli.net/2022/05/27/iUx1CBa5mKYJjor.jpg',name:"病娇男孩的精分日记"}  
      ],
      });
      console.log(state.imgs)
      onMounted(() => {
        SwiperDataApi.getALL().then((data) => {
          console.log(data)
          // Object.assign(state.imgs,data.data)
          state.imgs = data.data
          console.log(state.imgs)
          state.imgs = groupList(state.imgs)
          console.log(state.imgs)
        }).catch((err) => {
          console.log(err)
        }) 
      })

      const groupList = (list) =>{
        const arr = []
        for (var i = 0; i < list.length; i += 3) {
          arr.push(list.slice(i, i + 3))
        }
      return arr
    }
    
      
      return {
        ...toRefs(state),
        groupList,
      };

    },
}

</script>

<style lang="less"  scoped>

.head1{
  width: 7.5rem;
  height: 0.1rem;
}
/deep/.van-nav-bar__content {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    height: 46px;
    background-color: gray;
}

.van-icon-like:before {
    content: "\e6d4";
    color: red;
}

  .content{
    margin-top: 1.2rem;
    font-size: 0.5rem;
    position: absolute;
    left: 0.25rem;
     border: none;
     border-radius: 0.1rem;
     .btn{
      color: black;
      background-color: #fff;
      font-size: 0.35rem;
      border-radius: 0.1rem;
      width: 7rem;
      display: flex;
      flex-direction: column;
       font-weight: 900;
    /* z-index: 9; */
    span{
      font-size: 0.3rem;
       font-weight: 400;
    }
  }
 
}
.juben{
    margin-top: 2.2rem;
     width: 7.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0.2rem;
    .btn{
       color: black;
      background-color: #fff;
      font-size: 0.35rem;
      border-radius: 0.1rem;
      width: 3rem;
      height: 1.2rem;
      display: flex;
      flex-direction: column;
       font-weight: 900;
    
    span{
      font-size: 0.3rem;
       font-weight: 400;
    }
    }
}
.jubenList{
   width: 7.5rem;
   height: 7.2rem;
   padding: 0rem 0.4rem;
   background-color: #fff;
   border-top-left-radius: 0.3rem ;
   border-top-right-radius: 0.3rem;
   border-bottom-left-radius: 0.3rem;
   border-bottom-right-radius: 0.3rem;
   margin-top: 0.4rem;
   border: 1px solid gray;
  .top{
      display: flex;
      justify-content: space-between;
      height: 1rem;
      align-items: center;
      border-bottom:1px solid gray ;
      .left{
        display: flex;
        align-items: center;
        img{
        width: 0.6rem;
        height: 0.6rem;
      }
      span{
        font-size: 0.4rem;
        font-weight: 900;
        // position: absolute;
        // top: 0.08rem;
      }
    }
    .right{
      .watchBtn{
        // position: relative;
        // top: -0.05rem;
        // right: 0.35rem;
         border: 1px solid #ccc;
         // padding: 0.06rem;
          border-radius: 0.2rem;
          font-size: 0.24rem;
          height: 0.5rem;
          width: 1.2rem;
          text-align: center;
          line-height: 0.5rem;
      }
    }
  }
  .swiperContent{
        width: 100%;
        height: 2.2rem;
        .my-swipe{
          height: 5.8rem;          
        }
        .my-swipe .van-swipe-item {
          color: #fff;
          font-size: 20px;
          line-height: 1.3rem;
          // text-align: center;
          // background-color: #39a9ed;
          border-radius: 0.1rem;
          display: flex;
          justify-content: space-between;
          width: 7.5rem;
          flex-direction: column;
          // margin-top: 0.05rem;
            img{
              margin-top: 0.1rem;
              width: 1.3rem;
              height: 1.5rem;
              border-radius: 0.1rem;
            }            
          
          .content1{
              padding: 0 0.8rem;
              margin-top: -2.35rem;
              margin-left: 0.8rem;
              
              .name{
                color: black;
                height: 0.5rem;
                font-size: 0.3rem;
              }
              .pingjia{
                align-items: center;
                line-height: 0.42rem;
                margin-top: 0.5rem;
                font-size: 0.25rem;
                background-color: rgba(128, 128, 128, 0.235);
                height: 0.94rem;
                width: 4.8rem;
                color: black;
                overflow: hidden;
                border-top-left-radius: 0.1rem ;
                border-top-right-radius: 0.1rem;
                border-bottom-left-radius: 0.3rem;
                border-bottom-right-radius: 0.1rem;
                text-overflow:ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                white-space: pre-wrap;
                padding: 0 0.1rem;
              }
          }
    }
    // .my-swipe .van-swipe-item img{
    //   width:25%;
    //   height: auto;
    // }
  }
    
}
.store{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 0.1rem;
  margin-top: 0.6rem;
  height: 1.5rem;
  width: 7rem;
  margin-left: 0.25rem;
  .left{
      display: flex;
      flex-direction: column;
      .s1{
        margin-left: 0.2rem;
        font-size: 0.4rem;
        font-weight: 900;
      }
      .s2{
        margin-left: 0.2rem;
        margin-top: 0.1rem;
        opacity: 0.4;
      }
  }
  .right{
    display: flex;
    img{
      width: 0.8rem;
      height: 0.8rem;
    }
  }
}
</style>
