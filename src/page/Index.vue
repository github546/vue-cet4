<template>
	<div id="index">
		<HeaderMd title="CET-4" show="y"></HeaderMd>
        <LeftMenu v-show="$store.state.leftmenuShow"></LeftMenu>
        <Face></Face>
	</div>
</template>

<script>
import HeaderMd from '../components/HeaderMd.vue'
import LeftMenu from '../components/LeftMenu.vue'
import Face from '../components/Face.vue'
export default{
    name:'index',
    components:{ HeaderMd,LeftMenu,Face},
    methods:{
        toIndex:function(){
            this.$router.push({path:'/index'})
        }
    }
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";

</style>
