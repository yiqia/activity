<template>
	<div name="flashSale">
		<div class="box">
			<div class="Limit">
				<bannerSmail :imgData="imgData[0]"></bannerSmail>
				<titleBlock title="二手信息"></titleBlock>
				<shopCard :shopList="saleList['saleList']" img="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=293&h=768&f=webp&q=90"></shopCard>
				<div class="Center">
					<el-pagination
					  background
					  layout="prev, pager, next"
					  :total="saleList['size']"
					 @current-change="changePages"
					  >
					</el-pagination>
				</div>
				<bannerSmail :imgData="imgData[1]"></bannerSmail>
			</div>
		</div>
	</div>
</template>

<script>
	import bannerSmail from "./smail/BannerSmail.vue"
	import titleBlock from "./smail/TitleBlock.vue"
	import shopCard from "./smail/ShopCard.vue"
	export default{
		name:"flashSale",
		data(){
			return {
				saleList:[],
				scrollLeft:0,
				hour:0,
				minute:0,
				second:0,
				imgData:[
					{
						url:"#",
						img:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/042df22986759ffc1a62d3edf0474633.jpg?thumb=1&w=1533&h=150&f=webp&q=90"
					},
					{
						url:"#",
						img:"//cdn.cnbj1.fds.api.mi-img.com/mi-mall/88e35cffc82cd98cd53172460067af17.jpg?thumb=1&w=1533&h=150&f=webp&q=90"
					}
				]
			}
		},
		props:["select"],
		components:{
			bannerSmail,
			titleBlock,
			shopCard
		},
		methods:{
			//左右滑动
			saleToggle:function(e){
				var id=e.target.dataset.id;
				var howList=this.saleList['saleList'].length/4-1;//2列  索引0 1
				var maxScroll=-(howList*1260);
				if(id=="right"){
					if(this.scrollLeft-1260<maxScroll){
						this.scrollLeft=0;
					}else{
						this.scrollLeft-=1260;
					}
				}else{
					if(this.scrollLeft+1260>0){
						this.scrollLeft=maxScroll;
					}else{
						this.scrollLeft+=1260;
					}
				}
			},
			changePages(e){
				var that = this;
				this.$http.get("/api/marketInfoList?page="+e).then(function(e){
					that.saleList=e.data;
				})
			}
			
		},
		mounted() {
			var that = this;
			this.$http.get("/api/marketInfoList?page=1").then(function(e){
				that.saleList=e.data;	
			})
		},
		watch:{
			select(){
				var that = this;
				var data = {
					typesof:2,
					title:this.select,
					yeshu:1
				}
				console.log(data)
				this.$http.get("/api/search",{params:data}).then(function(res){
					that.saleList['saleList']=res.data;
				})
			}
		},
		computed:{
			cardBorder(){
			return function(){
					var borderColor=["#2196f3","#e53935","#00c0a5","#ffac13","#83c44e","#00c0a5"];
					var rand=Math.round(Math.random()*5);
					return 'border-top-color:'+borderColor[rand]+'!important;transform:translateX('+this.scrollLeft+'px)';
					}
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~style/var.styl'
	 ::-webkit-scrollbar {display:none}
	.box
		width 100%
		background-color #f5f5f5
		padding-bottom 20px
		.boxTitle
			position relative
			.saleToggle
				position absolute
				bottom 2px
				right 0px
				width 70px
				height 25px
				display flex
				.saleToggleGrop
					flex 1
					border: 1px solid #e0e0e0;
					font-size 12px
					line-height 25px
					display flex
					justify-content center
					align-items center
					cursor pointer
				.saleToggleGrop:hover
					color $bgcolor
		.saleContent
			width 100%
			height 340px
			display flex
			.saleTime
				width 234px
				height 100%
				border-top-width: 1px;
				border-top-style: solid;
				margin-right 14px
				background: #f1eded;
				text-align: center;
				border-top-color: #e53935;
				img
					margin: 25px auto;
					width 34px
					height 53px
				.saleHow
					width 100%
					font-size: 21px;
					color: #ef3a3b;
					padding-top: 54px;
					text-align center
				.saleOver
					color: rgba(0,0,0,.54);
					font-size: 15px;
				.saleOverTime
					margin-top 28px
					width 100%
					display flex
					justify-content center
					span
						font-size 20px
						font-weight bold
						padding 8px 5px
					.saleTimeBox
						width 46px
						height 46px
						background-color #605751
						color: #fff;
						line-height 46px
						font-size: 24px;
		.saleList
			width 1260px
			height 100%
			overflow hidden
			.saleListBox
				height 100%
				overflow-x scroll
				overflow-y hidden
				white-space: nowrap;
			.saleCard
				transition all 1s
				white-space: normal;
				word-wrap: break-word;
				word-break: break-all;
				overflow: hidden;
				display: inline-block;
				width 234px
				height 300px
				white-space: nowrap;
				border-top-width: 1px;
				border-top-style: solid;
				margin-right 14px
				background: #fff;
				text-align: center;
				padding-top: 39px
				border-top-color: #e53935;
				img
					width 160px
					height 160px
					margin: 0 auto 22px;
				.saleTitle
					margin: 0 20px 3px;
					font-size: 14px;
					font-weight: 400;
					text-overflow: ellipsis;
					color: #212121;
					overflow: hidden;
					white-space: nowrap;
				.saleInfo
					height: 18px;
					margin: 0 20px 12px;
					font-size: 12px;
					text-overflow: ellipsis;
					color: #b0b0b0;
					overflow: hidden;
					white-space: nowrap;
				.price
					font-size 14px
					color: #ff6709;
				.priced
					font-size 14px
					color #b0b0b0;
	
					
</style>
