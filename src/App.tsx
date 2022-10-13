import { h, ref, defineComponent } from "vue";
import TopConfig from "./components/TopConfig";
import Toolbar from "./components/Toolbar";
import MainPanel from "./components/MainPanel";
export default defineComponent({
  setup(props, context) {
    return () => (
      <div class="ps-canvas">
        <TopConfig />
        <Toolbar />
        <MainPanel />
      </div>
    );
  },
});
