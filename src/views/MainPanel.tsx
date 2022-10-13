import { h, defineComponent, ref } from "vue";
export default defineComponent({
  setup(props, context) {
    let cnvWidth = ref(0);
    let cnvHeight = ref(0);
    const layers = [];
    return () => (
      <div class="main-panel">
        <canvas width=""></canvas>
      </div>
    );
  },
});
