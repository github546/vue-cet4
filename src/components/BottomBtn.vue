<template>
    <div id="bottomBtn" class="bottomBtn animated pulse">
        <button class="btn" :class="className">{{value}}</button>
    </div>
</template>

<script>
export default{
    name:'bottomBtn',
    props:['value','color'],
    computed:{
        className:function(){
            if(this.color == 'bg-orange'){
                return this.className='bg-orange'
            }else if(this.color == 'bg-green'){
                return this.className='bg-green'
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#bottomBtn{width:100%;  background:rgba(255,255,255,.8); background:url(../../static/images/opacity.png) repeat; }
.btn{
    color: @white;border-radius:@border-radius-md;font-size:@font-size-md;
    width:86%;display: block;margin:15px auto;height:40px;line-height: 40px;box-shadow:0 2px #e2e2e2;border:none;outline: none;text-align: center;letter-spacing:2px;
}
</style>
