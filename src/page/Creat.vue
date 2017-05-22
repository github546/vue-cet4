<template>
	<div id="creat">
		<div @click="goIndex">this is creat</div>
	</div>
</template>

<script>
export default{
	name:'creat',
	methods:{
		goIndex:function(){
			this.$router.push({path:'/'})
		}
	}
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";	
#creat{color:@white;background-color: @orange;width: 100%;height: 400px;}
</style>