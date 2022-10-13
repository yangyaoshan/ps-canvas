import { h, ref, defineComponent } from "vue";
export default defineComponent({
  setup(props, context) {
    return () => <div class="toolbar">toolbar</div>;
  },
});
