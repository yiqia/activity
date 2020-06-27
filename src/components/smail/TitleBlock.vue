<template>
	<div name="boxTitle">
		<div class="boxTitle">
			<h2>{{title}}</h2>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:["title"]
	}
</script>

<style lang="stylus" scoped>
	@import '~style/var.styl'
	.boxTitle
		position relative
		.saleToggle
			position absolute
			bottom 2px
			right 0px
			width 70px
			height 25px
			display flex
			.saleToggleGrop
				flex 1
				border: 1px solid #e0e0e0;
				font-size 12px
				line-height 25px
				display flex
				justify-content center
				align-items center
				cursor pointer
			.saleToggleGrop:hover
				color $bgcolor
</style>
