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

//引入vue-resource,发送请求  this.$http.get()
import VueResource from 'vue-resource'
Vue.use(VueResource)

//配置根路径,后面请求的接口就不要/
Vue.http.options.root = 'http://www.lovegf.cn:8899'
//配置提交数据格式
Vue.http.options.emulateJSON = true

//引入mui
import './lib/mui/css/mui.css'  //1.引入普通小图标类样式 2.直接在标签中加入类样式
import './lib/mui/css/icons-extra.css' //1.引入扩展小图标类样式 2.将tff文件复制到fonts 
//类样式高亮,直接在路由中修改默认类样式linkActiveClass 为mui-active

//引入moment时间格式化插件
import moment from 'moment'

//引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//初次进入页面获取localStorage
let car = JSON.parse(localStorage.getItem('car') || '[]')

//创建store对象
var store = new Vuex.Store({
  state:{
    shopcar: car  //{id,price,count,selected}
  },
  mutations:{  //this.$store.commit('方法名',{}) 这里的参数只有一个,多个参数可以传对象和数据
    getGoodsInfo(state,goodsInfo){  //商品详情页面----点击加入购物车执行的代码
      let index = state.shopcar.findIndex(item=>item.id===goodsInfo.id)  //如果存在,返回索引,如果不存在在,返回-1
      if(index===-1){
        state.shopcar.push(goodsInfo)  //商品在购物车不存在.则添加商品信息
      }else{
        state.shopcar[index].count += parseInt(goodsInfo.count) //商品存在,则只改变商品数量
      }

       //修改数据将数据写入localstorage
      localStorage.setItem('car',JSON.stringify(state.shopcar))
    },
    updateCount(state,goodsInfo){  //用于更新数量   这里的goodsInfo只需要id和count
        state.shopcar.some(item=>{
          if(item.id==goodsInfo.id){
            item.count = goodsInfo.count
             return true
          }
        })
         //修改数据将数据写入localstorage
      localStorage.setItem('car',JSON.stringify(state.shopcar))
      // console.log(11)
    },
    /* 更新选中状态 */
    updateSelected(state,goodsSelected){
        state.shopcar.some(item=>{
          if(item.id==goodsSelected.id){
            item.selected = !goodsSelected.selected
            return true
          }
        })
        localStorage.setItem('car',JSON.stringify(state.shopcar))
    },
    /* 删除商品 */
    removeFromCar(state,id){
        state.shopcar.some((item,i)=>{
          if(item.id==id){
            state.shopcar.splice(i,1)
            return true
          }
        })
        localStorage.setItem('car',JSON.stringify(state.shopcar))
    }
   
  },
  getters:{  //this.$store.方法名
    totalCount(state){  //同步购物车徽标
        let sum = 0
        state.shopcar.forEach(item=>{
           sum += item.count
        })
        return sum
    },
    goodsCount(state){
      //通过遍历shopcar手动创建一个{id:count}对象
      var obj = {}
      state.shopcar.forEach(item=>{
        obj[item.id] = item.count
      })
      return obj
    },
    goodsSelected(state){
      //手动创建一个对象{id:selected}
        var obj = {}
        state.shopcar.forEach(item=>{
          obj[item.id] = item.selected
        })
        return obj
    },
    goodsCountAmount(state){
      var obj = {
        count:0, //勾选数量
        amount:0  //勾选商品总价
      }
      state.shopcar.forEach(item=>{
        if(item.selected){
          obj.count += item.count
          obj.amount += item.price * item.count
        }
      })
      return obj
    }
  }
})

//设置全局过滤器
Vue.filter('dateFormat',function(msg,pattern='YYYY-MM-DD HH-mm-ss'){  //pattern就是设置默认的时间格式
  return moment(msg).format(pattern)
})

//注册全局评论组件
import comment from './components/comment.vue'
Vue.component('comment',comment)

//导入并安装预览插件
import VuePreview from 'vue-pic-preview'
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
Vue.use(VuePreview)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
