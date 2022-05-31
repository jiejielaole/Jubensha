<template>
    <div class="nandu">   
    <div class="total">
      <div v-show="!shownandu[0]" @click="SelectND(0,'all')">全部难度</div>
      <div v-show="shownandu[0]" class="divActive" @click="SelectND(0,'all')">全部难度</div>
    </div> 
    <div class="fenzhi">
      <div v-show="shownandu[1]" class="divActive" @click="SelectND(1,'新手')">新手</div>
      <div v-show="!shownandu[1]" @click="SelectND(1,'新手')">新手</div>
      <div v-show="shownandu[2]" class="divActive" @click="SelectND(2,'进阶')">进阶</div>
      <div v-show="!shownandu[2]" @click="SelectND(2,'进阶')">进阶</div>
      <div v-show="shownandu[3]" class="divActive" @click="SelectND(3,'硬核')">硬核</div>
      <div v-show="!shownandu[3]" @click="SelectND(3,'硬核')">硬核</div>
      
    </div>    
  </div>
</template>

<script>
import { ref ,reactive, toRefs} from 'vue';

export default {
  setup(props,{emit}) {


    const state = reactive({
       shownandu:[true,false,false,false],
       nandu:''
      });

     const SelectND = (index,NDstring) =>{
        console.log("nandu")
        for(let i = 0;i < state.shownandu.length ;i++){
          if(state.shownandu[i]){
            state.shownandu[i] = !state.shownandu[i]
          }
        }
        state.shownandu[index] = !state.shownandu[index]
        state.nandu = NDstring
        // console.log(state.nandu)
        emit('giveND',state.nandu)
      }

    return { 
      ...toRefs(state),
      SelectND
     };
    
  },
};

</script>

<style lang="less" scoped>
.nandu{
  width: 7.4rem;
  margin: auto;
  display: flex;
  // justify-content: space-between;
  // align-items: center;
  // white-space: nowrap;
  // overflow-x: hidden;
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
    margin-left: -0.37rem;
     display: flex;
     align-items: center;
     white-space: nowrap;
     overflow-x: scroll;
    
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