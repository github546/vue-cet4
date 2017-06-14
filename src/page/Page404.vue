<template>
    <div id="page404" v-title data-title="404页面">
        <h2>404</h2>
    </div>
</template>

<script>
export default{
    name:'page404'
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#page404{height: 100%;}
#page404 h2{color:@green;text-align: center;font-size:400%;padding:100px 0;}
</style>
