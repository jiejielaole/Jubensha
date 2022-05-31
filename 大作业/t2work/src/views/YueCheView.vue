<template>
  <div class="title">约车</div>
  <div class="sort">
    <div class="left">
        <div class="name">按时间排序</div>
        <div class="image">
          <img v-show="!showimg" src="../assets/img/upTriangleBlack.png" alt="" @click="timesort()">
          <img v-show="showimg" src="../assets/img/upTriangleGray.png" alt="" @click="timesort()">
          <img v-show="!showimg" src="../assets/img/downTriangleGray.png" alt="" @click="timesort()">
          <img v-show="showimg" src="../assets/img/downTriangleBlack.png" alt="" @click="timesort()">
        </div>        
    </div>
    <div class="right">
      <span v-show="!showchangci[0]" @click="SelectCC(0)">全部</span>
      <span v-show="showchangci[0]" class="spanActive" @click="SelectCC(0)">全部</span>
      <span>|</span>
      <span v-show="!showchangci[1]" @click="SelectCC(1)">早场</span>
      <span v-show="showchangci[1]" class="spanActive" @click="SelectCC(1)">早场</span>
      <span>|</span>
      <span v-show="!showchangci[2]" @click="SelectCC(2)">中场</span>
      <span v-show="showchangci[2]" class="spanActive" @click="SelectCC(2)">中场</span>
      <span>|</span>
      <span v-show="!showchangci[3]" @click="SelectCC(3)">晚场</span>
      <span v-show="showchangci[3]" class="spanActive" @click="SelectCC(3)">晚场</span>
      <span>|</span>
      <span v-show="!showchangci[4]" @click="SelectCC(4)">修仙</span>
      <span v-show="showchangci[4]" class="spanActive" @click="SelectCC(4)">修仙</span>
    </div>
  </div>
  <div class="enoughDiv">
    <van-checkbox class="checkbox" v-model="checked" icon-size="15px">未满员</van-checkbox>
    <div class="content">-以下为最近1场约车</div>
  </div>
  <div class="YCList" v-for="(item,i) in ycjuben" :key="i">
    <div class="left">
        <img :src="item.picUrl" alt="">
    </div>
    <div class="center">
        <span class="s1">{{item.name}}</span>
        <span class="s2">报名人数：{{item.bming}}/{{item.pcount}}</span>
        <span class="s3">{{item.date}} {{item.changci}} {{item.time}}</span>
    </div>
    <div class="right">
      <button class="baoming">报名</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, toRefs,ref, onMounted } from 'vue'
import YueCheDataApi from '../api/YueCheDataApi'
export default {
  name: 'HomeView',
  components: {
    YueCheDataApi
  },
  setup() {
      const checked = ref(false);
      const state = reactive({
        showimg:false,
        showchangci:[true,false,false,false,false],
        // ycjuben:[{pic: 'https://thumbnail1.baidupcs.com/thumbnail/de18fa287pa6ff0a4a69a2bbc1d0eec7?fid=59453900-250528-161879808190820&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-AnlnLGPolDfMmckt5a6m6pueFIY%3d&expires=8h&chkbd=0&chkv=0&dp-logid=9158453312203282925&dp-callid=0&time=1653606000&size=c2560_u1440&quality=90&vuk=59453900&ft=image&autopolicy=1',name:"金陵有座东君书院前传",Pcount:6,bming:1,date:"8月14号",changci:"早场",time:"14:00 开车"},
        //          {pic: 'https://thumbnail1.baidupcs.com/thumbnail/2cccd8fd2p9371f08db41820b0be9eea?fid=59453900-250528-387017858788528&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-GJUoKqY0fu3Nq%2blXOY4JUtA0pRs%3d&expires=8h&chkbd=0&chkv=0&dp-logid=9158453312203282925&dp-callid=0&time=1653606000&size=c2560_u1440&quality=90&vuk=59453900&ft=image&autopolicy=1',name:"病娇男孩的精分日记",Pcount:7,bming:3,date:"5月30号",changci:"晚场",time:"21:00 开车"}
        // ]
                        
        // ycjuben:[{pic: 'https://s2.loli.net/2022/05/27/2UKayLZYs9PArIG.jpg',name:"金陵有座东君书院前传",Pcount:6,bming:1,date:"8月14号",changci:"早场",time:"14:00 开车"},
        //          {pic: 'https://s2.loli.net/2022/05/27/iUx1CBa5mKYJjor.jpg',name:"病娇男孩的精分日记",Pcount:7,bming:3,date:"5月30号",changci:"晚场",time:"21:00 开车"}
        // ],
        ycjuben:[],
        
      });
      
      onMounted(() => {
        YueCheDataApi.getALL().then((data) => {
          // console.log(data)
          Object.assign(state.ycjuben,data.data)
          console.log(state.ycjuben)
        }).catch((err) => {
          console.log(err)
        }) 
      })

      const timesort = () =>{
        console.log("aaaaaa")
        state.showimg = !state.showimg
      }


      const SelectCC = (index) =>{
        console.log("bbbbbbb")
        for(let i = 0;i < state.showchangci.length ;i++){
          if(state.showchangci[i]){
            state.showchangci[i] = !state.showchangci[i]
          }
        }
        state.showchangci[index] = !state.showchangci[index]
        console.log(state.showchangci)
      }
      
      return {
        ...toRefs(state),
        timesort,
        SelectCC,
        checked
      };
      
    },
}

</script>

<style lang="less" scoped>
.title{
  width: 7.1rem;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  font-size: 0.4rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(128, 128, 128, 0.235);
}
.sort{
  width: 7.1rem;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  .left{
    width: 2.5rem;
    .name{
      font-weight: 900;
      font-size: 0.25rem;
    }
    .image{
      margin-top: -0.28rem;
      margin-left: 1.3rem;
      display: flex;
      flex-direction: column;
      img{
        width: 0.2rem;
        margin-top: -0.05rem;
      }
      
    }
  }
  .right{
    span{
      display:block;
      float: left;
      margin: 0.05rem;
    }
    .spanActive{
      color: blue;
    }
  }
}
.enoughDiv{
  width: 7.1rem;
  height: 1rem;
  margin: auto;
  background-color: rgb(251, 251, 251);
  border-radius: 0.1rem;
  
  .content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgb(156, 156, 156);
    font-size: 0.2rem;
    // -webkit-transform: scale(0.9);
    // font-size: 1px;
    margin-top: 0.28rem;
  }
}
.YCList{
  width: 7.1rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left{
    margin-top: 0.3rem;
    img{
      width: 1.2rem;
      border-radius: 0.1rem;
    }
  }
  .center{
    flex: 1;
    margin-left: 0.2rem;
    margin-top: 0.3rem;
    span{
      display:block;
      float: top;
      margin: 0.15rem;
    }
    .s1{
      font-weight: 900;
      font-size: 0.25rem;
    }
    .s3{
      color: rgb(156, 156, 156);;
    }
  }
  .right{
    border-radius: 0.3rem;
    .baoming{
      width: 1.3rem;
      height: 0.5rem;
      border-radius: 0.3rem;
      border: none;
      color: #fff;
      margin-top: 0.25rem;
    }
  }
}
</style>