<template>
    <div id="plan" class="padding-md">
        <div class="firstIn" v-show="firstInShow" v-if="show">
            <p class="p1">学习模式</p>
            <p class="p2">单词会自动播放</p>
            <p class="p3">请用心记忆</p>
            <p class="p4" @click="closeFirstIn">GO</p>
        </div>
        <p class="planJd"><span>{{curnum}}</span>/{{allnum}}</p>
        <div class="formBox">
            <p class="form">{{nform}}</p>
            <p class="meaning">n. {{nmeaning}}</p>
        </div>
        <div class="musicBox">
            <span>学习模式</span>
            <img src="../../static/images/sound.png" @click="play">
            <audio id="music">
                <source :src="nsrc" type="audio/mp3">
           </audio>
        </div>
    </div>
</template>

<script>
export default{
    name:'plan',
    data(){
        return{
            show:true,
            nform:'',
            nmeaning:'',
            nsrc:'',
            curnum:'0',
            allnum:this.$store.state.oneday
        }
    },
    computed:{
        firstInShow:function(){
            if(this.$store.state.readPlan == 0){
                return true
            }else{
                //this.$store.state.readPlan = 1;
                return false
            }
        },
    },
    methods:{
        closeFirstIn:function(){
            this.show = false;
        },
        getForm:function(){
            var state,xmlhttp;
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function(){
                if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
                    state = eval('('+ xmlhttp.responseText +')')
                }else{
                    //处理错误
                    state={form:'',meaning:''}
                }
            }
            xmlhttp.open("Get",'http://'+ this.$store.state.serverIP + '/json/revise.php',false);
            xmlhttp.send();
            this.nform = state.form
            this.nmeaning = state.meaning
            this.nsrc = 'http://'+ this.$store.state.serverIP + '/sound/'+state.form+'.mp3'
            if(this.curnum > 0){
                this.play()
            }
            this.curnum ++
        },
        play:function(){
            var music = document.getElementById('music');
            music.currentTime = 0;
            music.play();
        }
    },
    watch:{
        curnum:function(newval,oldval){
            if(newval <= this.allnum){
                setTimeout(()=>{
                    this.getForm();
                },5000)
            }else{
                setTimeout(()=>{
                    this.$router.push({path:'/index'})
                },5000)
            }
        }
    },
    mounted:function(){
        this.getForm();
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
.planJd{
    width: 100%;text-align:right;color:@gray-light;
    span{
        font-size: @font-size-lg;padding-right: 3px;
    }
}
.formBox{
    padding:70px 10px;
    .form{
        color: #E61D39;
        font-size:300%;
        padding-bottom:15px;
    }
    .meaning{
        font-size: @font-size-sm;
        color:@gray;
    }
}
.musicBox{
    width:90%;position: fixed;bottom:10px;left:5%;
    span{
        float:left;
        display: inline-block;
        margin-top: 40px;
        font-size: @font-size-normal;
        color:@gray-dark;
    }
    img{float:right;}
}
.firstIn{
    color: @white;text-align:center;
    width:100%;
    height:100%;
    position:fixed;
    z-index: 80;
    top: 0;
    left: 0;
    background: @gray-dark;
    .p1{padding-top:50px;font-size: @font-size-normal;}
    .p2{padding-top:10px;font-size: @font-size-lg;}
    .p3{padding-top:10px;font-size: @font-size-md;}
    .p4{padding-top:180px;font-size: @font-size-md;}
}
</style>
