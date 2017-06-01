<template>
    <div id="nav-btn" class="nav-btn" v-bind:class="[size,{selected:isSelected}]">
        <div class="con">{{time}}</div>
    </div>
</template>

<script>
export default{
    name:'nav-btn',
    props:['time','isSelected','size']
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
.nav-btn{background-color: #f4f4f4;border:1px solid #ccc;text-align: center;display:inline-block;}
.con{color:@black;font-size:90%;text-align: center;margin: 5px auto;}
.selected{border:1px solid @green;}
.selected .con{color:@white;background-color:@green;}

.time-size{width: 110px;height: 110px;margin:10px 20px 10px 0;}
.time-size .con{width:100px;height:100px;line-height: 100px;}

.day-size{width:70px;height:50px;margin:20px 15px 15px 0;}
.day-size .con{width:60px;height:40px;line-height: 40px;}
.day-size.selected{border:1px solid @turquoise;}
.day-size.selected .con{background-color: @turquoise;}
</style>
