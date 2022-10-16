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
clickToolbarButton("select-rectangle");
const iconList = reactive([
  {
    icon: "iconfont icon-move",
    key: "move",
  },
  {
    icon: "iconfont icon-select-rectangle",
    key: "select-rectangle",
  },
  {
    icon: "iconfont icon-select-circle",
    key: "select-circle",
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
]);
function clickToolbarButton(key: string) {
  console.log("file: Toolbar.vue ~ line 65 ~ clickToolbarButton ~ key", key);
  selectedButton.value = key;
  store.commit("layer/changeTool", {
    key,
  });
}
</script>

<style scoped></style>
