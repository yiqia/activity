<template>
	<div name="shopCard">
		<div class="shopCard">
			<!-- <div class="shopCardLeft">
				<img :src="img" alt="">
			</div> -->
			<div class="shopCardRight">
				<ul>
					<li  v-for="(item,index) in list" v-bind:key="index">
						<div class="moreChange" v-if="isMy">
							<el-dropdown @command="handleCommand" :data-id="item.id">
							  <span class="el-dropdown-link">
							    <i class="el-icon-arrow-down el-icon-more"></i>
							  </span>
							  <el-dropdown-menu slot="dropdown">
							    <el-dropdown-item :command="'r-'+item.id+'-'+index">删除</el-dropdown-item>
								 <el-dropdown-item :command="'m-'+item.id+'-'+index">设置已卖出</el-dropdown-item>
							  </el-dropdown-menu>
							</el-dropdown>
						</div>
						<!-- <i class="el-icon-close" @click="removeShop" :data-id="item.id" :data-index="index"></i> -->
						<router-link :to="{path:'/showShop',query:{id:item.id}}">
							<img :src="item.img" alt="" />
							<p class="saleTitle">{{item.title}}</p>
							<p class="saleInfo">{{item.info}}</p>
							<span class="price">{{item.price}}元</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:{}
			}
		},
		props:["shopList","img","isMy"],
		methods:{
			handleCommand(e){
				var zhi = e.split("-");
				console.log(zhi[0])
				var that = this;
				if(zhi[0]=='r'){
					this.$http.get("/api/delMarketInfo?session="+that.userInfo.session+"&id="+zhi[1]).then(function(res){
						if(res.data.code==1){
							that.$message.success("删除成功");
							that.list.splice([zhi[2]],1);
						}else{
							that.$message.info("没有信息")
						}
					})
				}else if(zhi[0]=='m'){
					
					this.$http.get("/api/sell?session="+that.userInfo.session+"&id="+zhi[1]).then(function(res){
						if(res.data.code==1){
							that.$message.success("设置成功，该商品不会显示");
						}else{
							that.$message.info("没有信息")
						}
					})
				}
			},
			removeShop(e){
				console.log()
				var that = this;
				this.$http.get("/api/delMarketInfo?session="+that.userInfo.session+"&id="+e.toElement.dataset.id).then(function(res){
					if(res.data.code==1){
						that.$message.success("删除成功");
						that.list.splice([e.toElement.dataset.index],1);
					}else if(res.data.code==2){
						that.$message.info("没有信息")
					}
				})
			}
		},
		watch:{
			shopList(){
				this.list=this.shopList;
			}
		},
		mounted(){
			var userInfo=JSON.parse(localStorage.getItem("userInfo"));
			this.isLogin=localStorage.getItem("isLogin");
			this.userInfo=userInfo;
		}
	}
</script>

<style lang="stylus" scoped>
	.shopCard
		width 100%
		display flex
		.shopCardLeft
			width 234px
			height 100%
			img
				width 100%
				height 100%
		.shopCardLeft:hover
			transition all 0.3s
			z-index: 2;
			-webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1);
			box-shadow: 0 15px 30px rgba(0,0,0,.1);
			-webkit-transform: translate3d(0,-2px,0);
			transform: translate3d(0,-2px,0);
		.shopCardRight
			width 100%
			height 100%
			ul
				display flex
				flex-wrap wrap
				li
					width 231px
					height 300px
					margin-left: 14px;
					margin-bottom: 14px;
					background: #fff;
					text-align center
					position relative
					// i
					// 	position absolute
					// 	top 5px
					// 	right 5px
					// 	font-size 18px
					// 	color #aaa
					// 	cursor pointer
					// 	padding 10px
					.moreChange
						position absolute
						top 5px
						right 5px
					img
						width 160px
						height 160px
						display block
						margin: 20px auto 18px;
					.saleTitle
						margin: 0 20px 3px;
						font-size: 14px;
						font-weight: 400;
						text-overflow: ellipsis;
						color: #212121;
						overflow: hidden;
						white-space: nowrap;
					.saleInfo
						height: 18px;
						margin: 0 20px 12px;
						font-size: 12px;
						text-overflow: ellipsis;
						color: #b0b0b0;
						overflow: hidden;
						white-space: nowrap;
					.price
						font-size 14px
						color: #ff6709;
					.priced
						font-size 14px
						color #b0b0b0;
				li:hover
					transition all 0.3s
					z-index: 2;
					-webkit-box-shadow: 0 15px 30px rgba(0,0,0,.1);
					box-shadow: 0 15px 30px rgba(0,0,0,.1);
					-webkit-transform: translate3d(0,-2px,0);
					transform: translate3d(0,-2px,0);
</style>
