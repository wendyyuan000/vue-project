<template>
    <div class="commentContainer">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入要bb的内容(最多120字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表 评论</mt-button>
        <ul>
            <li v-for="(item,index) in comments" :key="index">
                <p class="user">第{{index+1}}楼用户:匿名用户 发表时间:{{item.add_time | dateFormat}}</p>
                <p class="content">{{item.content}}</p>
            </li>
        </ul>
        <mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            comments:[],
            pageindex:1,
            msg:''  //双向数据绑定
        }
    },
    props:['infoId'],
    created(){
        this.getComment()
    },
    methods: {
        getComment(){
            this.$http.get('api/getcomments/'+this.infoId+'?pageindex='+this.pageindex).then(result=>{
                console.log(result)
                // this.comments = result.body.message
                this.comments = this.comments.concat(result.body.message)
            })
        },
        getmore(){
            this.pageindex++
            this.getComment()
        },
        postComment(){
            // 校验评论内容是否为空
            if(this.msg.trim().length ===0) return Toast('评论内容不能为空')
            //发送请求将评论提交给服务器
            this.$http.post('api/postcomment/'+this.infoId,{content:this.msg}).then(result=>{
                console.log(result)
                Toast(result.body.message)
                // 方法一
                this.comments = [] //清空数据
                this.pageindex = 1  //重置pageindex
                this.getComment()
                this.msg = '' //清空评论内容
                //方法二 拼接内容
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
