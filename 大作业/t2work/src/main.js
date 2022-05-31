import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, 
         SwipeItem,
         NavBar,
         Icon,
         Image as VanImage ,
         Button,
         Tabbar, 
         TabbarItem,
         Checkbox, 
         CheckboxGroup,
         Search,
         Rate,
         Dialog} from 'vant';

createApp(App)
.use(store)
.use(TabbarItem)
.use(Tabbar)
.use(router)
.use(Button)
.use(VanImage)
.use(Icon)
.use(Swipe)
.use(SwipeItem)
.use(NavBar)
.use(Checkbox)
.use(CheckboxGroup)
.use(Search)
.use(Rate)
.use(Dialog)
.mount('#app')

