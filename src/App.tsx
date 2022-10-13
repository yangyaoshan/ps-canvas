import { h, ref, defineComponent } from "vue";
import TopConfig from "./views/TopConfig";
import Toolbar from "./views/Toolbar";
import MainPanel from "./views/MainPanel";
export default defineComponent({
  setup(props, context) {
    return () => (
      <div class="ps-canvas">
        <TopConfig />
        <div class="ps-canvas__main-container">
          <Toolbar />
          <MainPanel />
        </div>
      </div>
    );
  },
});
