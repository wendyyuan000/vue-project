<template>
    <div class="goodsInfoContainer">
        <!-- 小球 -->
        <!-- 小球开始隐藏的:所以设置isshow为false,点击加入购物车,小球显示并执行半场动画,
        半场动画需要用到动画钩子函数,注意要将app.vue中的transition去个名字来区别次动画,否则动画会冲突 -->
        <transition @beforeEnter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
            <div class="ball" v-show="isshow" ref="ball"></div>
        </transition>
        <!-- mui 的card 组件 -->
        <div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
                    <!-- 轮播图 -->
					<mt-swipe :auto="-1">
                        <mt-swipe-item v-for="(item,index) in banner" :key="index">
                            <a>
                                <img :src="item.src" alt="">
                            </a>
                        </mt-swipe-item>
                    </mt-swipe>
				</div>
			</div>
		</div>
        
        <!-- 购物车 -->
		<div class="mui-card">
			<div class="mui-card-header">{{goodsInfo.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div>市场价:¥<del>{{goodsInfo.market_price}}</del>&nbsp;&nbsp;<span>销售价:¥{{goodsInfo.sell_price}}</span></div>
                    <div class="pruchase">
                        购买数量:
                        <!-- 减少按钮 -->
                        <input type="button" value="-" 
                        @click="buyCount>=2 && buyCount--"  
                        :disabled="buyCount==1">

                        <!-- 文本框 -->
                        <input type="text" v-model="buyCount" @change="filterCount">

                        <!-- 增加按钮 -->
                        <input type="button" value="+" 
                        @click="buyCount<goodsInfo.stock_quantity && buyCount++"
                        :disabled="buyCount==goodsInfo.stock_quantity">
                    </div>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToCar">加入购物车</mt-button>
				</div>
			</div>
		</div>
		
        <!-- 商品详情 -->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<div>商品货号:{{goodsInfo.goods_no}}</div>
                    <div>库存情况:{{goodsInfo.stock_quantity}}件</div>
                    <div>上架时间:{{goodsInfo.add_time | dateFormat}}</div>
				</div>
			</div>
			<div class="mui-card-footer">
                <!-- 两个按钮开始的时候设置的size为large,但是没有占一行,是因为父盒子有个dispaly:flex,
                在样式中改为dispaly:block -->
                <mt-button type="primary" plain size="large" @click="goodsDes(id)">图文介绍</mt-button>
                <mt-button type="danger" plain size="large" @click="goodsComment">图文评论</mt-button>
            </div>
		</div>

        
    </div>
</template>

<script>
export default {
    data(){
        return {
            banner:[],
            id:this.$route.params.id,
            goodsInfo:{},
            buyCount:1,
            isshow:false,  
        }
    },
    created() {
        this.getBanner()
        this.getGoodsInfo()
    },
    methods: {
        getBanner(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                // console.log(result)
                this.banner = result.body.message
            })
        },
        getGoodsInfo(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                console.log(result)
                this.goodsInfo = result.body.message[0]
            })
        },
        filterCount(){
            if(this.buyCount<1){
                this.buyCount = 1
            }else if(this.buyCount>this.goodsInfo.stock_quantity){
                this.buyCount = this.goodsInfo.stock_quantity
            }
        },
        addToCar(){
            this.isshow = !this.isshow
        },
        beforeEnter(el){
            el.style.transform = 'translate(0,0)'
        },
        enter(el,done){
            el.offsetWidth
            /* 这里小球的位移要通过购物车的0的位置-小球的位置 */
            /*通过dom元素获取元素的位置dom.getBoundingClientRect()  */

            /* 小球的位置 */
            let ballPosition = this.$refs.ball.getBoundingClientRect()
            
            /* 购物车中的0的位置 可以直接通过获取元素的方法获取app.vue中的元素*/
            let numPosition = document.getElementById('carnum').getBoundingClientRect()
            
            let xdis = numPosition.left - ballPosition.left
            let ydis = numPosition.top - ballPosition.top

            el.style.transform = `translate(${xdis}px,${ydis}px)`
            el.style.transition = 'all 0.5s ease'
            done()
        },
        afterEnter(el){
            this.isshow = !this.isshow
        },
        goodsDes(){
            this.$router.push('/home/goodsDes/'+this.id)
        },
        goodsComment(){
            this.$router.push('/home/goodsComment/'+this.id)
        }
    },
}
</script>

<style lang="less">
.goodsInfoContainer{
    position: relative;
}
    .mint-swipe{
        height: 200px;
        img{
            height: 100%;
            // width: 100px;
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
        width:30px;
        height: 30px;
    }
    .mui-card-footer{
        display: block;
        .mint-button{
            margin: 10px 0
        }
    }
    .ball{
        width: 15px;
        height: 15px;
        background-color: red;
        position: absolute;
        left: 122px;
        top: 355px;
        border-radius: 50%;
        z-index: 99
    }
</style>
