<template>
	<div name="info">
		<div>
			<el-container>
				<el-header>
					<yq-head index="-1"></yq-head>
				</el-header>
				<el-main>
					<ShopInfo></ShopInfo>
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
	import ShopInfo from '../components/ShopInfo.vue'
	import Footer from '../components/Footer.vue'
	export default{
		name:"info",
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
			ShopInfo,
			Footer
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>
