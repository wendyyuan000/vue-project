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
                <a href="#">
		            <img src="@/assets/images/menu1.png" alt="">
		            <div class="mui-media-body">Home</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="@/assets/images/menu2.png" alt="">
		            <div class="mui-media-body">Email</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="@/assets/images/menu3.png" alt="">
		            <div class="mui-media-body">Chat</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="@/assets/images/menu4.png" alt="">
		            <div class="mui-media-body">location</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="@/assets/images/menu5.png" alt="">
		            <div class="mui-media-body">Search</div>
                </a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
		            <img src="@/assets/images/menu6.png" alt="">
		            <div class="mui-media-body">Phone</div>
                </a>
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
                this.$http.get('http://www.lovegf.cn:8899/api/getlunbo')
                    .then(result => {
                        console.log(result)
                        this.banner = result.body.message
                    })
            }
        }
    }
</script>


/* 如果是less那么需要 安装 less less-loader */
<style lang="less">
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