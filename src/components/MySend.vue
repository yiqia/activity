<template>
	<div name="mysend">
		<div class="mySend">
			<div class="CardList">
				<div class="cardList">
					<el-card class="box-card" v-for="(item,index) in list" v-bind:key="index">
						<div class="biaoqian">
							<el-tag v-if="item.type=='活动'">活动</el-tag>
							<el-tag type="success" v-if="item.type=='比赛'">比赛</el-tag>
						</div>
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
							<div class="cardShow" style="position: relative;">
								<div class="cardShowLi">
									<i class="el-icon-view"></i>
									<span>{{item.show}}</span>
								</div>
								<div class="cardShowLi">
									<i class="iconfont">&#xe629;</i>
									<span>{{item.good}}</span>
								</div>
								<div class="cardShowLi" style="position: absolute;right: 0;">
									<el-dropdown @command="handleCommand" :data-id="item.id">
									  <span class="el-dropdown-link">
									    更多操作<i class="el-icon-arrow-down el-icon--right"></i>
									  </span>
									  <el-dropdown-menu slot="dropdown">
									    <el-dropdown-item :command="'r-'+item.id+'-'+index">删除</el-dropdown-item>
									  </el-dropdown-menu>
									</el-dropdown>
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
		name:"mysend",
		data(){
			return {
				list:[]
			}
		},
		methods:{
			handleCommand(e){
				var zhi = e.split("-");
				
				if(zhi[0]=='r'){
			
					var that = this;
					this.$http.get("/api/delActivity?session="+that.userInfo.session+"&id="+zhi[1]).then(function(res){
						if(res.data.code==1){
							that.$message.success("删除成功");
							that.list.splice([zhi[2]],1);
						}else if(res.data.code==2){
							that.$message.info("没有信息")
						}
					})
				}
			}
		},
		props:["newList","show"],
		mounted(){
			var that = this;
			var userInfo=JSON.parse(localStorage.getItem("userInfo"));
			this.isLogin=localStorage.getItem("isLogin");
			this.userInfo=userInfo;
			this.$http.get("/api/infoRelease?session="+that.userInfo.session).then(function(res){
				if(res.data.code==1){
					that.list=res.data.data;
				}else if(res.data.code==2){
					that.$message.info("没有信息")
				}
			})
			
		}
	}
</script>

<style lang="stylus">
	.mySend
		margin 0 20px
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
		.box-card:nth-child(3n)
			margin-right 0px!important
		.box-card
			width 288px
			height 327px
			margin-right 22px
			margin-bottom 15px
			transition  all 0.3s
			position relative
			.biaoqian
				span
					position absolute
					top 0
					right 0
					border-radius 0
				
				p
					fons-size 13px
					line-height 25px
					text-align center
					color: #409eff;
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
