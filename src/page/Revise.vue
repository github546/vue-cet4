<template>
    <div id="revise">
       <p class="jyz">经验值{{$store.state.xp}}<span v-if="xpShow" class="animated swing">+1</span></p>
       <p class="tit">请输入听到的单词</p>
       <input type="text" name="" :placeholder="form" class="formInp" v-model="writeForm">
       <p class="meaning">n. {{meaning}}</p>
       <audio id="music" autoplay="true">
       		<source :src="nsrc" type="audio/mp3">
       </audio>
       <img src="../../static/images/sound.png" class="soundImg" @click="play">
       <bottomBtn @click.native="check"  value="下一题" color="bg-green"></bottomBtn>
    </div>
</template>

<script>
import bottomBtn from '../components/BottomBtn.vue'
export default{
    name:'revise',
    components:{ bottomBtn },
    data(){
    	return{
    		form:'',
    		meaning:'',
    		nsrc:'',
    		writeForm:'',
    		xpShow:false,
    		reviseNum:'5'
    	}
    },
    methods:{
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
	        this.form = state.form
	        this.meaning = state.meaning
	        this.nsrc = 'http://'+ this.$store.state.serverIP + '/sound/'+state.form+'.mp3'
	        this.play()
	        this.reviseNum --;//当num=0时，任务完成跳回首页
	    },
	    play:function(){
	    	var music = document.getElementById('music');
	    	music.currentTime = 0;
	    	music.play();
	    },
	    check:function(){
	    	if(this.writeForm == this.form){
	    		this.xpShow= true;
	    		this.getForm();
	    		this.$store.state.xp = parseInt(this.$store.state.xp)+1;
	    		//post向后台加xp
	    		this.writeForm='';
	    		setInterval(() => {
                    this.xpShow= false;
	    		},2000)
	    	}else{
	    		//跳转到答题失败页面
	    		this.$router.push({path:'/reviseerror',query:{errorForm:this.writeForm,form:this.form,meaning:this.meaning}})
	    	}
	    }
    },
    watch:{
    	reviseNum:function(newval){
    		if(newval == 0){
    			this.$router.push({path:'/index'})
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
#revise{padding:0 15px;height:100%;}
.jyz{
	font-size: @font-size-normal;
	height: 50px;
	line-height: 50px;
	span{
		float: right;
		font-size:200%;
		font-weight: normal;
		color: @orange;
	}
}
.tit{
	padding:40px 0 30px;
	font-size: @font-size-lg;
}
.formInp{border: 0;height:40px;border-radius:3px;border-bottom: 1px solid @gray-border;width:98%;padding: 0 1%;color: @orange; font-size:@font-size-md;outline: none;letter-spacing: 1px;}
.meaning{font-size:@font-size-normal;color:@gray;padding: 20px 0; }
.soundImg{display: block;margin:30px auto;}
</style>
