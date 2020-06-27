<template>
	<div name="sendActivity">
				  <el-form :model="activityRuleForm" :rules="activityRules" ref="activityRuleForm" label-width="120px" class="demo-ruleForm">
					<el-form-item :label="isType+'名称'" prop="title">
				      <el-input v-model="activityRuleForm.title"></el-input>
				    </el-form-item>
					<el-form-item :label="isType+'简介'" prop="info">
					  <el-input v-model="activityRuleForm.info"></el-input>
					</el-form-item>
					<el-form-item :label="isType+'价格'" prop="price">
					  <el-input type="number" v-model="activityRuleForm.price" placeholder="单位元"></el-input>
					</el-form-item>
					<el-form-item label="联系方式" prop="contact">
					  <el-input v-model="activityRuleForm.contact"></el-input>
					</el-form-item>
					<el-form-item label="联系地址" prop="trading">
					  <el-input v-model="activityRuleForm.trading"></el-input>
					</el-form-item>
				    <el-form-item label="详细内容" prop="content">
				      <mavon-editor 
					  v-model="activityRuleForm.content"
					  :boxShadow="false"
					  ></mavon-editor>
				    </el-form-item>
					<el-form-item label="图片展示及封面" prop="image">
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
					price:"",
					contact:"",
					trading:"",
					img:[],
				},
				activityRules: {
				  title: [
					{ required: true, message: '请输入商品名称', trigger: 'blur' },
					{ min: 3, message: '长度最少3个字符', trigger: 'blur' }
				  ],
				  content: [
					{ required: true, message: '请输入商品内容', trigger: 'blur' }
				  ],
				  price: [
						{ required: true, message: '请输入商品价格', trigger: 'blur' },
				  ],
				  info: [
						{ required: true, message: '请输入商品简介', trigger: 'blur' },
						{ min: 3,max:50, message: '长度至少3-50个字符', trigger: 'blur' }
				  ],
				  contact: [
						{ required: true, message: '请输入联系方式', trigger: 'blur' },
						{ min: 5,max:15, message: '长度至少3-15个字符', trigger: 'blur' }
				  ],
				  trading: [
						{ required: true, message: '请输入联系地址', trigger: 'blur' },
						{ min: 2,max:50, message: '长度至少2-50个字符', trigger: 'blur' }
				  ],
				  img: [
					{ required: true, message: '请上传图片', trigger: 'blur'  }
				  ],
				},
			}
		},
		computed:{
			isType(){
				return "商品"
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
						data.type=data.type==""?'活动':data.type;
						data.session=JSON.parse(localStorage.getItem("userInfo")).session
						 var ids = [];
						 data.img.forEach(function (server) {
						   ids.push(server);
						 });
						 console.log(ids)
						 ids = ids.join(',');
						 data.img=ids;
						 that.$http.post("/api/marketInfoSub",data).then(function(res){
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
