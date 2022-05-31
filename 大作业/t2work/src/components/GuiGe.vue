<template>
    <div class="guige">   
    <div class="total">
      <div v-show="!showguige[0]" @click="SelectGG(0,'all')">全部规格</div>
      <div v-show="showguige[0]" class="divActive" @click="SelectGG(0,'all')">全部规格</div>
    </div> 
    <div class="fenzhi">
      <div v-show="showguige[1]" class="divActive" @click="SelectGG(1,'盒装')">盒装</div>
      <div v-show="!showguige[1]" @click="SelectGG(1,'盒装')">盒装</div>
      <div v-show="showguige[2]" class="divActive" @click="SelectGG(2,'城限')">城限</div>
      <div v-show="!showguige[2]" @click="SelectGG(2,'城限')">城限</div>
      <div v-show="showguige[3]" class="divActive" @click="SelectGG(3,'独家')">独家</div>
      <div v-show="!showguige[3]" @click="SelectGG(3,'独家')">独家</div>
      <div v-show="showguige[4]" class="divActive" @click="SelectGG(4,'实景')">实景</div>
      <div v-show="!showguige[4]" @click="SelectGG(4,'实景')">实景</div>
      <div v-show="showguige[5]" class="divActive" @click="SelectGG(5,'微剧本')">微剧本</div>
      <div v-show="!showguige[5]" @click="SelectGG(5,'微剧本')">微剧本</div>
      <div v-show="showguige[6]" class="divActive" @click="SelectGG(6,'桌游')">桌游</div>
      <div v-show="!showguige[6]" @click="SelectGG(6,'桌游')">桌游</div>
    </div>    
  </div>
</template>

<script>
import { ref ,reactive, toRefs} from 'vue';

export default {
  setup(props,{emit}) {


    const state = reactive({
       showguige:[true,false,false,false,false,false,false],
       guige:''
      });

     const SelectGG = (index,ggstring) =>{
        console.log("guige")
        for(let i = 0;i < state.showguige.length ;i++){
          if(state.showguige[i]){
            state.showguige[i] = !state.showguige[i]
          }
        }
        state.showguige[index] = !state.showguige[index]
        state.guige = ggstring
        // console.log(state.guige)
        emit('giveGG',state.guige)
      }

    return { 
      ...toRefs(state),
      SelectGG
     };
    
  },
};

</script>

<style lang="less" scoped>
.guige{
  width: 7.4rem;
  margin: auto;
  display: flex;
  // justify-content: space-between;
  // align-items: center;
  // white-space: nowrap;
  // overflow-x: auto;
  // -webkit-overflow-scrolling:touch;
  .total{
    margin-top: 0.9rem;
    width: 2.2rem;
      div{
      display:block;
      float: left;
      margin: 0.2rem;
      font-size: 0.2rem;
      padding: 0.1rem;
  }
  .divActive{
      border:1px solid blue;
      color: blue;
      border-radius: 0.3rem;
      text-align: center;
      height: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.2rem;
      padding: 0.1rem;
    }
  }
  .fenzhi{
    margin-top: 0.9rem;
     display: flex;
     align-items: center;
     white-space: nowrap;
     overflow-x: auto;
     -webkit-overflow-scrolling:touch;
      div{
        display:block;
        float: left;
        margin: 0.2rem;
        font-size: 0.2rem;
        padding: 0.1rem;

  }
  .divActive{
      border:1px solid blue;
      color: blue;
      border-radius: 0.15rem;
      text-align: center;
      height: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.2rem;
      padding: 0.1rem;
    }
  }
    .fenzhi::-webkit-scrollbar{
    width: 0 !important;
  }
  .fenzhi{
    -ms-overflow-style: none;
  }
  .fenzhi{
    overflow: -moz-scrollbars-none;
  }
}
</style>