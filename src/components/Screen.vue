<template>
	<div name="screen">
		<div class="Limit">
			<el-card class="box-card" shadow="hover">
			  <ul>
				  <li>
					  <el-row>
					    <el-col :span="2">
							<div class="typeName">
								<p>活动类型：</p>
							</div>
						</el-col>
					    <el-col :span="22">
							<div class="typeChange">
								<el-tag
								    effect="dark"
								>
								   全部
								 </el-tag>
								 <span>校园社团</span>
								 <span>志愿服务</span>
								 <span>竞技体育</span>
								 <span>艺术与修养</span>
								 <span>其他</span>
							</div>
						</el-col>
					  </el-row>
				  </li>
				  <li>
				  					  <el-row>
				  					    <el-col :span="2">
				  							<div class="typeName">
				  								<p>活动规格：</p>
				  							</div>
				  						</el-col>
				  					    <el-col :span="22">
				  							<div class="typeChange">
				  								<el-tag
				  								    effect="dark"
				  								>
				  								   全部
				  								 </el-tag>
				  								 <span>书院</span>
				  								 <span>院系</span>
				  								 <span>校级</span>
				  								 <span>市级</span>
				  								 <span>省级</span>
												 <span>国级</span>
												 <span>其他</span>
				  							</div>
				  						</el-col>
				  					  </el-row>
				  </li>
				  <li>
						  <el-row>
							<el-col :span="2">
								<div class="typeName">
									<p>参与人数：</p>
								</div>
							</el-col>
							<el-col :span="22">
								<div class="typeChange">
									<el-tag
										effect="dark"
									>
									   全部
									 </el-tag>
									 <span>个人</span>
									 <span>团队</span>
								</div>
							</el-col>
						  </el-row>
				  </li>
			  </ul>
			</el-card>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:"screen",
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

<style lang="stylus" scoped>
	.box-card
		width 100%
		height 160px
		line-height 40px
		font-size 14px
		.typeChange
			height 40px
			display flex
			align-items center
			span
				cursor pointer
				margin 0 10px
				font-size 14px
</style>
