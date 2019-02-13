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
5.点击底部图标切换组件的动画
    1.出现横向滚动条  给#app盒子 overflow-x:hidden
    2.切换组件时右进左出
        .v-enter{
	        opacity: 0;
	        transform: translateX(100%)
        }

        .v-leave-to{
        	opacity: 0;
        	transform: translateX(-100%);
        	position: absolute
        }
    3.组件切换时错乱,组件占位置,将离开的组件设置绝对定位 
        .v-leave-to{
        	position: absolute
        }
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
                this.banner = result.body.message
            })

2.九宫格(使用的是mui)
    使用less来设置样式
    1.npm i less less-loader -D
    2.设置样式




##中间(router-view占位,切换相应组件)

##新闻列表页newsList

##新闻详情页newsInfo.vue
    1.图片的大小设置
        style中的scoped会将newsInfo.vue中的标签默认添加一个唯一标识属性v-data-88du
        给img设置宽度 
        img{
            width:100%
        }
        就是给下面的属性赋值,但是页面中的确实img
        img[v-data-88du]{
            width:100%
        }
        所以可以将scoped删除,就不存在这个问题
    2.评论组件(有很多页面都用到了,所以在main.js中全局注册了组件)
        最后的评论是通过子组件component文件comment.vue实现的
        1.newsInfo下的index.vue中<comment :infoId="id"></comment>设置自定义属性
        2.component下的comment.vue中设置props:['infoId'],这就相当于data中的数据了
        3.然后就可以直接使用infoId了

##时间格式化,开启过滤器
    newsInco下的index.vue
    1.{{item.add_time | dateFormat}}
    2.下载并在main.js中引入moment
    3.main.js中设置全局过滤器,因为还有其他组件要使用该过滤器
        Vue.filter('dateFormat',function(msg,pattern='YYYY-MM-DD HH-mm-ss'){
            return moment(msg).format(pattern)
        })

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
