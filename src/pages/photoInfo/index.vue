<template>
    <div class="photoInfoContainer">
        <!-- 头部 -->
        <div class="head">
            <h1 class="title">{{info.title}}</h1>
            <div class="subtitle">
                <span>发表时间:{{info.add_time | dateFormat}}</span>
                <span>点击{{info.click}}次</span>
            </div>
        </div>
        <!-- 预览图片 1.下载插件 npm i vue-pic-preview -S
        2.使用vue-cli生成的项目可能需要你修改webpack.base.conf.js文件中的loaders
         {
            test: /vue-preview.src.*?js$/,
            loader: 'babel'
         } 
         3. 在main.js中引入和安装插件
            import VuePreview from 'vue-pic-preview'
            Vue.use(VuePreview)
         4.<img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)">
         这里注意要在得到的数据中设置宽,高-->
        <div class="preview">
            <img class="preview-img" 
                 v-for="(item, index) in previewList" 
                 :src="item.src" height="100" 
                 @click="$preview.open(index, previewList)">   <!-- 这里记住将index后面的参数改为previewList -->
        </div>

        <!-- 内容区域 -->
        <div class="content" v-html="info.content"></div>

        <!-- 评论 -->
        <comment :infoId="id"></comment>
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            info:{},
            previewList:[]
        }
    },
    created() {
        this.getphotoInfo()
        this.getPreviewList()
    },
    methods: {
        getphotoInfo(){
            this.$http.get('api/getimageInfo/'+this.id).then(result=>{
                // console.log(result)
                this.info = result.body.message[0]
            })
        },
        getPreviewList(){
            this.$http.get('api/getthumimages/'+this.id).then(result=>{
                console.log(result)
                result.body.message.forEach(item=>{
                    item.w = 600
                    item.h = 400
                })
                this.previewList = result.body.message
                console.log(this.previewList)
            })
        }
    },
}
</script>

<style lang="less">
    .photoInfoContainer{
        .head{
            .title{
                font-size: 14px;
                text-align: center;
                color: blue
            }
            .subtitle{
                font-size: 13px;
                display: flex;
                justify-content: space-between
            }
        }
        .content{
            font-size: 13px;
            line-height: 30px
        }
        .preview{
            padding: 5px;
            .preview-img{
                padding: 0 5px;
                width: 50%;
                box-sizing: border-box;
                box-shadow: 0,0,5px,#999
            }
        }
    }
</style>