<template>
	<div name="">
		<div style="background-color: #fff;">
			<el-container>
				<el-header>
					<yq-head index="1"></yq-head>
				</el-header>
				<el-main>
					<!-- <SendActivity></SendActivity> -->
					<div class="Limit">
						<div class="sendActivity">
							<el-row>
							  <el-col :span="4">
								  <el-card class="box-card" shadow="hover">
									<div class="userInfoHeader">
										<img :src="userInfo.img" alt="" @click="changeHeader=true">
									</div>
									<div class="userInfoName">
										<h3>{{userInfo.name}}</h3>
									</div>
									<div class="userList">
										<ul>
											<li><router-link to="/changeUser">个人信息</router-link></li>
											<li><router-link to="/mysend">我的发布</router-link></li>
											<li><router-link to="/mySendShop">我的商品</router-link></li>
											<li><router-link to="/sendActivity">发布信息</router-link></li>
											<li><router-link to="/sendShop">发布商品</router-link></li>
											
										</ul>
									</div>
								  </el-card>
								  
							  </el-col>
							  <el-col :span="20">
								  <router-view></router-view>
							</el-col>
							</el-row>
						</div>
					</div>
					<el-dialog title="更换头像" :visible.sync="changeHeader" width="400px">
						<el-upload
						   action="/api/uploadFile"
						   name="uploadFile"
						   list-type="picture-card"
						   :limit="1"
						   :on-exceed="imageMore"
						   :on-success="uploadOk"
						   :on-error="uploadNo"
						   :on-preview="handlePictureCardPreview"
						   :on-remove="handleRemove"
						   >
						   <i class="el-icon-plus"></i>
						 </el-upload>
						 <el-dialog :visible.sync="dialogVisible">
						   <img width="100%" :src="dialogImageUrl" alt="">
						 </el-dialog>
						  <div slot="footer" class="dialog-footer">
						    <el-button @click="changeHeader = false">取 消</el-button>
						    <el-button type="primary" @click="saveHeader">确 定</el-button>
						  </div>
					</el-dialog>
					
					
					
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
	import SendActivity from '../components/SendActivity.vue'
	import MySend from '../components/MySend.vue'
	import ChangeUser from '../components/ChangeUser.vue'
	export default{
		data(){
			return {
				userInfo:{},
				changeHeader:false,
				dialogImageUrl: '',
				dialogVisible: false,
				form:{
					value:"",
					img:"",
					filed:"img"
				}
			}
		},
		components:{
			YqHead,
			Footer,
			SendActivity,
			MySend,
			ChangeUser
			
		},
		methods:{
			handleRemove(file, fileList) {
				this.form.img="";
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			//超过最大上传数
			imageMore(e){
				this.$message.error("图片超过1张无法继续");
			},
			uploadOk(e){
				this.form.img=e.dizhi
				console.log(this.form.img)
			},
			uploadNo(e){
				this.$message.error("上传失败")
			},
			saveHeader(e){
				var that = this;
				var data= this.form;
					data.value=data.img;
					data.session=that.userInfo.session;
				this.$http.get("/api/updateNick",{params:data}).then(function(res){
					if(res.data.code==1){
						that.$message.success("提交成功")
						that.userInfo.img=that.form.img;
						that.changeHeader=false;
						localStorage.setItem("userInfo",JSON.stringify(that.userInfo))
					}else if(res.data.code==2){
						that.$message.info("没有信息")
					}
				})
			}
		},
		created() {
			this.userInfo=JSON.parse(localStorage.getItem('userInfo'));
			if(this.userInfo==undefined || this.userInfo==""){
				this.$router.push("/")
			}
		},
		mounted(){
			// this.$router.replace("/mysend")
			// console.log(this.userInfo)
		}
	}
</script>

<style lang="stylus" scoped>
	.sendActivity
		.el-col-2
			width 2%
		.userList
			width 100%
			ul li
				width 100%
				height 30px
				text-align center
				line-height 30px
				cursor pointer
			ul li:hover
				background-color #f5f5f5
		.userInfoHeader
			width 100%
			img
				display block
				margin 0 auto
				border-radius 50%
				width 60px
				height 60px
		.userInfoName h3
			text-align center
			line-height 50px
			margin 0 auto
</style>
