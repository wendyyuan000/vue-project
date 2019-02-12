import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 导入组件
import homeContainer from '../pages/home'  //默认找home文件夹下面的index.vue
import memberContainer from '../pages/member'
import shopcarContainer from '../pages/shopcar'
import searchContainer from '../pages/search'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeContainer},
    {path:'/member',component:memberContainer},
    {path:'/shopcar',component:shopcarContainer},
    {path:'/search',component:searchContainer},

  ],
  linkActiveClass:'mui-active'
})
