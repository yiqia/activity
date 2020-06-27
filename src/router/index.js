import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import info from '@/view/info'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		name: 'index',
		component: index
	},
	{
		path: '/info',
		name: 'info',
		component: info
	},
	{
	    path: '/edit',
	    name: 'edit',
	    component: () => import('child/Edit.vue')
	},
	//活动信息
	{
	    path: '/show',
	    name: 'show',
	    component: () => import('@/view/show.vue')
	},
	//比赛信息
	{
	    path: '/mach',
	    name: 'mach',
	    component: () => import('@/view/mach.vue')
	},
	//二手物品
	{
	    path: '/secondHead',
	    name: 'secondHead',
	    component: () => import('@/view/secondHead.vue')
	},
	//商品详情
	{
	    path: '/showShop',
	    name: 'showShop',
	    component: () => import('@/view/showShop.vue')
	},
	//个人中心
	{
	    path: '/userInfo',
	    name: 'userInfo',
		redirect:"/mysend",
	    component: () => import('@/view/userInfo.vue'),
		
		children:[
			//发布信息
			{
			    path: '/sendActivity',
			    name: 'sendActivity',
			    component: () => import('@/components/SendActivity.vue')
			},
			//我的信息
			{
			    path: '/changeUser',
			    name: 'changeUser',
			    component: () => import('@/components/ChangeUser.vue')
			},
			//我的发布活动和比赛
			{
			    path: '/mysend',
			    name: 'mysend',
			    component: () => import('@/components/MySend.vue')
			},
			{
			    path: '/sendShop',
			    name: 'sendShop',
			    component: () => import('@/components/SendShop.vue')
			},
			{
			    path: '/mySendShop',
			    name: 'mySendShop',
			    component: () => import('@/components/MySendShop.vue')
			}
		]
	}
	]
})
