<template>
  <div class="tabNav">
        <van-tabbar v-model="active" class="tabBar">
          <van-tabbar-item class="tabBarItem" replace to="/">
            <span>首页</span>
            <template #icon="props">
              <img :src="props.active ? icon.active : icon.inactive" />
            </template>
          </van-tabbar-item>
           <van-tabbar-item class="tabBarItem" replace to="/juben">
            <span>剧本</span>
            <template #icon="props">
              <img :src="props.active ? icon.active1 : icon.inactive1" />
            </template>
          </van-tabbar-item>
          <van-tabbar-item class="tabBarItem" replace to="/yueche">
            <span>约车</span>
            <template #icon="props">
              <img :src="props.active ? icon.active2 : icon.inactive2" />
            </template>
          </van-tabbar-item>
          <van-tabbar-item class="tabBarItem" replace to="/me">
            <span>我的</span>
            <template #icon="props">
              <img :src="props.active ? icon.active3 : icon.inactive3" />
            </template>
          </van-tabbar-item>
        </van-tabbar>
      </div>
</template>

<script>
// @ is an alias to /src
import { reactive, toRefs ,ref} from 'vue'
export default {
  name: 'HomeView',
  components: {
  },
  setup() {
      const state = reactive({
      });
      
      const active = ref(0);
      const icon = {
        active: require('@/assets/img/home2.png'),
        inactive: require('@/assets/img/home1.png'),
        active1: require('@/assets/img/drama2.png'),
        inactive1: require('@/assets/img/drama1.png'),
        active2: require('@/assets/img/appointment2.png'),
        inactive2: require('@/assets/img/appointment1.png'),
        active3: require('@/assets/img/mine2.png'),
        inactive3: require('@/assets/img/mine1.png'),
      };

      
      return {
        ...toRefs(state),
        icon,
        active
      };

    },
}

</script>

<style lang="less" scoped>
.tabBar{
  border-top: 1px solid rgba(128, 128, 128, 0.235);
  height: 1rem;
  .tabBarItem{
    display: flex;
    img{
      width: 0.5rem;
      height: 0.5rem;
    }
    span{
      font-size: 0.2rem;
    }
  }
}
</style>