<template>
	<div name="MySendShop">
		<shopCard :isMy="true" :shopList="saleList['saleList']" img="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=293&h=768&f=webp&q=90"></shopCard>
		<div class="Center">
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="saleList['size']"
			  @current-change="changePages"
			  >
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import shopCard from "./smail/ShopCard.vue"
	export default{
		name:"MySendShop",
		data(){
			return {
				saleList:[],
			}
		},
		methods:{
			changePages(e){
				var that = this;
				this.$http.get("/api/myMarketInfo?page="+e+"&session="+this.userInfo.session).then(function(e){
					that.saleList=e.data;
				})
			}
		},
		components:{
			shopCard
		},
		mounted(){
			var that = this;
			var userInfo=JSON.parse(localStorage.getItem("userInfo"));
			this.isLogin=localStorage.getItem("isLogin");
			this.userInfo=userInfo;
			this.$http.get("/api/myMarketInfo?page=1&session="+this.userInfo.session).then(function(e){
				that.saleList=e.data;
				
			})
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>
