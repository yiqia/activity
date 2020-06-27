<template>
	<div name="info">
		<div>
			<el-container>
				<el-header>
					<yq-head index="2"></yq-head>
				</el-header>
				<el-main>
					<InfoContent></InfoContent>
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
	import InfoContent from '../components/InfoContent.vue'
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
			InfoContent,
			Footer
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>
