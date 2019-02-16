<template>
    <div>
        <div id="slider" class="mui-slider ">
		    <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
		    	<div class="mui-scroll">
		    		<a :class="['mui-control-item',{'mui-active':item.id==0}]" 
					v-for="item in category" 
					:key="item.id"
					@click="getPhotoList(item.id)">
		    			{{item.title}}
		    		</a>
		    	</div>
		    </div>
		</div>

		<ul class="photoListContainer">
			<router-link v-for="item in photoList" :key="item.id" :to="'/home/photoInfo/'+item.id" tag="li">
				<img v-lazy="item.img_url"> <!-- 懒加载 -->
				<div class="text">
					<h1>{{item.title}}</h1>
					<p>{{item.zhaiyao}}</p>
				</div>
			</router-link>
		</ul>
    </div>
</template>

<script>
// 1.tab菜单栏跑到顶部了,需要删除 .mui-fullscreen类名
//2.引入mui.js,并在mounted中初始化插件scroll,实现滚动
import mui from '@/lib/mui/js/mui.js'
//3.webpack4 遵循严格模式 这里的mui.js中的caller,callee,arguments不能使用,需要在babelrc中忽略mui.js文件
//4.APP.vue的底部菜单栏无法切换,是由于mui中的 .mui-tab-item 的类名,在页面打开检查,在App.vue更换tab菜单栏的这个类名并设置样式
export default {
	data(){
		return {
			category:[],
			photoList:[]
		}
	},
	created() {
		this.getCategory()
		this.getPhotoList(0) //初次渲染全部的图片
	},
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		})
	},
	methods: {
		getCategory(){
			this.$http.get('api/getimgcategory').then(result=>{
				// console.log(result)
				this.category = result.body.message
				this.category.unshift({title:'全部',id:0})
				// console.log(this.category)
				
			})
		},
		getPhotoList(id){
			this.$http.get('api/getimages/'+id).then(result=>{
				console.log(result);
				this.photoList = result.body.message
			})
		}
	},
}
</script>

<style lang="less">
    *{
        touch-action: pan-y
	}
	.photoListContainer{
		padding: 0;
		margin: 0;
		li{
			position: relative;
			img{
				width: 100%;
				max-height: 300px
			}
			.text{
				position: absolute;
				bottom: 0;
				background-color: rgba(0,0,0,0.4);
				color: white;
				h1{
					font-size: 14px
				}
				p{
					font-size: 13px;
					color: white;
				}
			}
		}
	}
	img[lazy=loading] {  //懒加载的小图标样式
  		width: 40px;
  		height: 300px;
  		margin: auto;
	}
</style>
