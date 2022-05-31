<template>
    <div class="ticai">   
    <div class="total">
      <div v-show="!showticai[0]" @click="SelectTC(0,'all')">全部题材</div>
      <div v-show="showticai[0]" class="divActive" @click="SelectTC(0,'all')">全部题材</div>
    </div> 
    <div class="fenzhi">
      <div v-show="showticai[1]" class="divActive" @click="SelectTC(1,'情感')">情感</div>
      <div v-show="!showticai[1]" @click="SelectTC(1,'情感')">情感</div>
      <div v-show="showticai[2]" class="divActive" @click="SelectTC(2,'欢乐')">欢乐</div>
      <div v-show="!showticai[2]" @click="SelectTC(2,'欢乐')">欢乐</div>
      <div v-show="showticai[3]" class="divActive" @click="SelectTC(3,'机制')">机制</div>
      <div v-show="!showticai[3]" @click="SelectTC(3,'机制')">机制</div>
      <div v-show="showticai[4]" class="divActive" @click="SelectTC(4,'阵营')">阵营</div>
      <div v-show="!showticai[4]" @click="SelectTC(4,'阵营')">阵营</div>
      <div v-show="showticai[5]" class="divActive" @click="SelectTC(5,'恐怖')">恐怖</div>
      <div v-show="!showticai[5]" @click="SelectTC(5,'恐怖')">恐怖</div>
      <div v-show="showticai[6]" class="divActive" @click="SelectTC(6,'推理')">推理</div>
      <div v-show="!showticai[6]" @click="SelectTC(6,'推理')">推理</div>
      <div v-show="showticai[7]" class="divActive" @click="SelectTC(7,'其他')">其他</div>
      <div v-show="!showticai[7]" @click="SelectTC(7,'其他')">其他</div>
      
    </div>    
  </div>
</template>

<script>
import { ref ,reactive, toRefs} from 'vue';

export default {
  setup(props,{emit}) {


    const state = reactive({
       showticai:[true,false,false,false,false,false,false,false],
       ticai:''
      });

     const SelectTC = (index,TCstring) =>{
        console.log("ticai")
        for(let i = 0;i < state.showticai.length ;i++){
          if(state.showticai[i]){
            state.showticai[i] = !state.showticai[i]
          }
        }
        state.showticai[index] = !state.showticai[index]
        state.ticai = TCstring
        // console.log(state.ticai)
        emit('giveTC',state.ticai)
      }

    return { 
      ...toRefs(state),
      SelectTC
     };
    
  },
};

</script>

<style lang="less" scoped>
.ticai{
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
    margin-left: 0.2rem;
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