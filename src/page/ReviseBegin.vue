<template>
    <div id="reviseBegin">
        <face class="face"></face>
        <div class="textBox">
        	<p class="tit">复习的规则：</p>
        	<p class="text-indent js">单词记忆是有一定的遗忘曲线，通过复习征服自己的遗忘曲线。</p>
        	<p>1、如果正确，将获得1点经验；</p>
        	<p>2、如果错误，将被扣除2点经验；</p>
        	<p>3、如果一个单词3次以上连续错误，该单词将移到任务区，进行重新考核。</p>
        	<p class="text-align-center sm">你需要足够的经验才能启动计划</p>
        	<label for="checkbox" class="checkbox"><input type="checkbox" id="checkbox" name="" v-model="readReviseRule">以后不再提示</label>
        </div>
        <bottomBtn @click.native="go([$router,'revise'])"  value="开始吧" color="bg-orange"></bottomBtn>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import face from '../components/Face.vue'
import bottomBtn from '../components/BottomBtn.vue'
export default{
    name:'reviseBegin',
    components:{face,bottomBtn},
    data(){
    	return{
    		readReviseRule:true
    	}
    },
    methods:{
    	...mapMutations([
			'go'
		])
    },
    watch:{
    	readReviseRule:function(newval){
    		console.log(newval)
    		var formData = new FormData();
    		if(newval == true){
    			formData.append("readReviseRule",1)
    		}else{
    			formData.append("readReviseRule",0)
    		}
    		this.$http.post('http://'+ this.$store.state.serverIP + '/json/updateuser.php',formData).then(function(response){
    				if(response.data == 0){
                        that.$router.push({path:'/errorpage'})
                    }
                },function(data){
                    this.$router.push({path:'/errorpage'})
                })
    	}
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#reviseBegin{background-color: @bg-gray-color;padding: 10px;}
.face{margin-bottom: 10px;}
.textBox{
	background-color: @white;
	border-radius: 2px;
	color:@gray-dark;
	font-size: @font-size-normal;
	padding: 10px;
	.tit{
		font-size:@font-size-lg;
		padding:15px 0;
	}
	.js{margin-bottom: 15px;}
	.sm{font-size:110%;padding:15px 0 50px;}
	.checkbox{
		display: block;font-size: @font-size-sm;padding-bottom:10px;
		input{margin-right: 3px;vertical-align: text-top;}
	}
}
</style>
