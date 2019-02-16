import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// 导入组件
import homeComponent from '../pages/home'  //默认找home文件夹下面的index.vue
import memberComponent from '../pages/member'
import shopcarComponent from '../pages/shopcar'
import searchComponent from '../pages/search'
import newsListComponent from '../pages/newsList'
import photoListComponent from '../pages/photoList'
import newsInfoComponent from '../pages/newsInfo'
import photoInfoComponent from '../pages/photoInfo'
import goodsListComponent from '../pages/goodsList'
import goodsInfoComponent from '../pages/goodsInfo'
import goodsDesComponent from '../pages/goodsDes'
import goodsCommentComponent from '../pages/goodsComment'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homeComponent},
    {path:'/member',component:memberComponent},
    {path:'/shopcar',component:shopcarComponent},
    {path:'/search',component:searchComponent},
    {path:'/home/newsList',component:newsListComponent}, //这里加路径加/home是为了保持高亮
    {path:'/home/newsInfo/:id',component:newsInfoComponent},
    {path:'/home/photoList',component:photoListComponent},
    {path:'/home/photoInfo/:id',component:photoInfoComponent},
    {path:'/home/goodsList',component:goodsListComponent},
    {path:'/home/goodsInfo/:id',component:goodsInfoComponent},
    {path:'/home/goodsDes/:id',component:goodsDesComponent},
    {path:'/home/goodsComment/:id',component:goodsCommentComponent},
  ],
  linkActiveClass:'mui-active'
})
