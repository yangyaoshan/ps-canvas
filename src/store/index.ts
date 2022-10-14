import { createStore } from "vuex";
import global from "./modules/global";
import layer from "./modules/layer";

export default createStore({
  // 公共模板直接在这里展开就可以
  ...global,
  modules: {
    layer,
  },
});
