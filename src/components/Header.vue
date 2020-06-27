<template>
	<div name="Header" id="Header">
		<div class="box">
			<div class="Header">
				<el-row>
				  <el-col :span="5">
					 <div class="logo">
						 <img src="../assets/logo.png" alt="" />
					 </div>
				  </el-col>
				  <el-col :span="7">
					  <el-menu :default-active="index" active-text-color="#794e00" text-color="#000" background-color="#fdd30f" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					    <el-menu-item index="1"><a href="./">首页</a></el-menu-item>
						<el-menu-item index="2"><a href="./show">活动</a></el-menu-item>
						<el-menu-item index="3"><a href="./mach">比赛</a></el-menu-item>
					    <el-menu-item index="4"><a href="./secondHead">二手物品</a></el-menu-item>
					  </el-menu>
				  </el-col>
				  <el-col :span="8">
					  <div class="Center">
						  <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
							 <el-select v-model="select" slot="prepend" placeholder="请选择">
							   <el-option label="活动" value="0"></el-option>
							   <el-option label="比赛" value="1"></el-option>
							   <el-option label="二手物品" value="2"></el-option>
							 </el-select>
							 <el-button @click="startSelect" slot="append" icon="el-icon-search"></el-button>
						   </el-input>
					   </div>
					</el-col>
					
				  <el-col :span="4">
					  <div class="loginBtn">
						  <div v-if="!isLogin">
						  <span @click="dialogLogin= true">登录</span>
						  <span @click="dialogReg= true">注册</span>
						  </div>
						  <div v-if="isLogin">
						  <el-dropdown  @command="handleCommand">
						    <span class="el-dropdown-link">
						      {{userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
						    </span>
								<el-dropdown-menu slot="dropdown">
								  <el-dropdown-item command="1">个人中心</el-dropdown-item>
								  <el-dropdown-item command="2">提交认证</el-dropdown-item>
								  <el-dropdown-item command="4">发布活动</el-dropdown-item>
								  <el-dropdown-item command="5">发布商品</el-dropdown-item>
								  <el-dropdown-item command="6">修改密码</el-dropdown-item>
								  <el-dropdown-item command="3">退出登录</el-dropdown-item>
								</el-dropdown-menu>
							  </el-dropdown>
							</div>
					  </div>
					  
				  </el-col>
				  <!-- 登录 -->
				  <el-dialog title="提示" :visible.sync="dialogLogin" width="400px">
				    <el-form :model="loginForm" :rules="rules" ref="loginForm">
				      <el-form-item label="账号" label-width="auto" prop="name">
				        <el-input v-model="loginForm.name" autocomplete="off"></el-input>
				      </el-form-item>
				      <el-form-item label="密码" label-width="auto" prop="password">
				        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
				      </el-form-item>
					   <el-form-item>
					      <el-button type="primary" @click="submitForm('loginForm')">立即登录</el-button>
					      
					    </el-form-item>
				    </el-form>
				  </el-dialog>
				  <!-- 注册 -->
				  <el-dialog title="提示" :visible.sync="dialogReg" width="400px">
				    <el-form :model="regForm" :rules="rules" ref="regForm"> 
				      <el-form-item label="账号" label-width="auto"  prop="name">
				        <el-input type="number" placeholder="账号必须是9位数字组成哦" v-model="regForm.name" autocomplete="off"></el-input>
				      </el-form-item>
				      <el-form-item label="密码" label-width="auto" prop="password">
				        <el-input type="password" placeholder="请输入6-16位的密码" v-model="regForm.password" autocomplete="off"></el-input>
				      </el-form-item>
					  <el-form-item label="重复密码" label-width="auto" prop="okpass">
					    <el-input type="password" v-model="regForm.okpass" autocomplete="off"></el-input>
					  </el-form-item>
					   <el-form-item
					      label="昵称"
						  prop="nickname"
					    >
					      <el-input v-model="regForm.nickname"></el-input>
					    </el-form-item>
						 <el-form-item>
						    <el-button type="primary" @click="submitForm('regForm')">立即创建</el-button>
						
						</el-form-item>
				    </el-form>
				  </el-dialog>
				  <!-- 修改密码 -->
				  <el-dialog title="提示" :visible.sync="showPass" width="400px">
				    <el-form :model="changePass" :rules="rules" ref="changePass"> 
				      <el-form-item label="旧密码" label-width="auto" prop="password">
				        <el-input type="password" placeholder="请输入6-16位的密码" v-model="changePass.password" autocomplete="off"></el-input>
				      </el-form-item>
					  <el-form-item label="新密码" label-width="auto" prop="password">
					    <el-input type="password" placeholder="请输入6-16位的密码" v-model="changePass.newPassword" autocomplete="off"></el-input>
					  </el-form-item>
					  <el-form-item label="重复密码" label-width="auto" prop="okPassword">
						<el-input type="password" v-model="changePass.okPassword" autocomplete="off"></el-input>
					  </el-form-item>
						 <el-form-item>
							<el-button type="primary" @click="submitForm('changePass')">立即修改</el-button>
						</el-form-item>
				    </el-form>
				  </el-dialog>
				  <!-- 提交认证 -->
				  <el-dialog title="提交认证" :visible.sync="showRenzheng" width="400px">
				    <el-form :model="renzheng">
				      <el-form-item label="认证部门" label-width="auto">
				        <el-select v-model="renzheng.department" placeholder="请选择部门">
							<el-option label="篮球社团" value="篮球社团"></el-option>
							<el-option label="羽毛球社团" value="羽毛球社团"></el-option>
							<el-option label="瑜伽社" value="瑜伽社"></el-option>
							<el-option label="教务处" value="教务处"></el-option>
							<el-option label="宣传部" value="宣传部"></el-option>
							<el-option label="科技部" value="科技部"></el-option>
							<el-option label="美宣部" value="美宣部"></el-option>
							<el-option label="管理员" value="管理员"></el-option>
				        </el-select>
				      </el-form-item>
				    </el-form>
				    <div slot="footer" class="dialog-footer">
				      <el-button @click="showRenzheng = false">取 消</el-button>
				      <el-button type="primary" @click="sendRenzhen">确 定</el-button>
				    </div>
				  </el-dialog>
				</el-row>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name:"Header",
		data(){
			var validatePass2 = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error('请再次输入密码'));
			        } else if (value !== this.regForm.password) {
			          callback(new Error('两次输入密码不一致!'));
			        } else {
			          callback();
			        }
			      };
			 var validatePass3 = (rule, value, callback) => {
					if (value === '') {
						callback(new Error('请再次输入密码'));
					} else if (value !== this.changePass.newPassword) {
						callback(new Error('两次输入密码不一致!'));
					} else {
						callback();
					}
			};
			return {
				activeIndex: '1',
				input3: '',
				select: '0',
				dialogReg: false,
				dialogLogin:false,
				isLogin:false,
				userInfo:{},
				showPass:false,
				changePass:{
					password:"",
					newPassword:"",
					okPassword:""
				},
				showRenzheng:false,
				renzheng:{
					department:""
				},
				loginForm:{
					name:"",
					password:"",
				},
				regForm:{
					name:"",
					password:"",
					nickname:"",
					okpass:""
				},
				rules:{
					 name: [
							{ required: true, message: '必须输入账号哦', trigger: 'blur' },
							{ min: 9, max: 9, message: '数字长度必须为9位', trigger: 'blur' }
					  ],
					  password: [
							{ required: true, message: '必须要输入密码哦', trigger: 'blur' },
							{ min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
					   ],
					   okpass:[
						    { validator: validatePass2, trigger: 'blur' },
						   { required: true, message: '必须要确认密码哦', trigger: 'blur' },
						   { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
					   ],
					   nickname: [
							{ required: true, message: '必须输入昵称哦', trigger: 'blur' },
							{ min: 2, max: 16, message: '长度必须为2-16位', trigger: 'blur' }
					    ],
						okPassword:[
							 { validator: validatePass3, trigger: 'blur' },
							{ required: true, message: '必须要确认密码哦', trigger: 'blur' },
							{ min: 2, max: 16, message: '长度必须为2-16位', trigger: 'blur' }
						]
				},
				
				    
			}
		},
		props:[
			"index"
		],
		methods:{
			//提交认证
			sendRenzhen(e){
				var that =this;
				var url ="/api/certification?department="+that.renzheng.department+"&session="+that.userInfo.session;
				that.$http.get(url).then(function(res){
					if(res.data.code==1){
						that.$message({
						  message: '提交成功，等待审核',
						  type: 'success'
						});
						that.dialogReg=false;
					}else{
						this.$message.error(res.data.message);
					}
				})
			},
			//开始搜索
			startSelect(e){
				var that = this;
				var data= {
					content:that.input3,
					type:this.select
				}
				//this.$store.commit("changeSelect",data);
				if(this.select==0){
					this.$router.push({
					　　path: '/show',
					　　query: {
					　　　　select: that.input3
					　　}
					});
				}else if(this.select==1){
					this.$router.push({
					　　path: '/mach',
					　　query: {
					　　　　select: that.input3
					　　}
					});
				}else if(this.select==2){
					this.$router.push({
					　　path: '/secondHead',
					　　query: {
					　　　　select: that.input3
					　　}
					});
				}
			},
			handleClose(done) {
				this.$confirm('确认关闭？')
				  .then(_ => {
					done();
				  })
				  .catch(_ => {});
			},
			//点击下拉菜单按钮
			handleCommand(command) {
				var that = this;
				if(command==3){
					
					this.$confirm('确认退出登录？')
					  .then(_ => {
						  that.isLogin="";
						  that.userInfo="";
						  localStorage.clear();
						  that.$router.push("/")
						done();
					  })
					  .catch(_ => {});
				}else if(command==1){
					this.$router.push("/userInfo")
				}else if(command==4){
					this.$router.push("/sendActivity")
				}else if(command==2){
					this.showRenzheng=true;
				}else if(command==6){
					this.showPass=true;
				}
			},
			submitForm(formName) {
				var that = this;
				console.log(formName)
				this.$refs[formName].validate((valid) => {
				  if (valid) {
					if(formName=="loginForm"){
						that.$http.post("/api/login",that.loginForm).then(function(res){
							if(res.data.code==1){
								that.$message({
								  message: '恭喜你，登录成功',
								  type: 'success'
								});
								that.dialogLogin=false;
								that.isLogin=true;
								that.userInfo=res.data;
								localStorage.setItem("isLogin", true);
								localStorage.setItem("userInfo", JSON.stringify(res.data));
								that.$forceUpdate();
							}else{
								that.$message.error(res.data.message);
							}
						})
					}else if(formName=="regForm"){
						that.$http.post("/api/registeredUser",that.regForm).then(function(res){
							if(res.data.code==1){
								that.$message({
								  message: '恭喜你，注册成功',
								  type: 'success'
								});
								that.dialogReg=false;
							}else{
								this.$message.error(res.data.message);
							}
						})
						
						
					}else if(formName=="changePass"){
						var data=that.changePass;
						data.session=that.userInfo.session;
						that.$http.get("/api/updatePass",{params:data}).then(function(res){
							if(res.data.code==1){
								that.$message({
								  message: '恭喜你，修改成功',
								  type: 'success'
								});
								that.showPass=false;
								that.isLogin="";
								that.userInfo="";
								localStorage.clear();
								that.$router.push("/")
							}else if(res.data.code==2){
								that.$message.error("旧密码不正确");
							}else{
								that.$message.error(res.data.message);
							}
						})
					}
					
				  } else {
					console.log('error submit!!');
					return false;
				  }
				});
			 },
			 resetForm(formName) {
			         this.$refs[formName].resetFields();
			       },
			 activitySubmitForm(formName) {
			        this.$refs[formName].validate((valid) => {
			          if (valid) {
			            alert('submit!');
			          } else {
			            console.log('error submit!!');
			            return false;
			          }
					});
			},
			handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		      },
		},
		watch:{
			
		},
		computed:{
			
		},
		mounted() {
			var that = this;
			var userInfo=JSON.parse(localStorage.getItem("userInfo"));
			this.isLogin=localStorage.getItem("isLogin");
			this.userInfo=userInfo;
		}
	}
</script>

<style lang="stylus">
	@import '~style/var.styl'
	.el-menu-item
		padding 0
		a
			padding 10px 20px
	.el-header 
		padding 0
	.el-menu
		height 60px
	 .el-select .el-input {
	    width: 120px;
	  }
	  .el-input-group__append button{
		  background-color #fff!important;
	  }
	  .input-with-select .el-input-group__prepend {
	    background-color: #fff;
	  }
	  .Center
		width 100%
		height 60px
	#Header
		width 100%
		background-color #fdd30f
	.box
		width 85.75rem
		margin 0 auto
		height 100%
		.Header
			height 100%
			width 100%
			.loginBtn
				height 60px
				display flex
				justify-content center
				align-items center
				span
					cursor pointer
					font-size 16px
					padding 0 10px
		.logo 
			height 60px
			width 100%
			display flex
			align-items center
			
			img
				height 60%;
				
</style>