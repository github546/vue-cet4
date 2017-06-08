<template>
	<div id="index">
		<headerMd title="CET-4" show="y"></headerMd>
        <leftMenu v-show="$store.state.leftmenuShow"></leftMenu>
        <face></face>
        <div class="more"></div>
        <speed class="animated pulse" @click.native="go([$router,'plan'])"></speed>
        <!--底部按钮-->
        <div class="doubleBtn bottomBtn">
            <div class="btnLeft bg-green" @click="go([$router,'plan'])">继续计划</div>
            <div class="btnRight bg-orange" @click="go([$router,'revisebegin'])">复习加经验</div>
        </div>
	</div>
</template>

<script>
import { mapState,mapGetters,mapMutations } from 'vuex'
import headerMd from '../components/HeaderMd.vue'
import leftMenu from '../components/LeftMenu.vue'
import face from '../components/Face.vue'
import speed from '../components/Speed.vue'
export default{
    name:'index',
    components:{ headerMd,leftMenu,face,speed},
    computed:{
        ...mapGetters([
            'stime'
        ])
    },
    methods:{
        ...mapMutations([
            'go'
        ])
    }
    // mounted:function(){//生命周期里的一个方法
    //     //用同步的ajax方法获取和服务器交换了一下数据，赋值给state
    //     if(this.$parent.come == 0){
    //         this.$parent.come =+1;
    //         //console.log(this.$parent.come)
    //     }else{//第一次进首页不执行
    //         //重写读取
    //         var state,xmlhttp;
    //         xmlhttp = new XMLHttpRequest();
    //         xmlhttp.onreadystatechange = function(){
    //             if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
    //                 state = eval('('+ xmlhttp.responseText +')')
    //             }else{
    //                 //处理错误
    //             }
    //         }
    //         xmlhttp.open("Get",'http://'+ this.$store.state.serverIP + '/json/users.php?date='+this.stime,false);//①如果经常刷新首页，服务器cup压力就比较大，需要传个时间函数传给后端的服务器判断，比如?time=，几分钟后再来访问；②url传个date值，减少缓存，使服务器获取时间值之后几秒钟刷新一下或者其他
    //         xmlhttp.send();
    //         this.$store.state.percent = state.percent;
    //     }
    // }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#index{min-height: 100%;}
.more{width: 36px;height: 11px;background: url(../../static/images/more.png) no-repeat;background-size: 36px 11px;margin:10px auto;}
.doubleBtn{
    width: 80%;margin:15px auto;height:35px;left: 10%;
    div{
        display: inline-block;
        width: 50%;
        float: left;
        height: 35px;
        line-height: 35px;
        text-align: center;
        letter-spacing: 1px;
        color: @white;
        font-size: @font-size-normal;
    }
    .btnLeft{
       border-top-left-radius: @border-radius-lg;
       border-bottom-left-radius: @border-radius-lg;
    }
    .btnRight{
        border-top-right-radius: @border-radius-lg;
        border-bottom-right-radius: @border-radius-lg;
    }
}
</style>
