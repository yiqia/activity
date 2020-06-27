<template>
	<div name="Section">
		<div class="Limit">
			<div class="sectionText">
			  <!-- <a :href="item.url"></a> -->
			  <span  v-for="(item,index) in list" @click="getSection" :data-index="index" v-bind:key="item.name">{{item.name}}</span>
			</div>
			<div class="showMore">
				<a :href="open" v-if="open!=''">查看更多></a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Section",
		data(){
			return {
				
			}
		},
		methods:{
			getSection(e){
				var index =parseInt(e.target.dataset.index);
				console.log(index)
				this.$emit("section",index)
				this.$message.success("加载成功")
			}
		},
		props:[
			"list",
			"open",
			"name"	
		],
		mounted(){
			
		}
	}
</script>

<style lang="stylus">
	.Limit
		margin-top 30px
		position relative
		.sectionText
			width 100%
			height 40px
			line-height 40px
			span
				padding 0 20px
				height 100%
				font-size 15px
				color #888
				cursor pointer
			span:hover
				color #ff8b3d
			span:first-child
				border-left 2px solid #fdd30f
				font-size 20px
				color #333333
		.showMore
			position absolute
			right 0
			top 0
			height 40px
			line-height 40px
</style>
