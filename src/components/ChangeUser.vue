<template>
	<div name="changUser">
		<div>
		<el-form :model="form" prop="title" :rules="formRules" ref="formRules" label-width="120px" class="demo-ruleForm">
							<el-form-item label="昵称" prop="title">
							  <el-input v-model="form.title" :placeholder="userInfo.name"></el-input>
							</el-form-item>
				<el-form-item>
		    <el-button type="primary" @click="SubmitForm('formRules')">立即修改</el-button>
		  </el-form-item>
		</el-form>
		</div>
	</div>
</template>

<script>
	export default{
		name:"changUser",
		data(){
			return {
				dialogImageUrl: '',
				dialogVisible: false,
				form:{
					title:"",
					filed:"title"
				},
				formRules:{
					title: [
						{ required: true, message: '请输入商品名称', trigger: 'blur' },
						{ min: 3, message: '长度最少3个字符', trigger: 'blur' }
					],
				}
			}
		},
		methods:{
			SubmitForm(formName) {
				var that =this;
				this.$refs[formName].validate((valid) => {
				  if (valid) {
						var data= this.form;
							data.value=data.title;
							data.session=that.userInfo.session;
						this.$http.get("/api/updateNick",{params:data}).then(function(res){
							if(res.data.code==1){
								that.$message.success("提交成功")
								that.userInfo.name=that.form.title;
								console.log(that.userInfo)
								localStorage.setItem("userInfo",JSON.stringify(that.userInfo))
								that.$forceUpdate()
							}else if(res.data.code==2){
								that.$message.info("没有信息")
							}
						})
					}
				});
			},
			
		},
		mounted(){
			console.log(this.userInfo)
		},
		computed:{
			userInfo(){
				return JSON.parse(localStorage.getItem("userInfo"))
			}
		},
		watch:{
			
		},
		created() {
			var that = this;
			// var userInfo=JSON.parse(localStorage.getItem("userInfo"));
			// console.log(userInfo)
			// this.userInfo=userInfo;
		}
		
	}
</script>

<style lang="stylus" scoped>
	
</style>
