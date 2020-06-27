<template>
	<div name="sendActivity">
		<div class="Limit" style="border-bottom: 1px solid #f1f1f1;">
			<div class="sendActivity">
			<el-row>
			  <el-col :span="4">
				  <el-card class="box-card" shadow="hover">
				    <div class="userInfoHeader">
						<img :src="userInfo.img" alt="">
					</div>
					<div class="userInfoName">
						<h3>Hello</h3>
					</div>
					<div class="userList">
						<ul>
							<li>我的发布</li>
							<li>发布活动</li>
							<li>发布比赛</li>
							<li>修改密码</li>
						</ul>
					</div>
				  </el-card>
				  
			  </el-col>
			  <el-col :span="20">
				  <el-form :model="activityRuleForm" :rules="activityRules" ref="activityRuleForm" label-width="120px" class="demo-ruleForm">
				    <el-form-item label="活动名称" prop="title">
				      <el-input v-model="activityRuleForm.title"></el-input>
				    </el-form-item>
					<el-form-item label="活动加分" prop="score">
					  <el-select v-model="activityRuleForm.score" placeholder="请选择">
						<el-option label="无" value="无"></el-option>
					    <el-option :label="item+'分'" :value="item" v-for="item in 50" :key="item"></el-option>
					  
					  </el-select>
					</el-form-item>
				    <el-form-item label="活动类型" prop="belong">
				      <el-select v-model="activityRuleForm.belong" placeholder="请选择">
				        <el-option label="校园社团" value="校园社团"></el-option>
				        <el-option label="志愿服务" value="志愿服务"></el-option>
						<el-option label="竞技体育" value="竞技体育"></el-option>
						<el-option label="艺术与修养" value="艺术与修养"></el-option>
						<el-option label="其他" value="其他"></el-option>
				      </el-select>
				    </el-form-item>
				    <el-form-item label="活动报名时间" required >
				      <el-col :span="11">
				        <el-form-item prop="enlistStartTime">
				          <el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="activityRuleForm.enlistStartTime" style="width: 100%;"></el-date-picker>
				        </el-form-item>
				      </el-col>
				      <el-col class="line" :span="2">-</el-col>
				      <el-col :span="11">
				        <el-form-item prop="enlistOverTime">
							<el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="activityRuleForm.enlistOverTime" style="width: 100%;"></el-date-picker>
				        </el-form-item>
				      </el-col>
				    </el-form-item>
					<el-form-item label="活动开始时间" required>
					  <el-col :span="11">
					    <el-form-item prop="activityStartTime">
					      <el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="activityRuleForm.activityStartTime" style="width: 100%;"></el-date-picker>
					    </el-form-item>
					  </el-col>
					  <el-col class="line" :span="2">-</el-col>
					  <el-col :span="11">
					    <el-form-item prop="activityOverTime">
						<el-date-picker value-format="yyyy-MM-dd" type="date" placeholder="选择日期" v-model="activityRuleForm.activityOverTime" style="width: 100%;"></el-date-picker>
					    </el-form-item>
					  </el-col>
					</el-form-item>
					<el-form-item label="报名地点" prop="location">
					  <el-input v-model="activityRuleForm.location"></el-input>
					</el-form-item>
					<el-form-item label="活动地点" prop="address">
					  <el-input v-model="activityRuleForm.address"></el-input>
					</el-form-item>
					<el-form-item label="承办单位" prop="unit">
					  <el-input v-model="activityRuleForm.unit"></el-input>
					</el-form-item>
				    <el-form-item label="活动详细" prop="content">
				      <mavon-editor 
					  v-model="activityRuleForm.content"
					  :boxShadow="false"
					  ></mavon-editor>
				    </el-form-item>
					<el-form-item label="宣传图片" prop="image">
					 <el-upload
					   action="/api/uploadFile"
					   name="uploadFile"
					   list-type="picture-card"
					   :limit="5"
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
					</el-form-item>
				    <el-form-item>
				      <el-button type="primary" @click="activitySubmitForm('activityRuleForm')">立即创建</el-button>
				    </el-form-item>
				  </el-form>
				  
			  </el-col>
			</el-row>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"sendActivity",
		data(){
			return {
				dialogImageUrl: '',
				dialogVisible: false,
				activityRuleForm: {
					 title: '',
					 content: '',
					 address: '',
					 belong: '',
					 enlistStartTime: '',
					 enlistOverTime: '',
					 location: '',
					 activityStartTime: '',
					 activityOverTime: '',
					 unit: '',
					 img:[],
					 type: 0,
				},
				activityRules: {
				  title: [
					{ required: true, message: '请输入活动名称', trigger: 'blur' },
					{ min: 3, message: '长度最少3个字符', trigger: 'blur' }
				  ],
				  content: [
					{ required: true, message: '请输入活动内容', trigger: 'blur' }
				  ],
				  address: [
						{ required: true, message: '请输入活动地点', trigger: 'blur' },
						{ min: 3, message: '长度最少3个字符', trigger: 'blur' }
				  ],
				  location: [
						{ required: true, message: '请输入活动报名地点', trigger: 'blur' },
						{ min: 3, message: '长度最少3个字符', trigger: 'blur' }
				  ],
				  score: [
						{ required: true, message: '请选择一个活动加分', trigger: 'change' },
				  ],
				  belong: [
						{ required: true, message: '请选择一个活动加分', trigger: 'change' },
				  ],
				  unit: [
						{ required: true, message: '请输入承办单位', trigger: 'blur' },
						{ min: 2, message: '长度最少2个字符', trigger: 'blur' }
				  ],
				  enlistStartTime: [
					{  required: true, message: '请选择日期', trigger: 'change' }
				  ],
				  enlistOverTime: [
					{  required: true, message: '请选择时间', trigger: 'change' }
				  ],
				  activityStartTime: [
					{  required: true, message: '请选择时间', trigger: 'change' }
				  ],
				  activityOverTime: [
					{  required: true, message: '请选择时间', trigger: 'change' }
				  ],
				  img: [
					{ required: true, message: '请上传图片', trigger: 'blur'  }
				  ],
				},
			}
		},
		methods:{
			handleRemove(file, fileList) {
				var imageList=[];
				for(let i=0;i<fileList;i++){
					imageList.push(fileList[i].response.dizhi)
				}
				this.activityRuleForm.img=imageList;
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			//超过最大上传数
			imageMore(e){
				this.$message.error("图片超过5张无法继续");
			},
			uploadOk(e){
				this.activityRuleForm.img.push(e.dizhi)
				console.log(this.activityRuleForm)
			},
			uploadNo(e){
				this.$message.error("上传失败")
			},
			//提交
			activitySubmitForm(formName) {
				var that =this;
				this.$refs[formName].validate((valid) => {
				  if (valid) {
						var data=that.activityRuleForm
						data.type="活动"
						data.session=JSON.parse(localStorage.getItem("userInfo")).session
						 var ids = [];
						 data.img.forEach(function (server) {
						   ids.push(server);
						 });
						 ids = ids.join(',');
						 data.img=ids;
						 that.$http.post("/api/activitySubmission",data).then(function(res){
						 	if(res.data.code==1){
						 		that.$message({
						 		  message: '发布成功',
						 		  type: 'success'
						 		});
						 		that.$router.push("/");
						 	}else{
						 		that.$message.error(res.data.message);
						 	}
						
						})
					}
				});
			}
		},
		created() {
			this.userInfo=JSON.parse(localStorage.getItem('userInfo'));
			if(this.userInfo==undefined || this.userInfo==""){
				this.$router.push("/")
			}
		},
		mounted(){
			
		}
	}
</script>

<style lang="stylus">
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
