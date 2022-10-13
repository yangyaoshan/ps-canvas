import { h, defineComponent } from "vue";
// const emit = defineEmits(["change"]);
export default defineComponent({
  emits: ["click"],
  props: {
    sign: {
      type: String,
      require: true,
    },
    icon: {
      type: String,
      require: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    function handleClick(ev: Event) {
      ev.stopPropagation();
      context.emit("click", props.sign);
    }
    return () => (
      <div class="toolbar-button">
        <button
          class={{ "toolbar-button__inner": true, selected: props.selected }}
          onClick={handleClick}
        >
          <i class={props.icon}></i>
        </button>
      </div>
    );
  },
});
