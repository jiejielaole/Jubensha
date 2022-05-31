<template>
  <div class="JuBenInfoView">
      <juben-infoview-top :jubenInfo="jubenInfo"></juben-infoview-top>
      <juben-info :jubenInfo="jubenInfo"></juben-info>

  </div>
</template>

<script>
import jubenInfoviewTop from '@/components/jubenInfoviewTop.vue'
import jubenInfo from '@/components/jubenInfo.vue'
import {useRoute} from 'vue-router'
import {onMounted, toRefs, reactive} from 'vue'
import JubenDataApi from '../api/JubenDataApi'
export default {
  components: {
    JubenDataApi
  },
  setup() {
    const route = useRoute()

    let state = reactive({
        tc:[],
        tags:[],
        character:[],
        characterObject:[],
        jubenInfotest:{},
        jubenInfo:{}
    });
    onMounted(() => {
        state.jubenInfo = {}
        let name = route.query.name
        console.log(name)

        JubenDataApi.getALL().then((data) => {
          console.log(data.data.length)
          for(let i = 0; i < data.data.length; i++){
            if(data.data[i].name === name){
            state.tc = data.data[i].tc.split(",")
            state.tags = data.data[i].tags.split(",")
            state.character = data.data[i].character.split(",")
            for(let j = 0 ;j < state.character.length; j++){
              var obj = {}
              obj.pic = state.character[j]
              state.characterObject.push(obj)
            }
            console.log(state.characterObject)
            console.log(state.character)
            Object.assign(state.jubenInfotest,data.data)
            console.log(state.jubenInfotest)
            state.jubenInfo = {pic:state.jubenInfotest[i].pic,name:state.jubenInfotest[i].name,male:state.jubenInfotest[i].male,female:state.jubenInfotest[i].female,duration:state.jubenInfotest[i].duration,nd:state.jubenInfotest[i].nd,
            gg:state.jubenInfotest[i].gg,price:state.jubenInfotest[i].price,introduce:state.jubenInfotest[i].introduce,tc:state.tc,tags:state.tags,character:state.characterObject
          }
          }
          
          }
        }).catch((err) => {
          console.log(err)
        }) 
    })
    console.log(state.jubenInfo.introduce)
   
    return{
      ...toRefs(state)
    }
   },
  components:{
    jubenInfoviewTop,
    jubenInfo
  }
}
</script>