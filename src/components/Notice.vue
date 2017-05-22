<template>
    <div id="notice">
        <span>{{noticeNum}}</span>
    </div>
</template>

<script>
export default{
    name:'notice',
    computed:{
        noticeNum:function(){
            if(this.$store.state.notice>99){
                return 99
            }else{
                return this.$store.state.notice
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#notice{display: inline-block;padding:0 5px;height: 15px;background-color: @orange;color: @white;font-size:50%;border-radius: @border-radius-lg; text-align: center;line-height: 15px;position: absolute;right:-28px;top:13px;}
</style>
