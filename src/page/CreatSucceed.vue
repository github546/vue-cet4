<template>
    <div id="creatSucceed">
        <HeaderLg bigtitle="CET-4" notetitle=""></HeaderLg>
        <p>注册成功</p>
        <BottomBtn @click.native="toIndex"  value="完成" color="bg-orange"></BottomBtn>
    </div>
</template>

<script>
import HeaderLg from '../components/header-bg.vue'
import BottomBtn from '../components/bottom-btn.vue'
export default{
    name:'creatSucceed',
    components:{ HeaderLg,BottomBtn },
    methods:{
        toIndex:function(){
            this.$router.push({path:'/index'})
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
p{color:@gray-dark;text-align: center;font-size:@font-size-lg;padding:100px 0;}
</style>
