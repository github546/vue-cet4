<template>
	<div id="index">
		<div @click="toCreat">this is index</div>
	</div>
</template>

<script>
export default{
	name:'index',
	methods:{
		toCreat:function(){
			this.$router.push({path:'/creat'})
		}
	}
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#index{color:@white;background-color: @green;width: 100%;height: 400px;}
</style>
