<template>
  <div class="top">
      <van-search 
      shape="round" 
     
      v-model="value" 
      placeholder="请输入剧本关键词" 
      background="rgb(221, 211, 201)"
      @update:model-value="onchange"
      />
  </div>
  <div class="content">
    <gui-ge @giveGG="getGG"></gui-ge>
    <ren-shu @giveRS="getRS"></ren-shu>
    <ti-cai @giveTC="getTC"></ti-cai>
    <nan-du @giveND="getND"></nan-du>


        <router-link :to="{path:'/jubeninfo',query:{name:item.name}}" v-if="!xsjuben.length" class="jubenList" v-for="(item,i) in juben" :key="i">
    <!-- <div v-if="xsjuben='all'" class="jubenList" v-for="(item,i) in juben" :key="i"> -->
      <div class="left">
        <img :src="item.pic" alt="">
      </div>
      <div class="right">
        <div class="name">{{item.name}}</div>
        <div class="tags"  >
          <div class="tag" v-for="(tag,index) in item.tags" :key="index">{{tag}}</div>
        </div>
        <div class="term">
          <div class="people">
             <img src="../assets/img/user1.png" alt="">
            <span>{{item.male}}男{{item.female}}女</span>
          </div>
          <div class="duration">
             <img src="../assets/img/duration.png" alt="">
             <span>{{item.duration}}</span>
          </div>
          <div class="nd">
             <img src="../assets/img/difficulty.png" alt="">
             <span>{{item.nd}}</span>
          </div>
        </div>
        <div class="price">
          <span class="s1">¥</span>
          <span class="s2">{{item.price}}</span>
          <span class="s1">/人</span>
          </div>
      </div>
    </router-link>
    <div v-else-if="xsjuben=='no'" class="nojuben">
      <center>
        <img src="../assets/img/noDrama.png" alt="">
        <div class="tishi">暂无剧本</div>
        <div class="jutitishi">未找到含以下标签的剧本</div>
        <div class="biaoqian">{{shaixuantiaojian}}</div>
        <div class="clear" @click="cleartj">清空筛选条件</div>
      </center>        
    </div>
    <router-link v-else class="jubenList" :to="{path:'/jubeninfo',query:{name:item1.name}}" v-for="(item1,j) in xsjuben" :key="j">
      <div class="left">
        <img :src="item1.pic" alt="">
      </div>
      <div class="right">
        <div class="name">{{item1.name}}</div>
        <div class="tags"  >
          <div class="tag" v-for="(tag1,index1) in item1.tags" :key="index1">{{tag1}}</div>
        </div>
        <div class="term">
          <div class="people">
             <img src="../assets/img/user1.png" alt="">
             <span>{{item1.male}}男{{item1.female}}女</span>
          </div>
          <div class="duration">
             <img src="../assets/img/duration.png" alt="">
             <span>{{item1.duration}}</span>
          </div>
          <div class="nd">
             <img src="../assets/img/difficulty.png" alt="">
             <span>{{item1.nd}}</span>
          </div>
        </div>
        <div class="price">
          <span class="s1">¥</span>
          <span class="s2">{{item1.price}}</span>
          <span class="s1">/人</span>
          </div>
      </div>
    </router-link>
     <!-- <div @click="xianshi()">显示数据</div> -->
  </div>
</template>

