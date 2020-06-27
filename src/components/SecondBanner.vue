<template>
	<div name="banner">
		<div class="Limit">
			<div class="banner">
				<swiper height="460px" 
						width="1226px"
						:imgList="banner"
						:point="true"
						:autoplay="true"	
						:playtime="2000"
						>
				</swiper>
				<div class="bannerLeft">
					<ul>
						<li v-for="(item,index) in bannerList" v-bind:key="index" @mouseenter="enterLeft" :data-index="index">
							{{item.name}}
							<span><i class="el-icon-arrow-right"></i></span>
						</li>
					</ul>
					<div class="closeShop"  @mouseenter="leaveLeft"></div>
					<div class="closeShop" style="width: 1226px;height: 50px;bottom: -50px;top: auto;"  @mouseenter="leaveLeft"></div>
				</div>
				<div class="bannerInfo" v-show="isShop" @mouseleave="leaveShop" @mouseenter="enterShop">
					<div class="shopLi" v-for="(item,index) in shopList" v-bind:key="index">
						<a :href="item.url">
							<img :src="item.img" alt="" />
							<span>{{item.name}}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import swiper from './smail/Swiper.vue'
	
	export default{
		name:"banner",
		data(){
			return {
				banner:[],
				bannerList:[],
				shopList:[],
				isShop:false,
				isEnterShop:false,
				isEnterLeft:false
			}
		},
		components:{
			swiper,
			
		},
		methods:{
			enterLeft:function(e){
				var index=e.target.dataset.index;
				this.isShop=true;
				this.shopList=this.bannerList[index].list;
				this.isEnterLeft=true;
				console.log(this.isEnterShop);
			},
			leaveLeft:function(e){
				this.isShop=false;
				
			},
			enterShop:function(e){
				this.isEnterShop=true;
			},
			leaveShop:function(e){
				this.isShop=false;
				this.isEnterShop=false;
			}
		},
		mounted() {
			var that = this;
			this.$http.get("/bdapi/Banner.json").then(function(e){
				that.banner=e.data;
			})
			this.$http.get("/bdapi/BannerList.json").then(function(e){
				that.bannerList=e.data;
				that.shopList=e.data[0].list;
			})
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~style/var.styl'
	.banner
		width 100%
		height 460px
		position relative
		.bannerLeft
			position absolute
			top 0
			left 0
			width 234px
			height 100%
			background: rgba(105,101,101,.6);
			color #fff
			font-size 14px
			cursor pointer
			ul
				margin-top 22px
			ul li
				width (234-30)px
				height 42px
				line-height 42px
				padding-left 30px
				position relative
				cursor pointer
				span
					position absolute
					right 30px;
			ul li:hover
				background-color $bgcolor
			.closeShop
				position absolute
				top 0
				left -50px
				height 100%;
				width 50px;
		.bannerInfo
			position absolute
			right 0
			top 0
			width 992px
			height 100%
			background-color #fff
			border 1px solid #e0e0e0;
			box-shadow 0 8px 16px rgba(0,0,0,.18);
			display flex
			flex-wrap wrap
			align-content flex-start
			.shopLi
				display flex
				justify-content center
				align-items center
				cursor pointer
				width 248px
				height 76px
				a
					width 220px
					height 40px
					img
						width 40px
						height 40px
						vertical-align middle
					span
						white-space nowrap
						text-overflow ellipsis
						overflow hidden
						color #333333
						font-size 14px
						
</style>
