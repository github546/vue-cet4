<template>
    <div id="reviseError">
        <p class="jyz">经验值{{$store.state.xp}}</p>
        <div class="errorBox">
        	<p class="errorForm">错误答案：{{errorForm}}</p>
        	<p class="rightForm">{{form}}</p>
        	<div class="meaning">
        		<p>n.</p>
        		<p>{{meaning}}</p>
        	</div>
        </div>
        <div class="color-green xpJian">-1</div>
        <!--底部按钮-->
        <div class="doubleBtn bottomBtn">
            <div class="btnLeft bg-gray" @click="go([$router,'index'])">返回首页</div>
            <div class="btnRight bg-orange" @click="go([$router,'revise'])">继续复习</div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default{
    name:'reviseError',
    data(){
    	return{
    		form:this.$route.query.form,
    		meaning:this.$route.query.meaning,
    		errorForm:this.$route.query.errorForm
    	}
    },
    methods:{
    	...mapMutations([
			'go'
		]),
		jsxp:function(){
			this.$store.state.xp=this.$store.state.xp-1
		}
    },
    mounted:function(){
    	this.jsxp();
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#reviseError{padding:15px;background:url(../../static/images/tartan.png) repeat;background-size:100px 100px;}
.jyz{
	font-size: @font-size-normal;
	height: 50px;
	line-height: 50px;
}
.errorBox{
	width: 80%;margin:40px auto;
	border:1px solid @gray-lighter;
	.errorForm{
		color: @white;
		font-size: @font-size-md;
		padding: 10px;
		background-color: #E61D39;
	}
	.rightForm{text-align: center;font-size:200%;color:#E61D39;padding:15px 0 0;}
	.meaning{
		padding: 15px;
		color:@gray;
		font-size: @font-size-sm; 
	}
}
.xpJian{font-size:300%;text-align: center;}
.doubleBtn{
    width: 80%;margin:15px auto;height:35px;left: 10%;
    div{
        display: inline-block;
        width: 50%;
        float: left;
        height: 35px;
        line-height: 35px;
        text-align: center;
        letter-spacing: 1px;
        color: @white;
        font-size: @font-size-normal;
        border-bottom:3px solid @gray-border;
    }
    .btnLeft{
    	color: @gray;
       border-top-left-radius: @border-radius-lg;
       border-bottom-left-radius: @border-radius-lg;
    }
    .btnRight{
        border-top-right-radius: @border-radius-lg;
        border-bottom-right-radius: @border-radius-lg;
    }
}
</style>
