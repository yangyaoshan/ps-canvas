import { Module } from "vuex";

interface State {
  // width: number;
  // height: number;
  layers: never[];
  toolCommand: ToolCommand | null;
}

const store: Module<State, {}> = {
  namespaced: true,
  state: {
    // width: 0,
    // height: 0,
    layers: [],
    toolCommand: null,
  },
  mutations: {
    changeTool(state, obj: { key: ToolCommand }) {
      state.toolCommand = obj.key;
    },
  },
  actions: {},
  getters: {},
};
// 全局
export default store;
