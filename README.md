# vue-cli-demo

> 第一个vue项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
##顶部
1.顶部使用的是mint-ui
2.给#app容器设置padding-top

##底部
1.底部使用的是mui
2.给#app容器设置padding-bottom
3.底部小图标:普通小图标(引入mui.css,直接使用相应类名)
            扩展图标(将icons-extra.css复制到css和mui-icons-extra.ttf复制到fonts,使用相应的类名)
    import './lib/mui/css/mui.css'
    import './lib/mui/css/icons-extra.css'
    高亮:在router的index.js里面将router-link点击添加的默认类名通过linkActiveClass修改为mui-active
    linkActiveClass:'mui-active'
4.每个底部的的小图标和文件被router-link包裹,通过to设置组件的跳转
    1.<router-link class="mui-tab-item" to="/home">  
		<span class="mui-icon mui-icon-home"></span>
		<span class="mui-tab-label">首页</span>
	</router-link>
    2.在router的index.js中设置路由匹配规则
        <!-- 导入组件 -->
        import homeContainer from '../pages/home'  //在pages中写组件,默认找home文件夹下面的index.vue
        import memberContainer from '../pages/member'
        import shopcarContainer from '../pages/shopcar'
        import searchContainer from '../pages/search'

        <!-- 路由匹配组件 -->
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

##home页面
1.轮播图(使用的是mint-ui)
    页面加载时发送请求获取图片
        1.npm i vue-resource -S
        2.在main.js中引入和注册vue-resource
            import VueResource from 'vue-resource'
            Vue.use(VueResource)
        3.发送请求
            this.$http.get('http://www.lovegf.cn:8899/api/getlunbo').then(result=>{
                console.log(result)
            })

2.九宫格(使用的是mui)
    使用less来设置样式
    1.npm i less less-loader -D
    2.设置样式




##中间(router-view占位,切换相应组件)


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
