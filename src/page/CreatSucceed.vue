<template>
    <div id="creatSucceed">
        <HeaderMd title="CET-4" show="n"></HeaderMd>
        <p class="succeed">注册成功</p>
        <p class="yjz"><span>+{{jyzNum}}</span>经验值</p>
        <BottomBtn @click.native="toIndex"  value="查看计划" color="bg-orange"></BottomBtn>
    </div>
</template>

<script>
import HeaderMd from '../components/HeaderMd.vue'
import BottomBtn from '../components/BottomBtn.vue'
export default{
    name:'creatSucceed',
    data(){
        return{
            jyzNum:'600'
        }
    },
    components:{ HeaderMd,BottomBtn },
    methods:{
        toIndex:function(){
            this.$router.push({path:'/index'})
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
.succeed{color:@gray-dark;text-align: center;font-size:@font-size-lg;padding:100px 0 10px;}
.yjz{
    color:@gray;font-size:@font-size-sm;text-align: center;padding-bottom: 100px;
    span{
        color:@orange;
    }
}
</style>
