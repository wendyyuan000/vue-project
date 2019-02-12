import Vue from 'vue'
import App from './App'
import router from './router'

//引入mint-ui组件
import Mint from 'mint-ui'
//注册组件
Vue.use(Mint)
import 'mint-ui/lib/style.css'

//引入vue-router
import VueResource from 'vue-resource'
Vue.use(VueResource)

//引入mui
import './lib/mui/css/mui.css'  //1.引入普通小图标类样式 2.直接在标签中加入类样式
import './lib/mui/css/icons-extra.css' //1.引入扩展小图标类样式 2.将tff文件复制到fonts 
//类样式高亮,直接在路由中修改默认类样式linkActiveClass 为mui-active
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
