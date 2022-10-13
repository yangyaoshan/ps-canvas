import { h, defineComponent } from "vue";
export default defineComponent({
  setup(props, context) {
    return () => <div class="main-panel">MainPanel</div>;
  },
});
