<template>
    <div id="face" class="padding-sm">
        <div class="left-img">
            <img src="../../static/images/headimg.jpg">
        </div>
        <div class="right-info">
            <p class="name">{{$store.state.name}}</p>
            <p class="other">记忆力：<span class="color-orange">{{$store.state.memory}}</span>&#12288;经验值：<span class="color-green">{{$store.state.xp}}</span></p>
        </div>
    </div>
</template>

<script>
export default{
    name:'face'
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
.left-img{
    width: 60px;height:60px; display: inline-block;float: left;
    margin:5px 15px 5px 5px;
    background-color: @gray-lighter;
    img{
        width:52px;height:52px; display:block;margin:4px auto;
    }
}
.right-info{
    display:inline-block;
    .name{
        font-size: 180%;
        color:@gray-dark;
        padding:5px 0;
    }
    .other{
        font-size:@font-size-sm;
        color:@gray;
    }
}
</style>
