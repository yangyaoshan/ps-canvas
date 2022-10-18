import { Module } from "vuex";
interface State {
  appInfo: AppInfo | null;
}
interface AppInfo {
  width: string;
  height: string;
  background: string;
}
const store: Module<State, {}> = {
  state: {
    appInfo: null,
  },
  mutations: {
    setAppInfo(state, info: AppInfo) {
      state.appInfo = info;
    },
  },
  actions: {},
  getters: {},
};
// 全局
export default store;
