<template>
  <div id="app">
    <!-- header -->
    <mt-header fixed title="vue">
        <mt-button v-show="hasBackBtn" @click="$router.go(-1)" slot="left" icon="back">返回</mt-button>
    </mt-header>
		<!-- 中间 -->
		<transition name="app">
				<router-view/>
		</transition>
    
    <!-- footer -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item1" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="carnum">{{$store.getters.totalCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
        hasBackBtn :this.$route.path !== '/home'  //开始默认不显示首页不显示返回按钮
    }
  },
  watch:{ 
      $route(to,from){  //监听路由变化
      //   if(to.path === '/home'){
      //   this.hasBackBtn = false
      // }else{
      //   this.hasBackBtn = true
      // }
      this.hasBackBtn = to.path !== '/home'
      }
  }
}
</script>

<style lang="less">
body{
		background-color: #fff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  padding-top: 40px;
  padding-bottom: 50px;
	overflow-x: hidden;
	.mint-header.is-fixed{
		z-index:999
	}

}

.mui-bar-tab .mui-tab-item1.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

.app-enter{
	opacity: 0;
	transform: translateX(100%)
}

.app-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute
}

.app-enter-active,
.app-leave-active{
	transition: all 0.5s ease
}
</style>
