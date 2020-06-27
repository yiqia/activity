<template>
	<div name="swiper">
		<div class="box" :style="hwnum">
			<!-- 轮播图 -->
			<swiper-item v-for="(item,index) in imgList" v-bind:key="index" v-show="current==index">
				<a :href="item.url">
					<img :src="item.img" alt="">
				</a>
			</swiper-item>
			
			<!-- //轮播图的点 -->
			<div class="swiperPoint" v-show="point">
				<ul>
					<li v-for="(i,j) in imgList.length" v-bind:key="i" v-bind:point="j" @click="clickPoint" :class="j==current?'pointBorderOk':''"></li>
				</ul>
			</div>
			
			<!-- 轮播图的左右切换 -->
				<div class="swiperTaggle">	
					<span class="iconfont" @click="clickTaggle" @mouseenter="enterTaggle" @mouseleave="leaveTaggle" :style="isTaggle?'background-color:rgba(0,0,0,0.4);':''" data-index="1" >&#xe660;</span>
					<span class="iconfont" @click="clickTaggle"  @mouseenter="enterTaggle" @mouseleave="leaveTaggle" :style="isTaggle?'background-color:rgba(0,0,0,0.4);':''" data-index="2" >&#xe65f;</span>
				</div>
		</div>
		
	</div>
</template>

<script>
	import SwiperItem from './SwiperItem.vue'
	export default{
		name:"swiper",
		props:["height","width","imgList","point","autoplay","playtime"],
		//高，宽，图片列表，是否开启点，是否自动播放,自动播放时间
		data(){
			return{
				current:0,
				childList:[],
				isTaggle:false
			}
		},
		computed:{
			
		},
		components:{
			SwiperItem
		},
		methods:{
			clickPoint:function(e){
				var index=e.target.attributes[1].value;
				clearInterval(this.autoPlay);
				this.current=index;
			},
			// 鼠标进入左右按钮
			enterTaggle:function(e){
				if(e.target.dataset.index==1){
					this.isTaggle=true;
				}else{
					this.isTaggle=true;
				}
			},
			// 鼠标离开左右按钮
			leaveTaggle:function(e){
				if(e.target.dataset.index==1){
					this.isTaggle=false;
				}else{
					this.isTaggle=false;
				}
			},
			//点击左右切换
			clickTaggle:function(e){
				clearInterval(this.autoPlay);
				if(e.target.dataset.index==1){
					if(this.current-1<0){
						this.current=this.childList.length-1;
					}else{
						this.current-=1;
					}
					
				}else{
					if(this.current+1>this.childList.length-1){
						this.current=0;
					}else{
						this.current+=1;
					}
				}
			}
			
		},
	
		computed:{
			hwnum(){
				return "height:"+this.height+";width:"+this.width 
			}
		},
		watch:{
			imgList:function(e){
				this.childList=e;
			}
		},
		mounted() {
			var that = this;
			if(this.autoplay){
				this.autoPlay=setInterval(function(e){
					if(that.current+1>=that.childList.length){
						that.current=0;
					}else{
						that.current+=1;
					}
				},that.playtime!=undefined?that.playtime:'2000')
			}
			
			
		}
	}
</script>

<style lang="stylus" scoped>
	.box
		position relative
	.swiperPoint
		position absolute
		bottom 20px
		width 100%;
		height 30px
		ul
			height 100%
			width 150px
			float right
			display flex
			justify-content center
			align-items center
			margin 0 40px
		ul li
			width 6px
			height 6px
			margin 0 5px
			border-radius 50%;
			display inline-block
			background-color rgba(0,0,0,.4);
			cursor pointer
	.pointBorderOk
		background-color #fff!important;
		border 2px solid rgba(0,0,0,.3);
	.swiperTaggle span
		padding 20px 10px;
		font-size 22px;
		color #C1C1C1
		position absolute
		cursor pointer
	.swiperTaggle span:first-child
		top 45%
		left 234px;
	.swiperTaggle span:last-child
		top 45%
		right 0;
		
</style>
