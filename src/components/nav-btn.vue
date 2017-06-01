<template>
    <div id="nav-btn">
        <div class="btn text-align-center">{{btnvalue}}</div>
    </div>
</template>

<script>
export default{
    name:'nav-btn',
    props:['btnvalue']
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
.btn{
    color: @white;width:86%;display: block;margin: 0 auto;height:40px;line-height: 40px;border-radius: 30px;background: @orange;
    font-size: 100%;box-shadow:0 2px #e2e2e2;position: fixed;bottom: 10px;left:7%;
}
</style>
