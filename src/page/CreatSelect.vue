<template>
    <div id="creatSelect">
        <div class="padding-md">
            <h2>请选择考试时间</h2>
            <p class="noteTit">大学英语四级考试（CET-4）的考试时间定于每年6月和12月的第三个星期六</p>
            <div class="select-other-time">选择其他的考试时间</div>
            <ul class="timeList">
                <li>
                    <p class="year">2017年</p>
                    <div class="month">
                        <NavBtn @click.native="selected" :isSelected="isTrue" time="6月17日" size="time-size"></NavBtn>
                        <NavBtn time="12月18日" isSelected="" size="time-size"></NavBtn>
                    </div>
                </li>
            </ul>
            <h3>预备考试时间</h3>
            <p class="smtit">设置考试前多少天完成计划</p>
            <div>
                <NavBtn time="90天" isSelected="true" size="day-size"></NavBtn>
                <NavBtn time="60天" isSelected="" size="day-size"></NavBtn>
                <NavBtn time="30天" isSelected="" size="day-size"></NavBtn>
            </div>
            <BottomBtn @click.native="goCreatSelect"  value="开始吧" color="bg-orange" class="bottomBtn"></BottomBtn>
        </div>
    </div>
</template>

<script>
import BottomBtn from '../components/bottom-btn.vue'
import NavBtn from '../components/nav-btn.vue'
export default{
    name:'creatSelect',
    data(){
        return{
            isTrue:'true'
        }
    },
    components:{ BottomBtn,NavBtn },
    methods:{
        goCreatSelect:function(){
            this.$router.push({path:'/creatselect'})
        },
        selected:function(){
            this.isTrue = !this.isTrue;
            console.log(this.isTrue);
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#creatSelect{background:url(../../static/images/tartan.png) repeat;background-size:100px 100px;}
h2{color:@black;font-size:@font-size-md;font-weight: bold;padding:10px 0 12px;}
.noteTit{color:@gray-light;font-size:80%;}
.select-other-time,.smtit{color:@gray-light;font-size:@font-size-sm;}
.select-other-time{margin-top:30px;}
.year,h3{color:@black;font-size:90%;font-weight:600;padding:10px 0;}
</style>
