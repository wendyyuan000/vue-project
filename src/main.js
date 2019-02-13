import Vue from 'vue'
import App from './App'
import router from './router'

// 初始化css
import './css/common.css'

//引入mint-ui完整组件
import Mint from 'mint-ui'
//注册组件
Vue.use(Mint)

import 'mint-ui/lib/style.css'

//引入vue-router
import VueResource from 'vue-resource'
Vue.use(VueResource)

//配置根路径,后面请求的接口就不要/
Vue.http.options.root = 'http://www.lovegf.cn:8899'

//引入mui
import './lib/mui/css/mui.css'  //1.引入普通小图标类样式 2.直接在标签中加入类样式
import './lib/mui/css/icons-extra.css' //1.引入扩展小图标类样式 2.将tff文件复制到fonts 
//类样式高亮,直接在路由中修改默认类样式linkActiveClass 为mui-active

//引入moment时间格式化插件
import moment from 'moment'

//设置全局过滤器
Vue.filter('dateFormat',function(msg,pattern='YYYY-MM-DD HH-mm-ss'){  //pattern就是设置默认的时间格式
  return moment(msg).format(pattern)
})

//注册全局组件
import comment from './components/comment.vue'
Vue.component('comment',comment)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