<script>
import { ref ,reactive, toRefs,getCurrentInstance,inject,onMounted } from 'vue';
import GuiGe from '@/components/GuiGe.vue'
import RenShu from '@/components/RenShu.vue'
import TiCai from '@/components/TiCai.vue'
import NanDu from '@/components/NanDu.vue'
import JubenDataApi from '../api/JubenDataApi'
export default {
  components:{
    GuiGe,
    RenShu,
    TiCai,
    NanDu,
    JubenDataApi
  },

  setup() {
    const value = ref('');

    const state = reactive({
       guige:'all',
       renshu:'all',
       ticai:'all',
       nandu:'all',
       shaixuantiaojian:'',
       jubentest:[],
       juben:[],
       xsjuben:[],
       tc:[],
       tags:[],
      });

      onMounted(() => {
        JubenDataApi.getALL().then((data) => {
          console.log(data.data)
          for(let i = 0; i < data.data.length; i++){
            state.tc = data.data[i].tc.split(",")
            state.tags = data.data[i].tags.split(",")
            Object.assign(state.jubentest,data.data)
            console.log(state.jubentest)
            var obj = {}
            obj = {pic:state.jubentest[i].pic,name:state.jubentest[i].name,male:state.jubentest[i].male,female:state.jubentest[i].female,duration:state.jubentest[i].duration,nd:state.jubentest[i].nd,
              gg:state.jubentest[i].gg,price:state.jubentest[i].price,tc:state.tc,tags:state.tags
            }
            state.juben.push(obj)
            console.log(state.juben)
          }
        }).catch((err) => {
          console.log(err)
        }) 
    })

    const onchange = (value) => {
      console.log(value)
      state.xsjuben=[]
      for(let i = 0; i < state.juben.length; i++){
        if(state.juben[i].name.indexOf(value) >= 0){
          state.xsjuben.push(state.juben[i])
        }
      }
    }
    const getGG = (GG) =>{
      state.guige = GG
      console.log(state.guige)
      // console.log(state.juben[1].tc.indexOf('推理'))
      addsxtj() 
      shanxuanjuben()

    }
    const getRS = (RS) =>{
      state.renshu = RS
      console.log(state.renshu)
      addsxtj() 
      shanxuanjuben()
    }
    const getTC = (TC) =>{
      state.ticai = TC
      console.log(state.ticai)
      addsxtj()
      shanxuanjuben()
    }
    const getND = (ND) =>{
      state.nandu = ND
      console.log(state.nandu)
      addsxtj()
      shanxuanjuben()
    }
    const xianshi = () =>{
      console.log(state.guige,state.renshu,state.ticai,state.nandu,state.juben,state.xsjuben)
    }

    const shanxuanjuben = () =>{
         state.xsjuben = []
         if(!state.xsjuben.length){
           console.log(state.xsjuben)
         }         
         for(let i = 0; i < state.juben.length; i++){
           let count = state.juben[i].male + state.juben[i].female
          //  console.log(state.juben[i].male)
           //四个删选条件都有
           if(state.guige != 'all' && state.renshu != 'all' && state.ticai != 'all' && state.nandu != 'all'){
            if((state.juben[i].gg == state.guige)
              && ((count <= 4 && state.renshu == 4) || (count >= 10 && state.renshu == 10) || (count===state.renshu)) 
              && (state.juben[i].tc.indexOf(state.ticai) >= 0)
              && (state.juben[i].nd == state.nandu)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //没有难度
           else if(state.guige != 'all' && state.renshu != 'all' && state.ticai != 'all' && state.nandu == 'all'){
            if((state.juben[i].gg == state.guige)
              && ((count <= 4 && state.renshu == 4) || (count >= 10 && state.renshu == 10) || (count===state.renshu)) 
              && (state.juben[i].tc.indexOf(state.ticai) >= 0)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //没有题材
           else if(state.guige != 'all' && state.renshu != 'all' && state.ticai == 'all' && state.nandu != 'all'){
            if((state.juben[i].gg == state.guige)
              && ((count <= 4 && state.renshu == 4) || (count >= 10 && state.renshu == 10) || (count===state.renshu)) 
              && (state.juben[i].nd == state.nandu)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //没有人数
           else if(state.guige != 'all' && state.renshu == 'all' && state.ticai != 'all' && state.nandu != 'all'){
            if((state.juben[i].gg == state.guige) 
              && (state.juben[i].tc.indexOf(state.ticai) >= 0)
              && (state.juben[i].nd == state.nandu)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //没有规格
           else if(state.guige == 'all' && state.renshu != 'all' && state.ticai != 'all' && state.nandu != 'all'){
            if(((count <= 4 && state.renshu == 4) || (count >= 10 && state.renshu == 10) || (count===state.renshu)) 
              && (state.juben[i].tc.indexOf(state.ticai) >= 0)
              && (state.juben[i].nd == state.nandu)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //没有规格和人数
           else if(state.guige == 'all' && state.renshu == 'all' && state.ticai != 'all' && state.nandu != 'all'){
            if((state.juben[i].tc.indexOf(state.ticai) >= 0)
              && (state.juben[i].nd == state.nandu)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //没有规格和题材
           else if(state.guige == 'all' && state.renshu != 'all' && state.ticai == 'all' && state.nandu != 'all'){
            if(((count <= 4 && state.renshu == 4) || (count >= 10 && state.renshu == 10) || (count===state.renshu)) 
              && (state.juben[i].nd == state.nandu)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //没有规格和难度
           else if(state.guige == 'all' && state.renshu != 'all' && state.ticai != 'all' && state.nandu == 'all'){
            if(((count <= 4 && state.renshu == 4) || (count >= 10 && state.renshu == 10) || (count===state.renshu)) 
              && (state.juben[i].tc.indexOf(state.ticai) >= 0)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //没有人数和题材
           else if(state.guige != 'all' && state.renshu == 'all' && state.ticai == 'all' && state.nandu != 'all'){
            if((state.juben[i].gg == state.guige)
              && (state.juben[i].nd == state.nandu)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //没有人数和难度
           else if(state.guige != 'all' && state.renshu == 'all' && state.ticai != 'all' && state.nandu == 'all'){
            if((state.juben[i].gg == state.guige)
              && (state.juben[i].tc.indexOf(state.ticai) >= 0)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //没有题材和难度
           else if(state.guige != 'all' && state.renshu != 'all' && state.ticai == 'all' && state.nandu == 'all'){
            if((state.juben[i].gg == state.guige)
              && ((count <= 4 && state.renshu == 4) || (count >= 10 && state.renshu == 10) || (count===state.renshu)) ){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //只有规格
           else if(state.guige != 'all' && state.renshu == 'all' && state.ticai == 'all' && state.nandu == 'all'){
            if((state.juben[i].gg == state.guige)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //只有人数
           else if(state.guige == 'all' && state.renshu != 'all' && state.ticai == 'all' && state.nandu == 'all'){
            if(((count <= 4 && state.renshu == 4) || (count >= 10 && state.renshu == 10) || (count===state.renshu)) ){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //只有题材
           else if(state.guige == 'all' && state.renshu == 'all' && state.ticai != 'all' && state.nandu == 'all'){
            if((state.juben[i].tc.indexOf(state.ticai) >= 0)){
                  state.xsjuben.push(state.juben[i])
            }
           }
           //只有难度
           else if(state.guige == 'all' && state.renshu == 'all' && state.ticai == 'all' && state.nandu != 'all'){
            if((state.juben[i].nd == state.nandu)){
                  state.xsjuben.push(state.juben[i])
            }
           }
      }
      // console.log('adsadas')
      if(!state.xsjuben.length && (state.guige != 'all' || state.renshu != 'all' || state.ticai != 'all' || state.nandu != 'all' )){
        state.xsjuben.push('no')
      }
      console.log(state.xsjuben)
    }

      const addsxtj = () =>{
        state.shaixuantiaojian = ''
        if(state.guige != 'all')
        state.shaixuantiaojian+=state.guige+','
        if(state.renshu != 'all')
        state.shaixuantiaojian+=state.renshu+','
        if(state.ticai != 'all')
        state.shaixuantiaojian+=state.ticai+','
        if(state.nandu != 'all')
        state.shaixuantiaojian+=state.nandu+','
      }

      // const cleartj = () =>{
      //   // locale.value = type;
      //   inject("reload")
      // }
      const cleartj = () => {
        window.location.reload();
      }

    return { 
      ...toRefs(state),
      value,
      onchange,
      getGG,
      getRS,
      getTC,
      getND,
      xianshi,
      shanxuanjuben,
      addsxtj,
      cleartj 
     };
    
  },
};

</script>

<style lang="less" scoped>
.top{
  position: fixed;
  top: 0;
  width: 7.5rem;
  height: 1rem;
 z-index: 10;
}
.content{
  width: 7.5rem;
  margin-bottom: 1rem;
  // height: 25rem;
  .jubenList{
    width: 7.1rem;
    margin: auto;
    display: flex;
    // justify-content: space-between;
    justify-items: center;
    align-items: center;
    
    border-bottom: 1px solid rgba(128, 128, 128, 0.235);
    .left{
      margin-bottom: 0.3rem;
      margin-top: 0.2rem;
      img{
        width: 2rem;
        height: 2.5rem;
        border-radius: 0.1rem;
      }
    }
    .right{
        margin-bottom: 0.3rem;
        // align-items: center;
        margin-left: 0.3rem;
        .name{
          font-weight: 900;
          font-size: 0.3rem;
        }
        .tags{
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-content: flex-start;  
          margin-left: -0.08rem; 
          margin-top: 0.1rem;     
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
      }
  }
  .nojuben{
    display: flex;
    margin-top: 0.6rem;
    // justify-content: center;
    flex-direction: column;
    .tishi{
      
      font-size: 0.4rem;
    }
    .jutitishi{
      margin-top: 0.3rem;
      color: rgb(149, 149, 149);
    }
    .biaoqian{
      margin-top: 0.3rem;
      color: rgb(149, 149, 149);
    }
    .clear{
      margin-top: 0.4rem;
      color: blue;
      text-decoration: underline;
    }
  }
}
</style>