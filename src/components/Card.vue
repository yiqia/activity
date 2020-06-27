<template>
	<div name="Card">
		<div class="Limit">
			<div class="CardList">
				<div class="cardList">
					<el-card class="box-card" v-for="(item,index) in list" v-bind:key="index">
						<div class="cardHeader">
							<router-link :to="{path:'/info',query:{id:item.id}}">
								<img :src="item.img" alt="">
							</router-link>
						</div>
						<div class="cardLimit">
							<p>{{item.title}}</p>
							<div class="address">
								<i class="el-icon-location-information"></i>
								<span>{{item.address}}</span>
							</div>
							<div class="userInfo">
								<img :src="item.userImg" alt="">
								<span>{{item.name}}</span>
							</div>
							<div class="cardShow">
								<div class="cardShowLi">
									<i class="el-icon-view"></i>
									<span>{{item.show}}</span>
								</div>
								<div class="cardShowLi">
									<i class="iconfont">&#xe629;</i>
									<span>{{item.good}}</span>
								</div>
							</div>
						</div>
					</el-card>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Card",
		data(){
			return {
				list:[]
			}
		},
		methods:{
			
			
		},
		props:["name","show","pages","select"],
		watch:{
			show(){
				console.log(this.pages)
				var that = this;
				var page= (this.pages!=undefined || this.pages!="")?this.pages:1;
				this.$http.get("/api/eventsGallery?show="+this.show+"&page="+page).then(function(res){
					that.list=res.data;
				})
			},
			pages(){
				var that = this;
				var page= (this.pages!=undefined || this.pages!="")?this.pages:1;
				this.$http.get("/api/eventsGallery?show="+this.show+"&page="+page).then(function(res){
					that.list=res.data;
				})
			},
			select(){
				var that = this;
				var page= (this.pages!=undefined || this.pages!="")?this.pages:1;
				var data = {
					typesof:this.name,
					title:this.select,
					yeshu:page
				}
				console.log(data)
				this.$http.get("/api/search",{params:data}).then(function(res){
					that.list=res.data;
					
				})
			}
		},
		mounted(){
			var that = this;
			console.log(this.show)
			var page= (this.pages!=undefined || this.pages!="")?this.pages:1;
			this.$http.get("/api/eventsGallery?show="+this.show+"&page="+page).then(function(res){
				that.list=res.data;
			})
		}
	}
</script>

<style lang="stylus">
	.CardList
		.address
			color #888
			overflow hidden
			text-overflow ellipsis
			white-space nowrap
		.cardShow
			width 100%
			height 45px
			line-height 45px
			font-size 15px
			color #888
			display flex
			.cardShowLi
				padding-right 20px
				span
					padding-left 5px
		.userInfo
			width 100%
			height 60px
			display flex
			align-items center
			border-bottom 1px solid #eee
			span
				padding-left 10px
				font-size 13px
			img
				height 36px
				width 36px
				border-radius 50%
		.cardList
			width 100%
			height 100%
			display flex
			flex-wrap wrap
		.el-card__body
			padding 0
		.cardLimit
			width 90%
			height 100%
			overflow hidden
			text-overflow ellipsis
			white-space nowrap
			margin 0 auto
		.box-card:hover
			transform:translate3d(0,-10px,0)
		.box-card:nth-child(4n)
			margin-right 0px!important
		.box-card
			width 288px
			height 327px
			margin-right 22px
			margin-bottom 15px
			transition  all 0.3s
			p
				font-size 15px
				height 50px
				line-height 50px
			.cardHeader
				width 100%;
				height 155px
				cursor pointer
				img
					width 100%
					height 100%
</style>
