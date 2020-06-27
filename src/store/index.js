import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0,
	select:{}
  },
  mutations: {
	changeSelect (ctx,data){
		ctx.select=data;
	}
  }
})