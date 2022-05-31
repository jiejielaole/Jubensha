<template>
    <div class="renshu">   
    <div class="total">
      <div v-show="!showrenshu[0]" @click="SelectRS(0,'all')">全部人数</div>
      <div v-show="showrenshu[0]" class="divActive" @click="SelectRS(0,'all')">全部人数</div>
    </div> 
    <div class="fenzhi">
      <div v-show="showrenshu[1]" class="divActive" @click="SelectRS(1,4)">≤4人</div>
      <div v-show="!showrenshu[1]" @click="SelectRS(1,4)">≤4人</div>
      <div v-show="showrenshu[2]" class="divActive" @click="SelectRS(2,5)">5人</div>
      <div v-show="!showrenshu[2]" @click="SelectRS(2,5)">5人</div>
      <div v-show="showrenshu[3]" class="divActive" @click="SelectRS(3,6)">6人</div>
      <div v-show="!showrenshu[3]" @click="SelectRS(3,6)">6人</div>
      <div v-show="showrenshu[4]" class="divActive" @click="SelectRS(4,7)">7人</div>
      <div v-show="!showrenshu[4]" @click="SelectRS(4,7)">7人</div>
      <div v-show="showrenshu[5]" class="divActive" @click="SelectRS(5,8)">8人</div>
      <div v-show="!showrenshu[5]" @click="SelectRS(5,8)">8人</div>
      <div v-show="showrenshu[6]" class="divActive" @click="SelectRS(6,9)">9人</div>
      <div v-show="!showrenshu[6]" @click="SelectRS(6,9)">9人</div>
      <div v-show="showrenshu[7]" class="divActive" @click="SelectRS(7,10)">≥10人</div>
      <div v-show="!showrenshu[7]" @click="SelectRS(7,10)">≥10人</div>
    </div>    
  </div>
</template>

<script>
import { ref ,reactive, toRefs} from 'vue';

export default {
  setup(props,{emit}) {


    const state = reactive({
       showrenshu:[true,false,false,false,false,false,false,false],
       renshu:''
      });

     const SelectRS = (index,count) =>{
        console.log("renshu")
        for(let i = 0;i < state.showrenshu.length ;i++){
          if(state.showrenshu[i]){
            state.showrenshu[i] = !state.showrenshu[i]
          }
        }
        state.showrenshu[index] = !state.showrenshu[index]
        state.renshu = count
        // console.log(state.renshu)
        emit('giveRS',state.renshu)
      }

    return { 
      ...toRefs(state),
      SelectRS
     };
    
  },
};

</script>

<style lang="less" scoped>
.renshu{
  width: 7.4rem;
  margin: auto;
  display: flex;
  // justify-content: space-between;
  // align-items: center;
  // white-space: nowrap;
  // overflow-x: auto;
  // -webkit-overflow-scrolling:touch;
  .total{
    // margin-top: -0.5rem;
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
    // margin-top: -0.5rem;
    margin-left: 0.16rem;
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