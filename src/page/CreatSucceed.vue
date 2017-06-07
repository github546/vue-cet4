<template>
    <div id="creatSucceed">
        <headerMd title="CET-4" show="n"></headerMd>
        <p class="succeed">注册成功</p>
        <p class="yjz"><span>+{{jyzNum}}</span>经验值</p>
        <bottomBtn @click.native="go([$router,'index'])"  value="查看计划" color="bg-orange"></bottomBtn>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import headerMd from '../components/HeaderMd.vue'
import bottomBtn from '../components/BottomBtn.vue'
export default{
    name:'creatSucceed',
    data(){
        return{
            jyzNum:'600'
        }
    },
    components:{ headerMd,bottomBtn },
    methods:{
        ...mapMutations([
            'go'
        ])
        // toIndex:function(){
        //     this.$router.push({path:'/index'}) //路由跳转vuex是不刷新的
        // }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#creatSucceed{height:100%;}
.succeed{color:@gray-dark;text-align: center;font-size:@font-size-lg;padding:100px 0 10px;}
.yjz{
    color:@gray;font-size:@font-size-sm;text-align: center;padding-bottom: 100px;
    span{
        color:@orange;
    }
}
</style>
