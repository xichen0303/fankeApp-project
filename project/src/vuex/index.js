// 王迎港-----------全局资源管理
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    pageName: ''//头部名称
  },
  mutations: {
    pageNameM: function (state,data) {
      state.pageName = data;
    }
  },
  actions: {
    pageNameA: function ({commit}, data) {
      commit("pageNameM",data);
    }
  }
});

export default store;
