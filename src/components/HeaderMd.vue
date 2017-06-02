<template>
    <div id="headerMd">
        <h3>{{title}}</h3>
        <div v-show="moreshow" id="menu">
            <img src="../../static/images/menu.png" alt="三" @click="openLeftMenu">
        </div>
    </div>
</template>

<script>
export default{
    name:'headerMd',
    props:['title','show'],
    computed:{
        moreshow:function(){  //！！！不可以通过组件的属性传递真假值
            if(this.show == 'y')
            {
                return this.moreshow = true
            }else{
                return this.moreshow = false
            }
        }
    },
    methods:{
        openLeftMenu:function(){
            this.$store.state.leftmenuShow = true
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#headerMd{
    width:100%;
    height:45px;
    box-shadow: 0 3px 6px #ddd;position:relative;
    background: linear-gradient(270deg, @green 0%, @turquoise 100%);
}
h3{font-size:@font-size-lg;color:@white;padding:12px 0 0 10px}
#menu{
    width:15px;height:15px;position:absolute;right: 10px;top:14px;
    img{
        width:15px;height:15px;
    }
}
</style>
