<template>
    <div class="commentContainer">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入要bb的内容(最多120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表 评论</mt-button>
        <ul>
            <li v-for="(item,index) in comments" :key="index">
                <p class="user">第{{index+1}}楼用户:匿名用户 发表时间:{{item.add_time | dateFormat}}</p>
                <p class="content">{{item.content}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            comments:[]
        }
    },
    props:['infoId'],
    created(){
        this.getComment()
    },
    methods: {
        getComment(){
            this.$http.get('api/getcomments/'+this.infoId+'?pageindex=1').then(result=>{
                console.log(result)
                this.comments = result.body.message
            })
        }
    },
}
</script>

<style lang="less" scoped>
    .commentContainer{
        h1{
            font-size: 18px;
            color: black
        }
        textarea{
            margin-bottom: 0
        }
        ul{
            .user{
            background-color: #ccc;
            color: black;
            margin: 5px 0
        }
            .content{
                color: black
            }
        }
    }
</style>
