<template>
	<div name="IndexInfo">

		<div>
			<el-container>
				<el-header>
					<yq-head index="1"></yq-head>
				</el-header>
				<el-main>
					<Banner></Banner>
					<Section :list="list[0]" open="#"  @section="getActivity"></Section>
					<Card name="activityList" :show="activityShow" pages="1"></Card>
					<Section :list="list[1]" open="#" @section="getMatch"></Section>
					<Card name="matchList" :show="machShow" pages="1"></Card>
				</el-main>
				<el-footer height="272px">
					<Footer></Footer>
				</el-footer>
			</el-container>
		</div>
		

	</div>

</template>

<script>
	import YqHead from '../components/Header.vue'
	import Footer from '../components/Footer.vue'
	import Banner from '../components/Banner.vue'
	import Section from '../components/Section.vue'
	import Card from '../components/Card.vue'
	export default {
		name: "IndexInfo",
		data() {
			return {
				list:[],
				activityShow:0,
				machShow:3
			}
		},
		components: {
			YqHead,
			Footer,
			Banner,
			Section,
			Card
			
		},
		methods:{
			getActivity(e){
				this.activityShow=e-1;
				
			},
			getMatch(e){
				this.machShow=e+2;
			}
		},
		mounted() {
			var that = this;
			this.$http.get("/bdapi/Index.json").then(function(res){
				that.list=res.data;
			})
		}
	}
</script>

<style lang="stylus" scoped>
	

</style>
