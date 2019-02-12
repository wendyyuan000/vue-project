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
    高亮:在router的index.js里面将router-link点击添加的默认类名通过linkActiveClass修改为mui-active
    linkActiveClass:'mui-active'

##home页面
1.轮播图(使用的是mint-ui)
    
2.九宫格(使用的是mui)


##中间(router-view占位,切换相应组件)


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
