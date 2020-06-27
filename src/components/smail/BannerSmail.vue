<template>
	<div name="bannerSmail">
		<div class="saleBanner">
			<a :href="imgData.url">
				<img :src="imgData.img" alt="" />
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		props:['imgData']
	}
</script>

<style lang="stylus" scoped>
	.saleBanner
		width 100%;
		height 120px;
		margin 20px 0
		img
			width 100%
			height 100%
</style>
