<template>
    <div id="creatSelect"  v-title data-title="选择考试时间">
        <div class="padding-md">
            <h2>请选择考试时间</h2>
            <p class="noteTit">大学英语四级考试（CET-4）的考试时间定于每年6月和12月的第三个星期六</p>
            <div class="select-other-time" @click="toggle">选择其他的考试时间</div>
            <ul class="timeList">
                <li>
                    <p class="year">2017年</p>
                    <div class="month">
                        <div class="radioLg selected" id="data-2017-6-17" @click="examTimeSelect('data-2017-6-17')"><span>6月17日</span></div>
                        <div class="radioLg" id="data-2017-12-18" @click="examTimeSelect('data-2017-12-18')"><span>12月18日</span></div>
                    </div>
                </li>
                <li v-show="radioMore">
                    <p class="year">2018年</p>
                    <div class="month">
                        <div class="radioLg" id="data-2018-6-17" @click="examTimeSelect('data-2018-6-17')"><span>6月17日</span></div>
                        <div class="radioLg" id="data-2018-12-18" @click="examTimeSelect('data-2018-12-18')"><span>12月18日</span></div>
                    </div>
                </li>
                <li v-show="radioMore">
                    <p class="year">2019年</p>
                    <div class="month">
                        <div class="radioLg" id="data-2019-6-17" @click="examTimeSelect('data-2019-6-17')"><span>6月17日</span></div>
                        <div class="radioLg" id="data-2019-12-18" @click="examTimeSelect('data-2019-12-18')"><span>12月18日</span></div>
                    </div>
                </li>
            </ul>
            <h3>预备考试时间</h3>
            <p class="smtit">设置考试前多少天完成计划</p>
            <div class="syDay">
                <div class="radioSm" id="data-90" @click="preExamDaySelect('data-90')"><span>90天</span></div>
                <div class="radioSm" id="data-60" @click="preExamDaySelect('data-60')"><span>60天</span></div>
                <div class="radioSm selected" id="data-30" @click="preExamDaySelect('data-30')"><span>30天</span></div>
            </div>
            <bottomBtn @click.native="go([$router,'creatfinish'])"  value="开始吧" color="bg-orange"></bottomBtn>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import bottomBtn from '../components/BottomBtn.vue'
export default{
    name:'creatSelect',
    data(){
        return{
            radioMore:false
        }
    },
    components:{ bottomBtn },
    methods:{
        ...mapMutations([
            'go'
        ]),
        // toCreatFinish:function(){
        //     this.$router.push({path:'/creatfinish'})
        // },
        examTimeSelect:function(id){
            var obj = document.getElementsByClassName("radioLg")
            for(var i=0;i<obj.length;i++){
                obj[i].setAttribute("class","radioLg");
            }
            document.getElementById(id).setAttribute("class","radioLg selected");
            this.$parent.examTime = id.replace(/data-/g,'');
            // console.log(this.$parent.examTime)
        },
        preExamDaySelect:function(id){
            var obj = document.getElementsByClassName("radioSm")
            for(var i=0;i<obj.length;i++){
                obj[i].setAttribute("class","radioSm");
            }
            document.getElementById(id).setAttribute("class","radioSm selected");
            this.$parent.preExamDay = id.replace(/data-/g,'');
            // console.log(this.$parent.preExamDay)
        },
        toggle:function(){
            this.radioMore = !this.radioMore;
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#creatSelect{background:url(../../static/images/tartan.png) repeat;background-size:100px 100px;height:100%;}
h2{color:@black;font-size:@font-size-md;font-weight: bold;padding:10px 0 12px;}
.noteTit{color:@gray-light;font-size:80%;}
.select-other-time,.smtit{color:@gray-light;font-size:@font-size-sm;}
.select-other-time{margin-top:30px;}
.year,h3{color:@black;font-size:@font-size-normal;font-weight:600;padding:10px 0;}
.radioLg{
    background-color:@gray-lighter;
    border:1px solid @gray-border;
    text-align: center;
    display:inline-block;
    width: 110px;
    height: 110px;
    margin:10px 20px 10px 0;
    span{
        color:@black;
        font-size:90%;
        width:100px;
        height:100px;
        line-height: 100px;
        text-align: center;
        margin: 5px auto;
        display: inline-block;
    }
}
.radioLg.selected{border:1px solid @green;}
.selected span{color:@white;background-color:@green;}

.radioSm{
    background-color:@gray-lighter;
    border:1px solid @gray-border;
    text-align: center;
    display:inline-block;
    width:70px;height:50px;
    margin:20px 15px 15px 0;
    display: inline-block;
    span{color:@black;font-size:90%;width:60px;height:40px;line-height: 40px;text-align: center;margin: 5px auto;display: inline-block;}
}
.radioSm.selected{
    border:1px solid @turquoise;
    span{
        background-color: @turquoise;
    }
}
</style>
