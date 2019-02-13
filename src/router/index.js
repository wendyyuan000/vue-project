import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 导入组件
import homeComponent from '../pages/home'  //默认找home文件夹下面的index.vue
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'
import newsListComponent from '../pages/newsList'
import sharePicComponent from '../pages/sharePic'
import newsInfoComponent from '../pages/newsInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeComponent},
    {path:'/member',component:memberComponent},
    {path:'/shopcar',component:shopcarComponent},
    {path:'/search',component:searchComponent},
    {path:'/home/newsList',component:newsListComponent},
    {path:'/home/sharePic',component:sharePicComponent},
    {path:'/home/newsInfo/:id',component:newsInfoComponent},
  ],
  linkActiveClass:'mui-active'
})
