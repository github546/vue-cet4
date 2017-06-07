<template>
	<div id="creat">
		<headerLg bigtitle="CET-4" notetitle="四级单词记忆管理"></headerLg>
        <div class="text-text padding-md">
            <p class="text-size-md">Hi,</p>
            <p class="text-indent">亲爱的你，距离大学英语四级（COLLEGE ENGLISH TEST 4/6）还有 356 天，根据考试大纲要求，你需要记忆 3441 个单词和 360 个短语。你每天需要记忆 12 个单词。让我帮你规划的记忆管理。</p>
            <p class="text-indent">当然你不会感觉到枯燥，养成式记忆办法，规划了单词的遗忘曲线，同时，你可以邀请更多的小伙伴一起参与，或加入更多社区。有趣的单词接龙，俚语猜猜看，作文漂流瓶，更多的活动和游戏，来吧！美哒哒的学英语。</p>
            <p class="text-align-right">会会</p>
        </div>
        <bottomBtn @click.native="go([$router,'creatselect'])"  value="创建计划" color="bg-orange"></bottomBtn>
	</div>
</template>

<script>
import { mapMutations } from 'vuex'
import headerLg from '../components/HeaderLg.vue'
import bottomBtn from '../components/BottomBtn.vue'
export default{
	name:'creat',
    components:{ headerLg,bottomBtn },
	methods:{
		...mapMutations([
			'go'
		])
		// toCreatSelect:function(){
		// 	this.$router.push({path:'/creatselect'})
		// }
	}
}
</script>

<style lang="less" scoped>
@import "../assets/css/variables.less";
#creat{height: 100%;}
.text-text{font-size:@font-size-normal;}
p{padding-bottom:6px;line-height: 20px;}
</style>
