<template>
    <div class="homeContainer">
        <!-- 轮播图 -->
        <mt-swipe :auto="-1">
            <mt-swipe-item v-for="(item,index) in banner" :key="index">
                <a :href="item.url">
                    <img :src="item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
		            <img src="@/assets/images/menu1.png" alt="">
		            <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photoList">
		            <img src="@/assets/images/menu2.png" alt="">
		            <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/shopping">
		            <img src="@/assets/images/menu3.png" alt="">
		            <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/message">
		            <img src="@/assets/images/menu4.png" alt="">
		            <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/vedio">
		            <img src="@/assets/images/menu5.png" alt="">
		            <div class="mui-media-body">视屏专区</div>
                </router-link>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/connect">
		            <img src="@/assets/images/menu6.png" alt="">
		            <div class="mui-media-body">联系我们</div>
                </router-link>
            </li>
	    </ul> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
                banner: []
            }
        },
        created() {
            this.getBanner()
        },
        methods: {
            getBanner() {
                this.$http.get('api/getlunbo')//这里要用相对路径 不要加/  'http://www.lovegf.cn:8899/api/getlunbo'
                    .then(result => {
                        console.log(result)
                        this.banner = result.body.message
                    })
            }
        }
    }
</script>


/* 如果是less那么需要 安装 less less-loader */
<style lang="less" scoped>
    .homeContainer {
        .mint-swipe {
            height: 200px;
            .mint-swipe-item {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .mui-table-view{
            background-color: #fff;
            img{
                width: 80%;
                height: 80%;
            }
        }
    }
</style>
