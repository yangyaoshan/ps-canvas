import { Module } from "vuex";
const store: Module<{}, {}> = {
  state: {
    appInfo: null,
  },
  mutations: {
    newApp() {},
  },
  actions: {},
  getters: {},
};
// 全局
export default store;
