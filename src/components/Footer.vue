<template>
	<div name="footer">
		<div id="footer">
			<div class="box">
				<div class="Limit">
					<div class="footer">
						<div class="footerTop">
							<ul>
								<li>
									<span class="iconfont">&#xe63b;</span>
									<span>联系我们</span>
								</li>
								<li>
									<span class="iconfont"></span>
									<span>校园官网</span>
								</li>
								<li>
									<span class="iconfont"></span>
									<span>百度一下</span>
								</li>
								<li>
									<span class="iconfont"></span>
									<span>用户中心</span>
								</li>
								<li>
									<span class="iconfont"></span>
									<span>帮助中心</span>
								</li>
							</ul>
						</div>
						<div class="footerBottom">
							<div class="BoottomLeft">
								<div>
									<p>Copyright (c) 2017 EventWang [ Innovation for China ]</p>
									<p>渝ICP备xxxxxx号-3   渝公网安备 xxxxxxx号</p>
									<p>平台提供校园活动信息展示</p>
								</div>
							</div>
							<div class="BottommRight">
								<p class="phone">400-100-5678</p>
								<span class="info">
									周一至周日 8:00-18:00
									（仅收市话费）
								</span>
								<div class="BottomBtn">
									<a href="">
										<span class="iconfont">&#xe604;</span>
										<span>人工服务</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		mounted(){
			
		}
	}
</script>

<style lang="stylus">
	.el-footer
		padding 0
	#footer
		.box
			width 100%
			background-color #fff
			.footerTop
				width 100%
				height 80px
				ul
					display flex
					height 80px
					border-bottom 1px solid #e0e0e0;
					li
						flex 1
						text-align center
						color #616161
						height 25px
						font-size: 16px;
						line-height: 25px;
						border-left: 1px solid #e0e0e0;
						margin-top 25px
					li:first-child
						border-left none
			.footerBottom
				width 100%
				height 150px
				display flex
				.BoottomLeft
					width 974px
					display flex
					justify-content center
					align-items center
					color #aaa
					font-size 15px
					line-height 30px
					ul
						display flex
						width 100%
						li
							width 100%
							height 112px
							margin-top 40px
							p
								margin: -1px 0 26px;
								font-size: 14px;
								line-height: 1.25;
								color: #424242;
							a
								display block
								margin: 10px 0 0;
								font-size: 12px;
						li:last-child
							border-right 1px solid #e0e0e0;
				.BottommRight
					width 252px
					height 100%
					text-align center
					.phone
						margin:40px 0 5px;
						font-size: 22px;
						line-height: 1;
						color: #ff6700;
					.info
						width: 251px;
						height: 112px;
						border-left: 1px solid #e0e0e0;
						text-align: center;
						color: #616161;
					.BottomBtn
						width 120px
						height 30px
						border:1px solid #ff6700;
						background: #fff;
						line-height 30px;
						text-align center
						margin 20px auto
						a span
							color: #ff6700;
</style>
