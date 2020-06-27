<template>
	<div name="SwiperItem">
		<div class="swiperItemBox" >
			<slot>
				
			</slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:"swiperitem",
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="stylus" scoped>
	.swiperItemBox
		color #fff;
		position absolute
		width 100%;
		height 100%;
		img
			width 100%;
			height 100%;
</style>
