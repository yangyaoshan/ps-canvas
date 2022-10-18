<template>
  <div class="toolbar">
    <ToolbarButton
      :key="obj.key"
      v-for="obj in iconList"
      :sign="obj.key"
      :icon="obj.icon"
      :selected="obj.key === selectedButton"
      @click="() => clickToolbarButton(obj.key)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { useStore } from "vuex";
import ToolbarButton from "../components/ToolbarButton.vue";
let selectedButton = ref("");
const store = useStore();
// handleToolbar(selectedButton.value)
clickToolbarButton("SelectRectangle");
interface IconList {
  key: ToolCommand;
  icon: string;
}

const iconList: IconList[] = reactive([
  {
    icon: "iconfont icon-move",
    key: "Move",
  },
  {
    icon: "iconfont icon-select-rectangle",
    key: "SelectRectangle",
  },
  {
    icon: "iconfont icon-select-circle",
    key: "SelectCircle",
  },
  {
    icon: "iconfont icon-oval",
    key: "DrawOval",
  },
  {
    icon: "iconfont icon-rectangle",
    key: "DrawRectangle",
  },
  {
    icon: "iconfont icon-pancel",
    key: "DrawPancel",
  },
  {
    icon: "iconfont icon-dropper",
    key: "GetColor",
  },
  {
    icon: "iconfont icon-text",
    key: "InputText",
  },
  {
    icon: "iconfont icon-rubber",
    key: "ClearCanvas",
  },
  {
    icon: "iconfont icon-crop",
    key: "CropCanvas",
  },
]);
function clickToolbarButton(key: ToolCommand) {
  console.log("file: Toolbar.vue ~ line 65 ~ clickToolbarButton ~ key", key);
  selectedButton.value = key;
  store.commit("layer/changeTool", {
    key,
  });
}
</script>

<style scoped></style>
