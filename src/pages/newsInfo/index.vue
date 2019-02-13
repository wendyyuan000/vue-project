<template>
    <div class="newsInfoContainer">
        <!-- 头部 -->
        <h1 class="title">{{newsInfo.title}}</h1>
        <p class="subtitle">
            <span>发表时间:{{newsInfo.add_time | dateFormat}}</span>
            <span>点击{{newsInfo.click}}次</span>
        </p>
        <hr>
        <!-- 内容 -->
        <div class="content" v-html="newsInfo.content"></div>
        <!-- 评论 -->
        <comment :infoId="id"></comment>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            newsInfo:{}
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo(){
            this.$http.get('api/getnew/'+this.id).then(result=>{
                console.log(result);
                this.newsInfo = result.body.message[0]
            })
        }
    },
}
</script>

<style lang="less">
// scoped 的作用:限制样式的作用域,改样式只在当前组件中生效
//原理:给该页面的标签(不包括v-html等渲染的标签)添加一个唯一标识属性,防止样式和其他组件的冲突
    .newsInfoContainer{
        
        .title{
            font-size: 14px;
            text-align: center;
            color: red;
            margin: 10px 0
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            color:blue;
            font-size: 12px
        }
        .content{
            img{
                width: 100%;
                height: 50%;
            }
        }
    }
</style>
