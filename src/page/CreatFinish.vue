<template>
    <div id="creatFinish">
        <headerLg bigtitle="CET-4" notetitle="四级单词记忆管理"></headerLg>
        <div class="padding-md">
            <h2>姓名</h2>
            <input v-model="name" type="text" name="" placeholder="建议输入真实姓名，方便好友找到你">
            <h2>联系电话</h2>
            <input v-model="mobile" type="text" name="" placeholder="(必填)请输入标准的11位手机号码" onkeyup="this.value = this.value.replace(/\D/g,'')" maxlength="11">
            <h2>性别</h2>
            <div class="sexBox">
                <div class="radioSm selected" id="data-1" @click="sexSelect('data-1')"><span>男</span></div>
                <div class="radioSm" id="data-0" @click="sexSelect('data-0')"><span>女</span></div>
            </div>
        </div>
        <bottomBtn @click.native="toCreatSucceed"  value="完成注册" color="bg-orange"></bottomBtn>
    </div>
</template>

<script>
// import Vue from 'vue'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
import headerLg from '../components/HeaderLg.vue'
import bottomBtn from '../components/BottomBtn.vue'
export default{
    name:'creatFinish',
    data(){
        return{
            name:'wyz',
            mobile:'18759911058',
            sex:'1'
        }
    },
    components:{ headerLg,bottomBtn },
    methods:{
        toCreatSucceed:function(){
            var that = this
            if(that.name.length > 0 && that.mobile.length > 0)
            {
                // var formData = new FormData()
                // formData.append('name',that.name)
                // formData.append('mobile',that.mobile)
                // formData.append('sex',that.sex)
                // formData.append('examTime',that.$parent.examTime)
                // formData.append('preExamDay',that.$parent.preExamDay)
                // that.$http.post('http://'+ that.$store.state.serverIP +'/json/post_register.php',formData).then(function(response){
                //     if(response.data == 1){
                //         that.$router.push({path:'/creatsucceed'})
                //     }
                // },function(data){
                //     that.$router.push({path:'/errorpage'})
                // })
                that.axios.post('/json/post_register.php',{
                    name:that.name,
                    mobile:that.mobile,
                    sex:that.sex,
                    examTime:that.examTime,
                    preExamDay:that.preExamDay
                }).then(function(response){
                    if(response.data == 1){
                        that.$store.state.xp = parseInt(that.$store.state.xp) + 600//注册成功加600经验值
                        that.$router.push({path:'/creatsucceed'})
                    }
                },function(data){
                    that.$router.push({path:'/errorpage'})
                })
            }
        },
        sexSelect:function(id){
            var obj = document.getElementsByClassName("radioSm")
            for(var i=0;i<obj.length;i++){
                obj[i].setAttribute("class","radioSm");
            }
            document.getElementById(id).setAttribute("class","radioSm selected");
            this.sex = id.replace(/data-/g,'');
            //console.log(this.sex)
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#creatFinish{height: 100%;}
h2{font-size:@font-size-normal;font-weight: 600;padding:10px 0;}
input{border:0;outline: none;border-radius: @border-radius-sm;border-bottom: 1px solid @gray-lighter;font-size:@font-size-sm;height:30px;width:100%;color:@gray-dark;}
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
        background-color: @turquoise;color:@white;
    }
}
</style>
