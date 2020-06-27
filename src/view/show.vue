<template>
	<div name="show">
		<div>
			<el-container>
				<el-header>
					<yq-head index="2"></yq-head>
				</el-header>
				<el-main>
					<!-- <Screen></Screen> -->
					<Section :list="list[0]" open="" @section="getActivity"></Section>
					<Card :name="0" :show="activityShow" :select="select" :pages="page"></Card>
					<div class="Limit">
						<div class="Center">
							<el-pagination
							  background
							  layout="prev, pager, next"
							  :total="30"
							  :page-size="8"
							  @current-change="changePage"
							  @prev-click="changePage"
							  >
							</el-pagination>
						</div>
					</div>
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
	import ShowContent from '../components/ShowContent.vue'
	import Footer from '../components/Footer.vue'
	import Section from '../components/Section.vue'
	import Screen from '../components/Screen.vue'
	import Card from '../components/Card.vue'
	export default{
		name:"show",
		data(){
			return {
				list:[],
				activityShow:0,
				page:1,
				select:""
			}
		},
		methods:{
			getActivity(e){
				this.activityShow=e-1;
			},
			//改变页数
			changePage(e){
				this.page=e;
				console.log(this.page)
			},
			getselect(e){
				this.select=this.$route.query.select
			}
			
		},
		//利用计算属性
		computed: {
			// select() {
			//   return this.$route.query.select;
			// }
		},
		  //监听执行
		watch: {
			'$route': 'getselect',
			select(val) {
				return this.$route.query.select;
			}
		},
		mounted(){
			var that = this;
			this.$http.get("/bdapi/Index.json").then(function(res){
				that.list=res.data;
			})
			this.select=this.$route.query.select
		},
		components:{
			YqHead,
			ShowContent,
			Footer,
			Section,
			Card,
			Screen
		}
	}
</script>

<style lang="stylus" scoped>
	.grid-content
		width 50px
		height 10px
</style>
