import { h, ref, defineComponent } from "vue";
import ToolbarButton from "../components/ToolbarButton";
export default defineComponent({
  setup(props, context) {
    let selectedButton = ref("move");
    const iconList = [
      {
        icon: "iconfont icon-move",
        key: "move",
      },
      {
        icon: "iconfont icon-select-circle",
        key: "select-circle",
      },
      {
        icon: "iconfont icon-select-rectangle",
        key: "select-rectangle",
      },
      {
        icon: "iconfont icon-oval",
        key: "draw-oval",
      },
      {
        icon: "iconfont icon-rectangle",
        key: "draw-rectangle",
      },
      {
        icon: "iconfont icon-pancel",
        key: "draw-pancel",
      },
      {
        icon: "iconfont icon-dropper",
        key: "get-color",
      },
      {
        icon: "iconfont icon-text",
        key: "input-text",
      },
      {
        icon: "iconfont icon-rubber",
        key: "clear-canvas",
      },
      {
        icon: "iconfont icon-crop",
        key: "crop-canvas",
      },
    ];
    function clickToolbarButton(key: string) {
      selectedButton.value = key;
    }
    return () => (
      <div class="toolbar">
        {iconList.map((obj) => (
          <ToolbarButton
            sign={obj.key}
            icon={obj.icon}
            selected={obj.key === selectedButton.value}
            onClick={clickToolbarButton}
          />
        ))}
      </div>
    );
  },
});
