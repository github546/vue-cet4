<template>
    <div id="leftMenu">
        <div class="menu">
            <h2 class="text-align-center">CET-4</h2>
            <h3 class="text-align-center">四级单词记忆管理</h3>
        </div>
       <div class="shade" @click="closeLeftMenu"></div>
    </div>
</template>

<script>
export default{
    name:'leftMenu',
    methods:{
        closeLeftMenu:function(){
            this.$store.state.leftmenuShow = false
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
.menu{
    z-index:100;width:70%;height:100%;
    position: fixed;top: 0;left: 0;
    background-color:@gray-dark;
    h2{
        font-size:300%;
        color: @white;
        padding-top:30px;
    }
    h3{
        font-size: @font-size-md;
        color: @white;
    }
}
.shade{
    z-index: 99;width:100%;height:100%;
    position: fixed;top: 0;left: 0;
    background-color:rgba(0,0,0,.2);
}
</style>

