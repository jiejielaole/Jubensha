<template>
   <div v-if="!$route.meta.keepAlive">
  <tab-bar></tab-bar>
  <router-view/>
   </div>
  <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
</template>

<script>
import TabBar from '@/components/TabBar.vue'
import { provide, ref, nextTick, reactive } from "vue";
export default {
  components: {
    TabBar
  },
provide (){
    return {
      reload: this.reload
    }
  },
  data (){
    return {
      showRouter: true
    }
  },
  methods: {
    reload (){
      this.showRouter = false
      this.$nextTick(()=>{
        this.showRouter = true
      })
    }
  }

}
</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}

a{
  color:#333;
  text-decoration: none;
}
</style>
