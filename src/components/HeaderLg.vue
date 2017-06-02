<template>
    <div id="headerLg" class="padding-md">
        <h3>{{bigtitle}}</h3>
        <h4>{{notetitle}}</h4>
    </div>
</template>

<script>
export default{
    name:'headerLg',
    props:['bigtitle','notetitle']
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#headerLg{
    width:100%;
    height: 100px;
    box-shadow: 0 3px 6px #ddd;
    background: linear-gradient(270deg, @green 0%, @turquoise 100%);
}
h3{font-size: 250%;padding-top:15px;color:@white;}
h4{font-size: 100%;margin-top: -5px;padding-left: 3px;color:@black;}
</style>
