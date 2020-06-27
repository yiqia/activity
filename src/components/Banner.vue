<template>
	<div name="banner">
		<div class="Limit">
		<el-carousel :interval="5000" arrow="always" height="361px">
		    <el-carousel-item v-for="item in banner" :key="item.id">
			<a :href="item.jumpUrl">
				<img :src="item.imageUrl" alt="" style="width: 100%;height: 100%;">
			 </a>
		    </el-carousel-item>
		  </el-carousel>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				banner:[]
			}
		},
		methods:{
			
		},
		mounted(){
			var that = this;
			this.$http.get("/api/carousel").then(function(res){
				that.banner=res.data;
			})
		}
	}
</script>

<style lang="stylus" scoped>
	 .el-carousel__item h3 {
	    color: #475669;
	    font-size: 18px;
	    opacity: 0.75;
	    line-height: 300px;
	    margin: 0;
	  }
	  
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
</style>
