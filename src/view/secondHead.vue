<template>
	<div name="second">
		<div>
			<el-container>
				<el-header>
					<yq-head index="4"></yq-head>
				</el-header>
				<el-main>
					<!-- <SecondBanner></SecondBanner> -->
					<FlashSale :select="select"></FlashSale>
				</el-main>
				<el-footer>
					<Footer></Footer>
				</el-footer>
			</el-container>
		</div>
	</div>
</template>

<script>
	import YqHead from '../components/Header.vue'
	import SecondBanner from '../components/SecondBanner.vue'
	import Footer from '../components/Footer.vue'
	import FlashSale from '../components/FlashSale.vue'
	export default{
		name:"second",
		data(){
			return {
				select:""
			}
		},
		methods:{
			getselect(e){
				console.log(e)
				this.select=this.$route.query.select
			}
		},
		mounted(){
			
		},
		watch: {
			'$route': 'getselect',
			select(val) {
				return this.$route.query.select;
			}
		},
		components:{
			YqHead,
			SecondBanner,
			Footer,
			FlashSale
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>
