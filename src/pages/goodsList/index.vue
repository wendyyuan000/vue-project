<template>
    <div class="goodsList">
        <div class="goodsItem" v-for="item in goodsList" :key="item.id" @click="goGoodsInfo(item.id)">
            <img :src="item.img_url" alt="">
            <div class="title">{{item.title}}</div>
                <div class="sale">
                    <p class="price">
                        <span class="now">{{item.sell_price}}</span>
                        <del class="old">{{item.market_price}}</del>
                    </p>
                    <p>
                        <span>热卖商品</span>
                         <span>剩余{{item.stock_quantity}}件</span>
                    </p>
                </div>
        </div>

         <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>

    </div>
</template>

<script>
export default {
    data(){
        return {
            pageindex:1,
            goodsList:[]
        }
    },
    created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList(){
            this.$http.get('api/getgoods?pageindex='+this.pageindex).then(result=>{
                console.log(result);
                if(result.body.status===0){
                    this.goodsList = this.goodsList.concat(result.body.message)
                }
            })
        },
        goGoodsInfo(id){ //通过 编程式导航实现跳转
            this.$router.push('/home/goodsInfo/'+id)
        },
        getMore(){
            this.pageindex++
            this.getGoodsList()
        }
    },
}
</script>

<style lang="less" scoped>
    .goodsList{
        display: flex;
        flex-wrap: wrap;
        padding: 5px;
        justify-content: space-between;
        .goodsItem{
            width: 49%;
            height: 316px;
            border:1px solid #ccc;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 10px 0;
             padding: 3px;
            img{
                width: 100%;
                height: 200px;
            }
            .title{
                    font-size: 10px
                }
            .sale{
                background-color: #eee; 
                    p{
                        padding: 0;
                        margin: 0;
                    } 
            }
        }
    }
</style>
