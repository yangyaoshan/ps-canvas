import { Module } from "vuex";

interface State {
  // width: number;
  // height: number;
  layers: never[];
  toolCommand: string;
}

const store: Module<State, {}> = {
  namespaced: true,
  state: {
    // width: 0,
    // height: 0,
    layers: [],
    toolCommand: "",
  },
  mutations: {
    changeTool(state, obj: { key: string }) {
      state.toolCommand = obj.key;
    },
  },
  actions: {},
  getters: {},
};
// 全局
export default store;
