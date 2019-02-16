<template>
    <div class="goodsDesContainer">
        <p class="title">{{goodsDes.title}}</p>
        <hr>
        <div v-html="goodsDes.content" class="content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            goodsDes:{}
        }
    },
    created() {
        this.getGoodsDes()
    },
    methods: {
        getGoodsDes(){
            this.$http.get('api/goods/getdesc/'+this.id).then(result=>{
                console.log(result)
                this.goodsDes = result.body.message[0]
            })
        }
    },
}
</script>

<style lang="less">
    .goodsDesContainer{
        .title{
            font-size: 16px;
            color:blue;
            text-align: center;
            margin-top: 15px
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>
