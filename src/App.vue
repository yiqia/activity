<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
	  showLogin(){
		  var that = this;
		  var userInfo=JSON.parse(localStorage.getItem("userInfo"));
		  if(localStorage.getItem("isLogin")!=true){
			  that.$router.push("/")
		  }
	  },
	  getSession(){
			return JSON.parse(localStorage.getItem("userInfo")).session
	  },
	  getUserInfo(){
	  		return JSON.parse(localStorage.getItem("userInfo"))
	  }
  }
}
</script>

<style>
	#app{
		background-color:#f5f5f5;
	}
		
	.Limit{
		width: 1226px;
		height: 100%;
		margin: 0 auto;
	}
	.boxTitle{
		height:58px;
		width:100%;
		line-height:58px;
	}
	.boxTitle	h2{
			font-size: 22px;
			font-weight: 200;
			line-height: 58px;
			color: #333;
		}
	.Center{
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
