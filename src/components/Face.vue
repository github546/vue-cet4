<template>
    <div id="face" class="padding-sm">
        <div class="left-img">
            <img src="../../static/images/headimg.jpg">
        </div>
        <div class="right-info">
            <p class="name">
                <span class="ell">{{$store.state.name}}</span>
                <notice v-show="noticeIsShow"></notice>
            </p>
            <p class="other">记忆力：<span class="color-orange">{{$store.state.memory}}</span>&#12288;经验值：<span class="color-green">{{$store.state.xp}}</span></p>
        </div>
    </div>
</template>

<script>
import notice from './Notice.vue'
export default{
    name:'face',
    components:{notice},
    computed:{
        noticeIsShow:function(){
            if(this.$store.state.notice>0){
                return true
            }else{
                return false
            }
        },
        showName:function(){ //用js控制名字超出5个字符用...代替,上面已用css样式处理，这是只是写个方法做个说明
            var showname = this.$store.state.name
            if(showname.length>5){
                showname = showname.substring(0,5)+'...'
            }
            return showname
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#face{background-color: @white;}
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
        color:@gray-dark;
        padding:5px 0;
        display: inline-block;
        position: relative;
        .ell{
            font-size: 160%;
            display: inline-block;
            max-width: 175px;
        }
    }
    .other{
        font-size:@font-size-sm;
        color:@gray;
    }
}
</style>
