<template>
    <div id="plan" class="padding-md">
        <div class="firstIn" v-if="show">
            <p class="p1">学习模式</p>
            <p class="p2">单词会自动播放</p>
            <p class="p3">请用心记忆</p>
            <p class="p4" @click="beginStudy">GO</p>
        </div>
        <p class="planJd"><span>{{curnum}}</span>/{{allnum}}</p>
        <div class="formBox">
            <p class="form">{{nform}}</p>
            <p class="ipa"><em>[{{nipa}}]</em></p>
            <p class="meaning">{{nmeaning}}</p>
        </div>
        <div class="musicBox">
            <span>学习模式<i>（请勿操作）</i></span>
            <img src="../../static/images/sound.png" @click="">
            <audio id="music" autoplay="true">
                <source src="" type="audio/mp3">
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
            nipa:'',
            nmeaning:'',
            curnum:1,
            allnum:12,
            forms:[],
            playnum:0
        }
    },
    methods:{
        beginStudy:function(){
            this.show = false;
            this.playRepeat();//开始学习
        },
        getForm:function(){
            this.$http.get('http://'+ this.$store.state.serverIP + '/json/plan.php').then(function(response){
                //if(response.data == 1){
                    var formsTemp = eval(response.data)
                    for(var i in formsTemp){
                        this.forms.push(formsTemp[i])
                    }
                    this.$store.state.planForm=this.forms;
                    // this.allnum=this.forms.length
                    this.allnum =2;
                //}
            },function(data){
                this.$router.push({path:'/errorpage'})
            })
        },
        playRepeat:function(){
            this.nform = this.forms[this.curnum-1].form;
            this.nipa = this.forms[this.curnum-1].ipa;
            this.nmeaning = this.forms[this.curnum-1].meaning;

            var music = document.getElementById('music');
            music.src = 'http://'+ this.$store.state.serverIP + '/sound/'+ this.nform +'.mp3';
            //console.log(music.ended)
            setInterval(()=>{
                if(this.playnum < 2 && music.ended == true){
                    music.play();
                    this.playnum ++;
                }
            },1000)
        }
    },
    beforeMount:function(){
        this.forms=[]
    },
    mounted:function(){
        this.getForm();
    },
    watch:{
        playnum:function(newval){
            if(newval == 2){
                setTimeout(()=>{
                    if(this.curnum < this.allnum){
                        this.curnum++;
                        this.playRepeat();
                        this.playnum=0
                    }else{
                        this.$router.push({path:'/planshow'})
                    }
                },5000);
            }
        }
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
    .ipa{
        padding-bottom: 10px;
        color:@gray-light;
        em{
            font-style: italic;
        }
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
        i{
            font-size: @font-size-sm;
            color:@orange;
        }
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
