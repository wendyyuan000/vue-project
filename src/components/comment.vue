<template>
    <div class="commentContainer">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入要bb的内容(最多120字)" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表 评论</mt-button>
        <ul>
            <li>
                <p class="user">第1楼用户:匿名用户 发表时间:2018-2-3 16:23:43</p>
                <p class="content">什么鬼</p>
            </li>
            <li>
                <p class="user">第1楼用户:匿名用户 发表时间:2018-2-3 16:23:43</p>
                <p class="content">什么鬼</p>
            </li>
            <li>
                <p class="user">第1楼用户:匿名用户 发表时间:2018-2-3 16:23:43</p>
                <p class="content">什么鬼</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
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
