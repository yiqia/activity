<template>
	<div name="second">
		<div>
			<el-container>
				<el-header>
					<yq-head index="4"></yq-head>
				</el-header>
				<el-main>
					<FlashSale></FlashSale>
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
	import Footer from '../components/Footer.vue'
	import FlashSale from '../components/FlashSale.vue'
	export default{
		name:"second",
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		mounted(){
			
		},
		components:{
			YqHead,
			Footer,
			FlashSale
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>
