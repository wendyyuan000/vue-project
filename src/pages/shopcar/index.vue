<template>
    <div class="shopcarContainer">
        
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner" v-for="(item,i) in goodsList" :key="item.id">
						<mt-switch @change="goodsStateChange(item.id,$store.getters.goodsSelected[item.id])"></mt-switch>
						<img :src="item.thumb_path">
						<div>
							 <p>{{item.title}}</p>
							 <div class="product">
								 <span class="price">{{item.sell_price}}</span>
								 <span class="pruchase">
                        <!-- 减少按钮 -->
                        <input type="button" value="-" @click="decrease(item.id)">

                        <!-- 文本框 -->
                        <input type="text" v-model="goodsCount[item.id]">

                        <!-- 增加按钮 -->
                        <input type="button" value="+" @click="increase(item.id)">
                    </span>
										<span @click="remove(item.id,i)">删除</span>
							 </div>
						</div>
				</div>
			</div>
        </div>

        <div class="mui-card">
		    <div class="mui-card-content">
		    	<div class="mui-card-content-inner">
		    		<p>总件数:{{$store.getters.goodsCountAmount.count}}</p>
					<p>总价:{{$store.getters.goodsCountAmount.amount}}</p>
		    	</div>
		    </div>
        </div>
	</div>
</template>

<script>
export default {
    data(){
			return {
					goodsList:[],  //渲染的数据
					goodsCount:this.$store.getters.goodsCount  //获取{id:count}对象
			}
		},
		created() {
				this.getShopcarInfo()
		},
		methods: {
			getShopcarInfo(){
					//获取store中所有商品信息
					var idArr = []  //请求接口的参数
					this.$store.state.shopcar.forEach(item => idArr.push(item.id)) //将shopcar每一项的id值追加到idArr数组中
					// console.log(idArr);
					
					if(idArr.length<=0){
						return  //退出,不执行后面的代码
					}
					this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result=>{
						// console.log(result)
						this.goodsList = result.body.message
					})
					
			},
			decrease(id){  //点击按钮数量减少
					// console.log(11)
					this.goodsCount[id]>1 && this.goodsCount[id]--   //如果当前商品的数量大于1,则可以减
					// console.log(this.goodsCount[id])
					this.$store.commit('updateCount',{id:id,count:this.goodsCount[id]})
					// console.log({id:id,count:this.goodsCount[id]})
			},
			increase(id){
				// console.log(22)
					this.goodsCount[id]++
					this.$store.commit('updateCount',{id:id,count:this.goodsCount[id]})
			},
			goodsStateChange(id,selected){
				this.$store.commit('updateSelected',{id,selected})
			},
			remove(id,i){
				this.goodsList.splice(i,1)
				this.$store.commit('removeFromCar',id)
			}
		},
}
</script>

<style lang="less">
.shopcarContainer{
		.mui-card-content-inner{
	 display: flex;
	 align-items: center;
	 img{
		 width: 60px;
		 height: 100px;
	 }
	 .product{
				display: flex;
				align-items: center;
				justify-content: space-between;
				.price{
					font-size: 12px
				}
		 }
}
.pruchase{
        display: flex;
        align-items: center;  //设置子元素在侧轴的对齐方式
        margin:10px 0
    }
    input[type='text']{
        margin: 0;
        padding: 0;
        border-left: none;
        border-right: none;
        text-align: center;
    }
    input[type=text],input[type=button]{
        width:20px;
				height: 20px;
				line-height: 1px;
				text-align: center !important;
		}
}

</style>
